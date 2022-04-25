/**
 * 1. Create a node server with 5 steps
 * 1.1 Create a folder
 * 1.2 npm init -y
 * 1.3 npm i express cors mongodb
 * 1.4 script-dev: nodemon index.js
 * 1.5 create a index.js
 * 1.6 use 5 steps to create a node server
 *
 * ---------------------
 * Create Atlas Account
 * ---------------------
 * 1. Sign up
 * 2. Create cluster
 * 3. Create user mbduser1 and password
 * 4. Network Access --> ip address: Allow all
 * 5. database --> Connect --> code copy paste in index.js
 * 
 * ---------------
 * CRUD Operation
 * ---------------
 * 1. node mongodb CRUD --> Fundamentals
 * 2. Create async run function
 * 
 * ---------------------------------------------
 * Integrate sending data from client to server
 * ---------------------------------------------
 * Client side: create form
 * 1. on submit get form data and create user objects
 * 2. on server: Create user POST method to receive data on the backend
 * 3. on client side: Set fetch with POST, headers, body
 * 4. Make sure you return a json from POST api
 * 
 * -----------------------------
 * Load data to the client side
 * -----------------------------
 * Create get api on the server 
 * create a query object 
 *  collection.find(query)
 * cursor to array
 * res.send(// return result)
 * 
 * 
 * -----------------------------------
 * DELETE user from client and server
 * -----------------------------------
 * 
 * 
 */