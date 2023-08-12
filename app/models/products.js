const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {type:String, required: true},
    short_text: {type:String, required: true},
    text: {type:String, required: true},
    images: {type: [String], required: true},
    tags: {type: [String], default: []},
    category: {type: mongoose.Types.ObjectId, required: true},
    comments: {type: [], default: []},
    likes: {type: [mongoose.Types.ObjectId], default: []},
    dislikes: {type: [mongoose.Types.ObjectId], default: []},
    bookmarks: {type: [mongoose.Types.ObjectId], default: []},
    price: {type: Number, default: 0},
    discount: {type: Number, default: 0},
    type: {type: String, required: true}, //virtual- physical
    format: {type: String},
    features: {type: Object, default: {
            length : "",
            height : "",
            width : "",
            weight : "",
            colors : [],
            made_in : ""
        }}
});

module.exports = {
    ProductModel : mongoose.model("product", productSchema)
}