// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: String,
//     image: {
//         type: String,
//         default: "https://media.istockphoto.com/id/476116580/photo/sycamore-tree-in-summer-field-at-sunset-england-uk.jpg?s=612x612&w=is&k=20&c=YgOgGsA_Cn1DDgtZYymjzd_-u0K4Mkn_hoaFWKshhxo=",
//         set: (v) => v==="" 
//         ? "https://media.istockphoto.com/id/476116580/photo/sycamore-tree-in-summer-field-at-sunset-england-uk.jpg?s=612x612&w=is&k=20&c=YgOgGsA_Cn1DDgtZYymjzd_-u0K4Mkn_hoaFWKshhxo=" 
//         : v,
//     },
//     price: Number,
//     location: String,
//     country: String,
// });
// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: 
           "https://media.istockphoto.com/id/476116580/photo/sycamore-tree-in-summer-field-at-sunset-england-uk.jpg?s=612x612&w=is&k=20&c=YgOgGsA_Cn1DDgtZYymjzd_-u0K4Mkn_hoaFWKshhxo=",
        set: (v) =>
            v === ""
                ? "https://media.istockphoto.com/id/476116580/photo/sycamore-tree-in-summer-field-at-sunset-england-uk.jpg?s=612x612&w=is&k=20&c=YgOgGsA_Cn1DDgtZYymjzd_-u0K4Mkn_hoaFWKshhxo="
                : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
