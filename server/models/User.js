const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      minLength: [3, 'User name should be at least 3 characters long!'],
    },
    // email: {
    //   type: String,
    //   required: true,
    //   match: [/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/, 'Email is not valid!'],
    // },
    password: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
      match: [/^https?:\/\/.+/, 'ImageUrl is not valid!'],
    },
    publicUsername: {
      type: String,
      required: true,
      minLength: [3, 'Public username should be at least 3 characters long!'],
    },
    userType: {
      type: String,
      required: true,
    },
    offersOwner: [{
      type: String,
    }],
    offersLiked: [{
      type: String,
    }],
    // isDeleted: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  { timestamps: true }
);

const userModel = model('User', userSchema);
module.exports = {
  userModel,
};
