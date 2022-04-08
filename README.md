# Procedure to Run The App

# 1. Run the `Main` Microservice

a. You need to have PostgreSQL installed on your device

b. Go to folder `server/microservices/main`

c. Make sure your device is connected to internet

d. Run `npm install` on your terminal to download and install all dependencies

e. Run `npm run migrate` on your terminal to create the database and seed data to the database

f. Run `npm run dev` or `npm start` on your terminal to run the API, then it will run on your localhost port 4001 (if it's still available)

# 2. Run the `Orchestrator` API Gateway

a. Go to folder `server/orchestrator`

b. Make sure your device is connected to the internet

c. Run `npm install` on your terminal to download and install all dependencies

d. Run `npm run dev` or `npm start` on your terminal to run the API, then it will run on your localhost port 4000 (if it's still available)

# 3. Run the `Web App`

a. Go to folder `web-app`

b. Make sure your device is connected to the internet

c. Run `npm install` on your terminal to download and install all dependencies

d. Run `npm start` on your terminal to run the API. It will run on your localhost port 3000 (if it's still available), then normally your default browser will open this port. If your browser is not open automatically, you can always manually open the port in your browser to view and open the app.

e. Default user credentials to log in: email: `user1@mail.com` password: `12345`

f. Users must be logged in to view dashboard. After logged in, user can not go back to Log In Page.

g. Users can search by `Ship Name` or `Transit Direction` on `Ships Table`

h. Users can search by `TruckID` or `ProductID` on `Shipments Table`
