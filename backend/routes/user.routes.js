const express = require("express");
const userRouter = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const is_User = await UserModel.findOne({ email: email });

  if (is_User) {
    const hashed_password = is_User.password;
    bcrypt.compare(password, hashed_password, async (err, result) => {
      if (result) {
        const token = jwt.sign(
          {
            UserID: is_User._id,
          },
          "heyDev"
        );

        return res.json({ message: "Login Success", token: token });
      } else {
        return res.json({
          message: "Invalid crediantials, Try Again!!",
        });
      }
    });
  } else {
    return res.json({ message: "User not found!, Try Signing in again" });
  }
});

userRouter.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = userRouter;
