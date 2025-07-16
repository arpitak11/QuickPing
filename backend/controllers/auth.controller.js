import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup=async(req, res) =>{
    try {
        const {fullname,username,password,confirmPassword,gender}= req.body;

        if(password!==confirmPassword){
            return res.status(400).json({error:"Passwords don't match"})
        }

        const user=await User.findOne({username}); //finds user with that username
        if(user){                                  //if there then return given command else continue with function
            return res.status(400).json({error:"Username already exists"})
        }

        //HASH PASSWORD HERE
        const salt= await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password, salt);

        //https://avatar-placeholder.iran.liara.run/

        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser= new User({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender==="male"? boyProfilePic:girlProfilePic
        })

        if(newUser){
            //generate JWT token
            generateTokenAndSetCookie(newUser._id, res)

            await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilePic
        })
        }  else {
            res.status(400).json({error:"Invalid user data"})
        }  

    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}
export const login= async(req, res) =>{
    try {
        const{ username,password}=req.body;
        const user=await User.findOne({username}); //check user exist or not
        const isPasswordCorrect= await bcrypt.compare(password, user?.password || ""); //password fro  the user will check with database password, if true isPassword becomes true( and is it is empty then compare with the empty string, this will throw no error)
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"})
        }

        generateTokenAndSetCookie(user._id, res); //generate and send the response 200 and the inside thing 
        res.status(200).json({
             _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        });
    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
};

export const logout=(req, res) =>{  // async we dont need it , I don't know why but yeah we don't
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
};



