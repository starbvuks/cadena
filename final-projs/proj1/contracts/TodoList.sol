pragma solidity ^0.8.9;

contract TodoList {
    uint256 taskCount = 0;

    struct Task {
        uint256 id;
        string content;
        bool done;
    }

    mapping(uint256 => Task) public tasks;

    constructor() public {
        createTask("first task", true);
    }

    function createTask(string memory _content, bool _done) public {
        taskCount++;
        // task num (task-count) has content and is set completed = false
        tasks[taskCount] = Task(taskCount, _content, _done);
    }
}
