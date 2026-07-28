import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import crypto from "crypto"
import User from "../models/userModel.js"
const ACCESS_TOKEN_EXPIRE_DATE = process.env.ACCESS_TOKEN_EXPIRE_DATE;
const REFRESH_TOKEN_EXPIRE_DATE = process.env.REFRESH_TOKEN_EXPIRE_DATE;
const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;
const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY;


export const signUp = async (req, res, next) => {
  try {
    const { name, email, password} = req.body;

    if (!name || !email || !password) {
      const error = new Error("all information is  required");
      error.statusCode = 400;
      throw error;
    }

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      const error = new Error("user has already exist");
      error.statusCode = 409;
      throw error;
    }

    if (password.length < 8) {
      const error = new Error("password is not strong");
      error.statusCode = 400;
      throw error;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    const accessToken = jwt.sign(
      { user_id: newUser._id,email:newUser.email },
      ACCESS_TOKEN_KEY,
      { expiresIn: ACCESS_TOKEN_EXPIRE_DATE }
    );

    const refreshToken = jwt.sign(
      { user_id: newUser._id,email:newUser.email },
      REFRESH_TOKEN_KEY,
      { expiresIn: REFRESH_TOKEN_EXPIRE_DATE }
    );



    const userObject = newUser.toObject();
    delete userObject.password;

    res.status(201).json({
      message: "successfuly signup",
      success: true,
      data: {
        accessToken,
        refreshToken,
        userObject
      }
    });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;


    if (!email || !password) {
      const error = new Error("email and password required");
      error.statusCode = 400;
      throw error;
    }

    const user = await User.findOne({ email });

    if (!user) {
      const error = new Error("user not found");
      error.statusCode = 404;
      throw error;
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      const error = new Error("invalid credential");
      error.statusCode = 401;
      throw error;
    }

    const accessToken = jwt.sign(
      { user_id: user._id,email:user.email },
      ACCESS_TOKEN_KEY,
      { expiresIn: ACCESS_TOKEN_EXPIRE_DATE }
    );

    const refreshToken = jwt.sign(
      { user_id: user._id,email:user.email },
      REFRESH_TOKEN_KEY,
      { expiresIn: REFRESH_TOKEN_EXPIRE_DATE }
    );


    const userObject = user.toObject();
    delete userObject.password;

    res.status(201).json({
      message: "successfuly signin",
      success: true,
      data: {
        accessToken,
        refreshToken,
        userObject
      }
    });
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if(!token || !token.startsWith("Bearer ")){
        const error = new Error("token is missing");
        error.statusCode = 401;
        throw error;
    }
    const accessToken = token.split(" ")[1];

  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if(!token || !token.startsWith("Bearer ")){
        const error = new Error("token is missing");
        error.statusCode = 401;
        throw error;
    }
    const accessToken = token.split(" ")[1];

    const id = req.user?.id;
    if (!id) {
      const error = new Error("unautherized");
      error.statusCode = 401;
      throw error;
    }
    const user = await User.findById(id).select("-password");
    if (!user) {
      const error = new Error("user not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};