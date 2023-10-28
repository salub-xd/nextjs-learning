import mongoose from "mongoose";
import { User } from '../models/user';
export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager",
        });
        console.log("DB Connected Successfully");
        // console.log("Connected with host ", connection.host);

        // Testing and creating new user
 
        // const newUser = new User({
        //     name:"test name",
        //     email:"test@gmail.com",
        //     password:"testpassword",
        //     about:"This about testing"
        // });

        // await newUser.save();
        // console.log("User saved")

    } catch (error) {
        console.log("Failed to connect with database ", error)
    }
}