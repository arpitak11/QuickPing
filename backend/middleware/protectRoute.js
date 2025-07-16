import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute=async(req, res, next)=>{
    try {
        const token= req.cookies.jwt; // like this we won't be able to get the cookie for this we have to go to server.js and do the further mentioned things
        if(!token){
            return res.status(401).json({error:"Unauthorized - No Token Provided"})
        }

     const decoded= jwt.verify(token, process.env.JWT_SECRET)  // secret is used to sign the jwt token doubt hai isme
     
     if(!decoded){
        return res.status(401).json({error:"Unauthorized - Invalid Token"})
     }

     const user= await User.findById(decoded.userId).select("-password");
    // const user = await User.findById(decoded._id || decoded.userId).select("-password");

     if(!user){
        return res.status(404).json({error:"User not found"});
     }

     req.user=user;
     next();

    } 
    catch (error) {
         console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export default protectRoute;