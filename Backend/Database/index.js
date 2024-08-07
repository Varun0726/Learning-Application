const mongoose = require("mongoose");
const {DB_Name} = require("../Contansts");

const connectDB = async ()=>{
    try {
        const InstanceConnection = await mongoose.connect(`${process.env.Mongoose_URL}/${DB_Name}`);
        console.log(`\n MongoDB connected !! DB Host:${InstanceConnection}`)
    } catch (error) {
        console.error("Error: ",error);
        process.exit(1);
    }
};

const AdminSchema = new mongoose.Schema({
    username:String,
    password:String    
});

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    Coursers : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Course' 
    }]

});

const CourseSchema = new mongosse.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String
});




const Admin = mongoose.model("Admin",AdminSchema);
const User = mongoose.model("User",UserSchema);
const Course = mongoose.model("Course",CourseSchema)

module.exports = {connectDB,Admin,User,Course};
