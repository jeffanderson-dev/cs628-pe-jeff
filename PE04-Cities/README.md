# Cities Application

## Input
According to the requirements,  users can add a new city by providing its name, country, and population. Users can click on a city to view its population and other details added by the user. There are 2 seeded cities already to use as an example.

## Process
The application maintains a list of cities in the state. When a new city is added, it's appended to the list. When a city is clicked, its details are displayed using the useParams hook to get the city's ID. After adding a city, the user is redirected back to the cities list.

## Output
This program outputs a list of cities with clickable links to view details. Upon clicking the city details, or from the navigation bar, a form will appear to add new cities. Detailed information about a selected city displayed on the same page as the cities list.