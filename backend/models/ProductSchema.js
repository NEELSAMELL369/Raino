import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    stars: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true }, // matches static JSON ID
    name: { type: String, required: true },
    company: { type: String, required: true }, // brand or manufacturer
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 }, // in percentage
    priceAfterDiscount: { type: Number, required: true },
    condition: { type: String, enum: ["New", "Renewed"], default: "New" },

    // Images
    images: {
      main: { type: String, required: true }, // default image
      subImages: [{ type: String }], // other images
      colorVariants: { type: Map, of: String }, // key: color name, value: image URL
    },

    // Ratings
    rating: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },

    // Reviews
    reviews: [reviewSchema],

    // Category / Department info
    department: { type: String, required: true }, // e.g., Books, Electronics
    category: { type: String, required: true }, // e.g., Fiction, Mobiles
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
