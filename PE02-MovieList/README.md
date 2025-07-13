# PE02

## for CS628 - Full Stack Web Dev

### Jeff Anderson

## Input

The user provides input by interacting with a dropdown menu to select a movie genre and by clicking on individual movie cards. The application also includes a predefined list of movies, each with a title, genre, and release year. I used movies that all been recently watched in my household and were at the top of mind.

## Process

The application uses React and functional components to manage state and render content dynamically. When a user selects a genre, the app filters the original movie list to only include movies that match the selected genre. If “All Genres” is selected, the full list is shown. When a user clicks a movie, an alert is triggered showing the movie’s title, as required by the assignment statement. The filtering and click logic are handled using React’s useState hook, event handlers, and simple conditionals or array methods.

## Output

The application displays a styled list of movies on the screen, updates the list dynamically based on the selected genre, and shows an alert with the title when a movie card is clicked. The application uses some basic CSS that styled the page with some hover effect, and a nice off-white color for the movie cards.

I used references from [here](https://www.freecodecamp.org/news/build-a-dynamic-dropdown-component/) and [here](https://stackoverflow.com/questions/62239420/steps-to-populate-dynamic-dropdown-using-arrays-in-reactjs-using-react-hooks) to work out some kinks.
