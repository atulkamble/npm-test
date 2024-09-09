// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a route to respond with 'Hello from CodeDeploy!' when accessed
app.get('/', (req, res) => {
    res.send('Hello from CodeDeploy!');
});

// Set the port to listen on (use port 3000 if no environment variable is set)
const port = process.env.PORT || 3000;

// Start the server and log that it's running
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
