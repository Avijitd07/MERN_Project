const mongoose = require('mongoose');


const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI, {
    dBname: 'ecom_database',
    user: 'Avijit07',
    pass: 'Avijit@1998',
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err));
}


// const connectDatabase = () => {
//     mongoose
//         .connect(process.env.DB_URI, {
//             // useNewUrlParser: true,
//             // useUnifiedTopology: true,
//             // useCreateIndex: true,
//         })
//         .then((data) => {
//             console.log(`Mongodb connected with server: ${data.connection.host}`);
//         });
// };

module.exports = connectDatabase;


