const mongoose = require('mongoose');

const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology:true

})

console.log(`mongodb connected: ${conn.connection.host}`);

}

module.exports = connectDB;

// }). then (() => {
//  console.log(`connection successful`);
// }). catch((e) => {

//     console.log("no connection");

// })

   

