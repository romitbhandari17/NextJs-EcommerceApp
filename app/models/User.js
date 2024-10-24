const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: {type: String, required: true, unique: true},
    name: {type: String,},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
  }, {timestamps:true});


  export default mongoose.model("User", UserSchema);

  