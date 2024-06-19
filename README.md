# Volunteer Management and Shuttle Scheduling System in Angular
This project is developed using Angular and is aimed at building a system to manage and schedule volunteers within a weekly shuttle array.


## Contents:
**Home Page**

The main page (app.component) will include a navigation menu to the volunteers list page and the shuttle array page.

**Volunteers List**

This page will display the existing list of volunteers.

**Edit Volunteer Details**

Clicking on a volunteer in the volunteers list page will navigate to the edit volunteer details page.
This page will display editable details of the volunteer using a reactive form.
It should allow marking the days of the week the volunteer is available.

**Server Validation Before Saving**

Upon saving volunteer details, the system will validate with the server if there are any previously scheduled days that are not marked in the current update.
If such days exist, an error message will be displayed, preventing further saving until the previous scheduling is cleared.

**Shuttle Array**

This page will display the current days of the week and allow selecting a volunteer for each day.
Each day will be represented as a cell, with a dropdown showing potential volunteers available for that day.
The cell will be colored to indicate that the day has already been scheduled.

## Installation and Running:

### System Requirements:
Node.js and NPM for development environment setup.
Angular CLI for managing and running the Angular project.

### Setting Up Development Environment:
Install Node.js and NPM from the official Node.js website.

Install Angular CLI by running the following command:

bash
Copy code
npm install -g @angular/cli

### Running the Project:
Clone the repository from our code repository.

Navigate to the directory where you downloaded the code.

Install all dependencies by running the following command:

Copy code
npm install
After installing all dependencies, start the local server by running the following command:

Copy code
ng serve
Open your web browser and navigate to http://localhost:4200/ to load the application.
