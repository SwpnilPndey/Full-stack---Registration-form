## App is active at : https://full-stack-tic-tac-toe.onrender.com/

# Description 
This is a full stack web application which allows users to register on website in order to enter main website and play an addictive tictactoe game

## Json Web Token for user authentication
For seamless user experience, the feature of JSON Web Token has been added. User may accidently close the browser tab and then if they visit the main page from the navigation bar, they can directly visit the main page without logging in from login page. User must login again after the JWT expires. Currently the token expiry time is 90 seconds. You may change it as per your need. 

## Getting Started
To run this website locally, you can follow these steps:

1. Clone this repository to your local machine.
2. Open the project folder in text editor like Visual Studio Code 
3. Install node packages in package.json using : **npm install** 
4. The entry point to the app is **app.js**. You can make the required routes for the webapp in this file 
5. The database schema is defined in **register.js** file in models directory. You change change the schema as per your need 
6. The connection between nodeJs webserver and the database (mongoDB here) is defined in conn.js in db directory. Kindly change the **MONGO_URI** address to your respective Mongo URI and define it in the .env file in the root of the project. You can also setup a local mongo composs as a backend data base. Use MONGO_URI accordinlgy
7. For the front end, I have used **handlebar templates**. The primary hbs files are stored in views directory and partials are stored in partials directory in template directory of root. You can make your own hbs files to render your own customised pages on registration and login
8. Any other static files and pages have to be kept in public folder and referenced accordingly in views and partials 
9. Once connection is established and our application is running at localhost, you can register with the webapp for the first time you visit the page and play the addictive tic-tac-toe game
10. For the next visits, user can simply login with the username and password he entered at the time of registration

## Backend Integration
This webapp interacts with the nodeJS based backend server which interacts with the mongoDB database to store and retrieve user information. 

## Technologies Used
This website was built using:

- HTML
- CSS
- JavaScript
- NodeJS
- ExpressJS
- MongoDB
- Handlebars

## Scope of improvements
There are many ways the webapp can be improved. Some of them are : 

- Tic tac toe game to be available for different users at same time by maintaining state of game and making it available to different users at same time and for in game communication using two way protocols like websocket
- Making the UI better with CSS frameworks like bootstrap, tailwind and add more features and services enhancing user experience
- Maintain a global count of scores of every pair of users playing the game in any session 

## Suggestions
I will be more than happy if you raise Pull Requests for any improvements and suggestions. 

