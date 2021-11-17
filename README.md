# How Green is Your Plate?

![How Green is Your Plate logo](https://res.cloudinary.com/dysirhng8/image/upload/v1637161497/greenplate/landing_l6kl6h_gwmaij.png)

## Introduction

This app is the result of a 10 day group project during the General Assembly Software Engineering Immersive course in 2021. Working with [Victor Liew](https://github.com/luckymouse11) and [Megan Sowa](https://github.com/mesowa), we built a full stack MERN (Mongo, Node.js, Express and React) application that uses data from [Our World in Data's Environmental Impacts of Food Production](https://ourworldindata.org/environmental-impacts-of-food#) to calculate the environmental impact of a recipe based on the ingredients chosen.

## Backend and database

As part of our brief, the app needed to make C.R.U.D. (create, read, update, delete) operations as Axios requests to our own backend API database (which needed to include embedded and referenced relationships), so our database was made up of:

- User collection - populated with a recipes field as owner as an embedded relationship
- Ingredient collection - with carbon footprint, water use, etc as referenced relationships
- Recipe collection - populated with ingredients field (referenced) and User as owner (embedded)
- Environmental factors collection - in future we would like to link to ingredients to show low environmentally impactful ingredients!

The CRUD requests we set up were:

RECIPES - 
- GET all recipes
- POST recipe
- DELETE recipe
- UPDATE recipe

USER - 
- POST login (checking via auth)
- POST new user via register
- GET user by id
- GET own user

INGREDIENTS -
- GET ingredients

ENVIRONMENTAL FACTORS -
- GET factors

We also were briefed to develop a front end app that would make these requests, thinking about the user journey through the app. The site also had to include authorization of a user.

## Wireframes for Frontend

In order to really clarify how we wanted the site to work and look for the user, I used Google Jamboard to build really simple wireframes for the site with input from the team as to any specifics they wanted to see. These helped us consider things like how we should build the HTML, in particular: any flexbox properties, the URLS for each route, and the auth routes/what information would require a user to be logged in to view (ie: adding a recipe/logout features in the navbar). We decided we wanted to use Bootstrap to build out some of the basic formatting and ensure key components would sit well within the layout, considering the short amount of time we had for a relatively complex project. These would form the basis for our plans, but some extra features were added and some elements are part of the "to do" plan!


### Homepage
![homepage wireframe](https://res.cloudinary.com/dysirhng8/image/upload/v1637159434/greenplate/Food_emissions_app_1_rksqrh.png)
### Register Form
![register form wireframe](https://res.cloudinary.com/dysirhng8/image/upload/v1637159434/greenplate/Food_emissions_app_7_ubildo.png)
### Login Form
![login form wireframe](https://res.cloudinary.com/dysirhng8/image/upload/v1637159434/greenplate/Food_emissions_app_6_nde65s.png)
### User Profile
![user profile wireframe](https://res.cloudinary.com/dysirhng8/image/upload/v1637159434/greenplate/Food_emissions_app_3_hsqyod.png)
### All Recipes Index Page
![all recipes index wireframe](https://res.cloudinary.com/dysirhng8/image/upload/v1637159434/greenplate/Food_emissions_app_2_1_o5akmg.png)
### Individual Recipe Page
![recipe page](https://res.cloudinary.com/dysirhng8/image/upload/v1637159434/greenplate/Food_emissions_app_4_p8dnmk.png)
### Add Recipe Form
![add recipe form](https://res.cloudinary.com/dysirhng8/image/upload/v1637159434/greenplate/Food_emissions_app_8_rohq9m.png)
### Individual Environmental Factor Page
![environmental factor information page](https://res.cloudinary.com/dysirhng8/image/upload/v1637159434/greenplate/Food_emissions_app_5_a4toyd.png)
### Other Pages Added after initial Wireframe



## Planning Process

As part of the planning and delivery process, I took responsibility for setting up a project plan over the week, developing a Trello board to track progress on the front end and back end components, any API route testing to be checked in Insomnia and through the front end, and the installs required to start up the project. We ran the project with a daily stand up, to share tasks and progress, establish any potential issues and support needed, and team members would move task cards into columns whilst working on them.

![trello board](https://res.cloudinary.com/dysirhng8/image/upload/v1637159451/greenplate/Screenshot_2021-09-29_at_17.05.09_1_p2pk6q.png)

Some of the main challenges with project management we discovered were with working as a team on Github, making merge requests, and remedying issues with branches. We solved these issues by ensuring we kept communicating really clearly, and working as a team to support people making github pull requests, to boost confidence until we all felt comfortable doing this individually.

## Tech stack and Installs for frontend

To get to the client side: cd client 

Then run:
- yarn
- yarn add axios
- yarn add http-proxy-middleware
- yarn add react-select
- yarn add dotenv
- yarn add react-router-dom


To run server: yarn start

## Finished Product

Screen Grabs here

To Demo the app, head to our [Heroku hosted site](https://greenplate.herokuapp.com/)
