const app = require("./app")
const dotenv = require('dotenv');
const cloudinary = require("cloudinary")
const connectDatabase = require('./config/database');


// Handling Uncaught Exception 
process.on('uncaughtException', (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shuting down the server due to uncaught exception`);
    process.exit(1);

})

//config
dotenv.config({ path: 'backend/config/config.env' });

//connecting to data base
connectDatabase();

//clodinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});


// unhandledPromiseRejection
process.on("unhandledRejection", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`shuting down the server due to unhandled promise rejection`);
    server.close(() => {
        process.exit(1)
    })
});
