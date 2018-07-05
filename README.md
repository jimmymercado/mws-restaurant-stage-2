# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 2

These are my codes and solutions for Stage 2


## Objectives:
### Application Data and Offline Use
- The client application should pull restaurant data from the <a href="https://github.com/jimmymercado/mws-restaurant-stage-2-data" target="_blank">development server</a>, parse the JSON response, and use the information to render the appropriate sections of the application UI.
- The client application works offline. JSON responses are cached using the IndexedDB API. Any data previously accessed while connected is reachable while offline.

### Responsive Design and Accessibility
- The application maintains a responsive design on mobile, tablet and desktop viewports.

### Performance
- Lighthouse targets for each category exceed:  
   Progressive Web App: >90  
   Performance: >70  
   Accessibility: >90  

## Installing and Running Locally
### Web App
- Download or clone this repo.
- From command line, enter `npm run start`
- Go to your Chrome Browser (Chrome Canary is recommended) and go to `http://localhost:8000`

### Data Server
- Download or clone <a href="https://github.com/jimmymercado/mws-restaurant-stage-2-data" target="_blank">data server</a> 
- Follow instructions in the Readme.
- Run side-by-side with the web app.