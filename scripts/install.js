const exec = require('child_process').exec; // More flexible than execSync
const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');

/**
 * Install task dependencies with enhancements.
 * @param {string} taskDir - The path to the task directory.
 */
function installTask(taskDir) {
    if (!fs.existsSync(path.join(taskDir, "package.json"))) {
        console.warn(`Skipping task ${taskDir}: No 'package.json' found`);
        return;
    }

    clean(taskDir);

    try {
        exec('npm install -q', { cwd: taskDir }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error installing dependencies for ${taskDir}:`, error);
            } else {
                console.log(`Dependencies installed for ${taskDir}`);
            }
        });
    } catch (err) {
        console.error(`Error installing dependencies for ${taskDir}:`, err);
    }
}

/**
 * Clean npm install/pack files (with safer path handling).
 * @param {string} cwd - (String) - Current working directory.
 */
function clean(cwd) {
    rimraf.sync(path.join(cwd, 'node_modules'));
    rimraf.sync(path.join(cwd, 'package-lock.json'));

    // More targeted deletion of .tgz files
    fs.readdirSync(cwd).forEach(file => {
        if (file.endsWith('.tgz')) {
            rimraf.sync(path.join(cwd, file));
        }
    });
}

/**
 * Install tasks - handles nested tasks, tracks dependencies.
 */
function installTasks() {
    const installedTasks = new Set(); // Track installed tasks

    fs.readdir('tasks', (err, taskDirs) => {
        taskDirs.forEach(taskName => {
            const taskDir = path.join('tasks', taskName);

            if (!installedTasks.has(taskDir)) {
                installTask(taskDir);
                installedTasks.add(taskDir);
            }

            // Look for nested tasks
            fs.readdir(taskDir, (err, subDirs) => {
                subDirs.forEach(subDir => {
                    const nestedTaskDir = path.join(taskDir, subDir);
                    if (!installedTasks.has(nestedTaskDir)) {
                        installTask(nestedTaskDir);
                        installedTasks.add(nestedTaskDir);
                    }
                });
            });
        });
    });
}

installTasks();
