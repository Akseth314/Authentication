const mongoose = require("mongoose");

require("dotenv").config();

// connection establised between node js application and database
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,           //return promise
        useUnifiedTopology:true,
    })  
    // agr succecssful ho gya to
    .then(() => console.log("DB ka connection is successful"))
    .catch((error) => {
        console.log("Issue in BD connection");
        console.error(error.message);
        process.exit(1);
    });

}
module.exports = dbConnect;