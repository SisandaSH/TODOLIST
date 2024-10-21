// todo.test.js
import '@testing-library/jest-dom/extend-expect';
import { addTask } from './script'; // Adjust the path as necessary

describe('To-Do List App', () => {
    beforeEach(() => {
        // Set up the DOM for each test
        document.body.innerHTML = `
            <input type="text" id="todoInput">
            <button onclick="addTask()">Add</button>
            <div id="displayBox"></div>
        `;
    });

    test('should add a new task to the DOM', () => {
        const input = document.getElementById('todoInput');
        const taskText = 'Buy groceries';
        
        // Simulate user input
        input.value = taskText;
        
        // Call the addTask function
        addTask();
        
        // Check if the task is rendered in the display box
        const displayBox = document.getElementById('displayBox');
        expect(displayBox).toHaveTextContent(taskText); // Assert that the task is displayed
    });

    test('should not add an empty task to the DOM', () => {
        const input = document.getElementById('todoInput');
        
        // Simulate user input as empty
        input.value = '';
        
        // Call the addTask function
        addTask();
        
        // Check if there are no tasks rendered in the display box
        const displayBox = document.getElementById('displayBox');
        expect(displayBox).toBeEmptyDOMElement(); // Assert that the display box is empty
    });
});
