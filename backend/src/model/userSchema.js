import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  carts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export default model("User", userSchema);
