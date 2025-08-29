# PE05 – Recipe Finder
### Jeff Anderson
### CS628 - City University of Seattle - MSCS

# Input
Users interact with the application through forms and navigation links. This is a CRUD application, so there are methods for **C**reating, **R**eading, **U**pdating, and **D**eleting.
In the Add Recipe form, users can provide recipe data like recipe name, an ingredients list (comma- separated), cooking instructions, type of cuisine, prep time, and cook time. They can also add notes about the recipe for use cases like additional ingredients or where the recipe is from. Clicking on a recipe opens a card showing the inputted information. Users can then update the recipe by clicking the edit button and updating as necessary, or deleting the recipe altogether.

# Process
The application processes inputs through a combination of React components and Node.js with Express on the server side. React router manages navigation between different views, like the recipe list and recipe details view. The backend is built with Node.js and Express, and interacts with MongoDB Atlas to store, retrieve, update, and delete recipe data. `MongoClient`, the MongoDB Node.js driver helps with the database operations.
The recipe details page is a nested route that displays recipe details on the same page as the recipe list by using `useParams`.
The overall structure of the application is based on a heavily modified and reformatted HOS09 assignment with many of the ideas for this assignment coming from that assignment along with some others. Implementation was adapted to meet all the requirements of this PE05 assignment.

# Output
The application provides visual confirmation for all CRUD (Create, Read, Update, Delete) actions in a user-friendly manner. The entire list of recipes is presented to the user, and when a user selects a recipe, a detailed view is rendered within the same page layout, which provides consistency and easy navigation. Feedback is given for creating, updating, or deleting recipes with the content refreshing dynamically to reflect those changes. If notes are present in the recipe details, then they will be displayed.  This design enhances usability and keeps the interface intuitive and responsive.