// todo.test.js
const { addTask, tasks } = require('./script'); // Adjust the path as necessary

describe('To-Do List App', () => {
    beforeEach(() => {
        // Reset tasks array before each test
        tasks.length = 0;
    });

    test('should add a new task to the tasks array', () => {
        const inputTask = 'Buy groceries';
        
        // Simulate adding a task
        document.body.innerHTML = `
            <input type="text" id="todoInput" value="${inputTask}">
        `;
        
        addTask(); // Call the function to add the task
        
        expect(tasks).toContain(inputTask); // Check if the task was added
    });

    test('should not add an empty task', () => {
        const inputTask = '';
        
        // Simulate adding an empty task
        document.body.innerHTML = `
            <input type="text" id="todoInput" value="${inputTask}">
        `;
        
        addTask(); // Call the function to add the task
        
        expect(tasks).not.toContain(inputTask); // Ensure no empty task is added
    });
});
