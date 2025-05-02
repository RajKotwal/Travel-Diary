Travel Diary 🗺️📔

Travel Diary is a full-stack web application that lets users record their travel memories in the form of a digital scrapbook. Users can upload journal entries, tag locations on an interactive map (broader picture), attach images, record moods, and relive past journeys with rich, personalized context.

How to Set Up and Run the Application -

1. If you're starting locally (like I did): 

a. Created the folder manually

b. Initialized a local Git repo using git init

c. Connected it to your GitHub repo using git remote add origin ...

d. Then pushed my local files to GitHub

2. Install Dependencies - Make sure you have Node.js and MongoDB Atlas set up.

3. Set Up Environment Variables - Create a .env file in the root folder and add your MongoDB URI and port

4. Run the Server Locally - I used node server.js

5. Deploy on Heroku -

a. Install Heroku CLI

b. Login: heroku login

c. Create app: heroku create your-app-name

d. Push code

e. Open in browser: heroku open




REQUIREMENTS/SPECIFICATIONS -

Frontend: HTML, CSS, JavaScript

Backend: Node.js 

Database: MongoDB Atlas

Core features:

Add memories with photos, date, location, mood

View all memories on an interactive map

Click a pin to view associated memory details

TOOLS/TECHNOLOGIES -

Frontend: HTML, CSS, JS

Backend: Node.js, Express.js

Database: MongoDB (via Atlas)

Map: Leaflet.js (future scope)

Hosting: Heroku

Version Control: Git + GitHub

DEVELOPMENT PHASES -

1. Concept Sketching - Mind mapped the idea to structure memory, mood, and map elements

2. Wireframing - Designed lo-fi wireframes using Figma

3. Database Modeling - Defined schema for memory entries (title, content, date, mood, location, image)

4. Building the Backend - Set up Express routes and MongoDB connection

5. Frontend Development - Created responsive layouts

6. Testing & Debugging - Handled edge cases, image uploads, and empty submissions

NEXT STEPS -

1. Add user authentication (so users can log in and view their own travel diaries)

2. Enable multiple images per entry

3. Build timeline view to browse trips chronologically

4. Add tagging system for places, weather, and categories

5. Transition to React frontend for a more dynamic UI

WHAT IS NOT WORKING CURRENTLY -

1. The uploaded image is not visible
2. The background of the website is not visible

