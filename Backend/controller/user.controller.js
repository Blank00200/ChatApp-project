import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;
    try {
        if (!fullname || !email || !password || !confirmPassword) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already registered" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fullname,
            email,
            password: hashPassword,
        });

        await newUser.save();
        if (newUser){
            createTokenAndSaveCookie(newUser._id, res);
            res.status(201).json({ message: "User logged in successfully", user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            } });
        }
    } catch (error) {
        console.error('Error during signup:', error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid user credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid user credentials" });
        }

        createTokenAndSaveCookie(user._id, res);
        res.status(200).json({ message: "User logged in successfully", 
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            }
         });
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.error('Error during logout:', error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const allUsers = async(req, res) => {
    try{
        const loggedInUser = req.user._id;
        const allUsers = await User.find( {_id: { $ne: loggedInUser } }).select("-password");
        res.status(201).json(allUsers);
    } catch (error){
        console.log("Error in allUsers Controller: " + error);
    }
};