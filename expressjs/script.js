/*const express=require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("chamion")
})

app.get('/profile',(req,res)=>{
    res.send("champion coach")
})

app.listen(3000)*/

/*const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send("this is a simple get method")
})
app.listen(3000,()=>{
    console.log("server running on port 3000")
})*/


// ===============================
// Global catches
// ===============================

const express = require('express');
const app = express();

// Express Middleware
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Simulated Route to Trigger a Rejected Promise (without catch)
app.get('/reject', (req, res) => {
  // Simulate an async error (e.g., DB failure or API error)
  Promise.reject(new Error('This is an unhandled rejected promise!'));

  res.send('This will still run, but the rejection happens above.');
});

// Simulated Route to Trigger a Synchronous Exception
app.get('/error', (req, res) => {
  throw new Error('This is an uncaught exception!');
});

// Start the server
const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// ===============================
// GLOBAL ERROR HANDLERS
// ===============================

// 1. Handle uncaught exceptions (sync errors)
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION!');
  console.error(err.name, err.message);
   // Gracefully shut down server and exit
  server.close(() => {
    process.exit(1);
  });
});

// 2. Handle unhandled promise rejections (async errors)
process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED PROMISE REJECTION!');
  console.error('Reason:', reason);

  // Gracefully shut down server and exit
  server.close(() => {
    process.exit(1);
  });
});