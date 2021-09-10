import expressAsyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

//Description: Authenticate user and get token
//Route: POST/api/users/loging
//Access: Public
const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // res.send({
  //   email,
  //   password,
  // });

  const user = await User.findOne({ email });

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// && (await user.matchPassword(password))
//bcrypt.compare(password, user.password);

//Description: Get user profile
//Route: GET/api/users/profile
//Access: Private
const getUserProfile = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { authUser, getUserProfile };
