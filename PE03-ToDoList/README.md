# PE03 – ToDo List App
#### Jeff Anderson for CS628 Full Stack web dev

# Input

The application accepts user input through a text input field, as specified in the PE03 instructions. Users type a task description and submit it by clicking the "Add Task" button, also listed in the instructions. When a user adds a task, each task is accompanied by a "Delete" button which allows users to remove the task.

# Process

This app follows the implementation guidance provided in the PE03 doc. The `useState` hook is used to manage both the array list of Todos and the Todo items. The app includes the implementation of two event handlers (`onChange` and `onClick`) to capture user interactions such as typing in the input field and clicking buttons. Two separate components are used,  `TodoList` to render the list, and `TodoItem` to render each task. The list of tasks is rendered using the `.map()` function inside the `TodoList` component.

# Output

The output is a styled user interface that displays all current ToDos. As users add or delete tasks, the list updates immediately on the pagewith no refresh required fulfilling the goal of a responsive and dynamic single-page application. The UI is customized with CSS styling as close as possible to the provided image in the PE03 instruction doc (and I think I nailed it)


