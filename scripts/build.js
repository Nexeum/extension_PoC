const { exec } = require('child_process');
const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');

async function buildTasks() {
    const tasksDir = 'tasks';

    try {
        const tasks = await fs.promises.readdir(tasksDir);

        await Promise.all(tasks.map(async (taskName) => {
            const taskDir = path.join(tasksDir, taskName);
            const packageJsonPath = path.join(taskDir, 'package.json');

            try {
                await fs.promises.access(packageJsonPath);
                await execNpm('build', taskDir);
            } catch (error) {
                // Handle errors for nested tasks (if needed)
                console.error(`Error building task ${taskName}`, error);
            }
        }));
    } catch (error) {
        console.error('Error reading the tasks directory:', error);
    }
}

function clean(cwd) {
    rimraf.sync(path.join(cwd, 'dist'));
}

async function execNpm(command, cwd) {
    clean(cwd);
    return new Promise((resolve, reject) => {
        exec(`npm run ${command}`, { cwd }, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                console.log(stdout);
                resolve();
            }
        });
    });
}

buildTasks();
