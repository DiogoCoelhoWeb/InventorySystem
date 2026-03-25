const User = require('../models/users')
const userController = {};

userController.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if(users.length == 0){
      return res.status(404).json({error: 404, message: "No Users Found"})
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error: 500, message: 'Error retrieving users'});
  }
};

userController.getUserByEmail = async (req, res) => {
  try{
    const user = await User.findOne({ email: req.params.email});

    if(!user){
      return res.status(404).json({error: 404, message: "User not Found"})
    }

    res.status(200).json(user);
  } catch (error){
    res.status(500).json({error: 500, message: 'Error retrieving user'});
  }
}

module.exports = userController;