const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    color: {type: String},
    size: {type: String},
    img: {type: String, required: true},
    category: {type: String, required: true},
    price: {type:Number, required: true},
    availableQty: {type:Number, required: true}
  }, {timestamps:true});


  export default mongoose.model("Product", ProductSchema);

  