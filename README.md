# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 3

These are my codes and solutions for Stage 3


## Objectives:
### Functionality
- Users are able to mark a restaurant as a favorite, this toggle is visible in the application. A form is added to allow users to add their own reviews for a restaurant. Form submission works properly and adds a new review to the database.
- The client application works offline. JSON responses are cached using the IndexedDB API. Any data previously accessed while connected is reachable while offline. User is able to add a review to a restaurant while offline and the review is sent to the server when connectivity is re-established.

### Responsive Design and Accessibility
- The application maintains a responsive design on mobile, tablet and desktop viewports.

### Performance
- Lighthouse targets for each category exceed:  
   Progressive Web App: >90  
   Performance: >70  
   Accessibility: >90  

## Installing and Running Locally

### Data Server
- Download or clone <a href="https://github.com/jimmymercado/mws-restaurant-stage-2-data" target="_blank">data server</a> 
- Follow instructions in the Readme.
- Run side-by-side with the web app.

### Web App
- Download or clone this repo.
- From command line, enter `npm run start`
- Go to your Chrome Browser (Chrome Canary is recommended) and go to `http://localhost:8000`