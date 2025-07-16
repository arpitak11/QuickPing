import User from "../models/user.model.js";

export const getUserForSidebar=async(req,res) => {
    try {
        const loggedInUserId =req.user._id;

        const filteredUsers= await User.find({_id: {$ne: loggedInUserId}}).select("-password");
         // ye add krne se khud ko message ni bhj skte ni to agar bhjna hai to ye hata skte hai
        //what it does is to find all the users except the one that is logged in

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUserForSidebar: ", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}