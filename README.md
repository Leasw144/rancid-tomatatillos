This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Rancid Tomatillos Paired Project
Mod 3 Pair Project

### Developers

  * [Horacio Borrego](https://github.com/H-Bo214)
  
  * [Linus Leas](https://github.com/Leasw144)

### Project Links
- [Repo](https://github.com/Leasw144/rancid-tomatatillos)
- [Project Board](https://github.com/Leasw144/rancid-tomatatillos/projects/1)
- [Project Spec](https://frontend.turing.io/projects/module-3/rancid-tomatillos-v2.html)

### Abstract

This was a paired project that was designed to create a movie review app. In this project, we designed an interactive web page for users view a collection of movies and their details. A user will be able to log into their account, favorite movies, comment on movies, and submit a rating for a specific movie. The user is also able to view their comments and comments made by different users. The user also has the ability to delete a prior ratings on any movie they have reviewed in the past.

This project will demonstrate our understanding and implementation of React class based and functional components, props, state, testing suites, HTML/CSS UX/UI design, ability to write modular, reusable code that follows SRP, JSX and the ability to follow spec/comp to complete a functional app.

## Learning Goals ##

* Solidify React fundamentals
* Solidify using React Router to create a multi-page user experience
* Solidify component and asynchronous JS testing
* Work with and navigate a shared, persistent API using GET, POST, and DELETE requests

# Set Up

## Front-end
1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run git clone (you replace the [...] with the terminal command arguments): git clone [remote-address] [what you want to name the repo]
2. Remove the default remote: git remote rm origin (notice that git remote -v not gives you back nothing)
3. Create a new repo on GitHub with the name of [what you want to name the repo] to be consistent with naming
4. Copy the address that you would use to clone down this repo - something like git@github.com:...
5. Add this remote to your cloned down repo: git remote add origin [address you copied in the previous step] - do not include the brackets
6. Now try to commit something and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.
7. Once you have cloned the repo, change into the directory and install the project dependencies by running npm install.
8. To verify that it is setup correctly, run npm start in your terminal. Go to http://localhost:3000/ to interact with the application. Enter control + c in your terminal to stop the server at any time.

## Back-end
If you haven't already installed Nodemon globally on your computer, run the following script: $ npm install -g nodemon

This allows you to hot-reload the server as your are developing (rather than needing to kill the server and restart every time you make a change).

1. Clone down this repo.
2. Change into the repo and install dependencies.
3. To run the server without needing hot reloading, use the start script $ npm start.
4. To run the server while actively developing on the BE (when you need hot reloading), use the start script $ npm run dev.

## Technologies / Systems
* React
* Javascript
* JSX
* git/Version control
* React testing library
* CSS
* React Router


## Planning: ##
 
The paired project was created using vscode. We used gitHub projects to manage issue cards and the project board. We consulted the Turing lessons, peers and mentors as well as the MDN Docs and various responses to google searches for support when needed.
 
## Challenges ##
 
* This was our introduction to React, so that in itself presented challenges.
* asyncronous functions
  
## Wins ##
  
* Successfully utilizing the React library to populate our application with the data
  
# Future Iterations/Known Issues
1. There is currently a known bug associated with the `delete rating` button. When first deleting and submitting a rating, or vice versa, the button breaks causing a 422 (and sometimes 400) level error. Future iterations would work on fixing this bug.
2. The comment text field is currently viewable to guests and account holders alike, future iterations would make it such that only logged in users could see and access these fields. The same goes for our rating box.
3. More robust testing could be further implemented including several sad path testing routes, primarily having to do with sending blank or duplicate comments.

# Gif Showcase
1. Onload <br/>
  ![onload](src/assets/on-load.gif)
2. Login and Favoriting <br/>
  ![login/favoriting](src/assets/login:favoriting.gif)
3. Rating Movies <br/>
  ![rating movies](src/assets/rating-movies.gif)
4. Commenting <br/>
  ![commenting](src/assets/commenting.gif)
  
  
  
