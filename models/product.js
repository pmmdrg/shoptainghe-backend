import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  description: {
    type: String,
    required: [true, "Please Enter Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Price"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter Stock"],
  },

  images: [{ public_id: String, url: String }],

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      comment: String,
      vote: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5],
      },
      voteBy: String,
    },
  ],
  avgScore: {
    type: Number,
  },
});

const countAverage = (comments) => {
  let sum = 0;
  comments.forEach((comment) => {
    sum += comment.vote;
  });
  return Math.floor(sum / comments.length);
};

schema.pre("save", async function (next) {
  if (!this.isModified("comments")) return next();
  this.avgScore = countAverage(this.comments);
});

export const Product = mongoose.model("Product", schema);
