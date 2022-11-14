// Importing module
import express from 'express';
  
const app = express();
const PORT:Number=3000;
  
// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Welcome to KZ Sandbox! This is a message from Typescript backend!');
})
  
// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port: '+PORT);
})

// Dummy comment