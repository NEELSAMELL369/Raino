import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Basic Info
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true }, // hashed
    role: {
      type: String,
      enum: ["super-admin", "admin", "customer"],
      default: "customer",
    },

    // Profile (optional)
    profileImage: {
      type: String, // URL from Cloudinary
      default:
        "https://res.cloudinary.com/demo/image/upload/v123456/default_profile.png",
    },

    // Addresses
    addresses: [
      {
        name: String,
        phone: String,
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
        default: { type: Boolean, default: false },
      },
    ],

    // Shopping Cart (product IDs from static JSON)
    cart: [
      {
        productId: { type: Number }, // matches id in JSON
        quantity: { type: Number, default: 1 },
        selectedOptions: Object, // e.g., color
      },
    ],

    // Orders (product IDs from static JSON)
    orders: [
      {
        orderId: { type: String },
        products: [
          {
            productId: { type: Number }, // matches id in JSON
            quantity: { type: Number },
            selectedOptions: Object,
          },
        ],
        totalPrice: { type: Number },
        status: {
          type: String,
          enum: ["Pending", "Processing", "Delivered", "Cancelled"],
          default: "Pending",
        },
        createdAt: { type: Date, default: Date.now },
      },
    ],

    // Verification
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
