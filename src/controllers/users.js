const User = require("../models/User");
const userController = {};

userController.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "ok", body: users });
  } catch (e) {
    res.status(400).json({ message: "bad request", e: e });
  }
};

userController.createUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = new User({
      username: user.username,
    });
    await newUser.save();
    console.log("Saved user");
    res.status(200).json({ message: "ok", body: newUser });
  } catch (e) {
    res.status(400).json({ message: "bad request", e: e });
  }
};

module.exports = userController;