"use strict";

const path = require('path');
const assert = require('chai').assert;

const config = require('./config');

const Task = require('../app/renderer/task');
const TaskStatus = require('../app/common/task_status');

describe("Tasks", () => {
    let testTask;
    const taskCommand = "node " + path.join(config.testResources, config.taskFiles.helloWorld);
    beforeEach(() => {
        testTask = new Task("Test", "", taskCommand);
    });

    afterEach(() => {
        testTask.stop();
    });


    it("Valid Tasks Status", () => {
        assert.isOk(TaskStatus.idle);
        assert.isOk(TaskStatus.error);
        assert.isOk(TaskStatus.running);
        assert.isOk(TaskStatus.ok);
        assert.isOk(TaskStatus.stopped);
    });

    it("Correct Task Execution", (done) => {
        let stdoutCalled = false;
        assert.isFalse(testTask.isRunning());
        assert.strictEqual(testTask.status, TaskStatus.idle);

        function stdout(text) {
            assert.strictEqual(text, "hello\n");
            stdoutCalled = true;
        }

        testTask.run(stdout, () => {
            assert.isFalse(testTask.isRunning());
            assert.strictEqual(testTask.status, TaskStatus.ok);
            assert.isTrue(stdoutCalled);
            done();

        });
        assert.isTrue(testTask.isRunning());
        assert.strictEqual(testTask.status, TaskStatus.running);
    });

    it("Get Task Config", () => {
        const taskData = testTask.getData();
        const expectedResult = {
            title: "Test",
            command: taskCommand
        };
        assert.strictEqual(JSON.stringify(taskData), JSON.stringify(expectedResult));
    });

    it.skip("Invalid Task Execution", () => {

    });
});
