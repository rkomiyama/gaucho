/* globals Vue */
"use strict";

// const ipcRenderer = require('electron').ipcRenderer;

<<<<<<< HEAD
const TasksHandler = require('./app/renderer/tasks_handler');
const AppStatus = require('./app/renderer/app_status');
const Material = require('./app/renderer/materialize');
=======
// const TaskConfig = require('./app/renderer/task_config');
// const AppStatus = require('./app/renderer/app_status');
// const Material = require('./app/renderer/materialize');
//
// const components = {
//     "task-suite": require('./app/renderer/components/task_suite'),
//     "navbar": require('./app/renderer/components/navbar'),
//     "bottom-bar": require('./app/renderer/components/bottom_bar'),
//     "config-menu": require('./app/renderer/components/config_menu')
// };
>>>>>>> minor configuration of vue and browserify


<<<<<<< HEAD

ipcRenderer.on('before-close', () => {
    TasksHandler.saveTasks();
    const promises = TasksHandler.suites.map((s) => s.stopAll());
    Promise.all(promises).then(() => {
        ipcRenderer.send("close-app");
    });
});
=======
// ipcRenderer.on('before-close', () => {
//     TaskConfig.saveTasks();
//     const promises = TaskConfig.suites.map((s) => s.stopAll());
//     Promise.all(promises).then(() => {
//         ipcRenderer.send("close-app");
//     });
// });
>>>>>>> minor configuration of vue and browserify

const app = new Vue({ // eslint-disable-line no-unused-vars
    el: '#app',
    data: {
<<<<<<< HEAD
        suites: TasksHandler.suites,
        AppStatus: AppStatus
    },
    components: components,
    beforeMount() {
        TasksHandler.loadTasks();
    },
    mounted() {
        Material.init();
=======
        suites: [],
        loaded: false,
        // AppStatus: AppStatus
    },
    // components: components,
    mounted() {
        // Material.init();
        // TaskConfig.loadTasks();
        // this.suites = TaskConfig.suites;
        // this.loaded = true;
>>>>>>> minor configuration of vue and browserify
    },
    updated() {
        // this.$nextTick(() => {
        //     Material.init();
        // });
    }
});
