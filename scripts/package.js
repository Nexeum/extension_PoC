const exec = require('child_process').exec; // Async version
const rimraf = require('rimraf');
const fs = require('fs').promises; // Using promises for async file operations
const path = require('path');

/**
 * Handles packaging of a single task within the "tasks" directory.
 * @param taskDir - absolute path to a task directory
 */
async function packageTask(taskDir) {
    try {
        const taskPackage = path.join(taskDir, "dist");

        // Create dist directory if it doesn't exist
        await fs.mkdir(taskPackage, { recursive: true });

        await copySourcesAsync(taskDir, 'icon.jpg');
        await copySourcesAsync(taskDir, 'task.json');
        await copySourcesAsync(taskDir, 'package.json');

        await execNpmAsync('install', taskPackage); // Using async exec

    } catch (error) {
        console.error(`Error packaging task ${taskDir}:`, error);
    }
}

/**
 * Copies a source file or directory to a destination within the 'dist' folder.
 * @param taskDir -  absolute path to the task directory
 * @param element -  name of the file or directory to copy
 */
async function copySourcesAsync(taskDir, element) {
    const source = path.join(taskDir, element);
    const destination = path.join(taskDir, "dist", element);

    try {
        await fs.copyFile(source, destination);
    } catch (error) {
        console.error(`Error copying ${element} for ${taskDir}:`, error);
    }
}

/**
 * Executes an npm command asynchronously.
 * @param command - (String) - The npm command to execute, i.e. 'install', 'pack', etc.
 * @param cwd - (String) - Current working directory.
 */
async function execNpmAsync(command, cwd) {
    return new Promise((resolve, reject) => {
        exec(`npm ${command} -q --only=production`, { cwd: cwd }, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}

/**
 * Initiates the packaging process for all tasks.
 */
async function packageTasks() {
    try {
        const tasksDir = path.join(__dirname, 'tasks'); // Assuming tasks directory is relative
        const taskNames = await fs.readdir(tasksDir);

        for (const taskName of taskNames) {
            const taskDir = path.join(tasksDir, taskName);
            const packageJsonPath = path.join(taskDir, "package.json");

            // Check for package.json
            if (await fs.stat(packageJsonPath).isFile()) {
                await packageTask(taskDir);
            } else {
                // Handle nested task version directories (if needed)
            }
        }
    } catch (error) {
        console.error("Error during packaging:", error);
    }
}

packageTasks();
