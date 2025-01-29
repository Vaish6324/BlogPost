const mongoose = require("mongoose");

// MongoDB connection handling for serverless environment
let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
};

// Post Schema
const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = async (req, res) => {
  await connectToDatabase();

  if (req.method === "GET") {
    // Get all posts
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ message: "Error fetching posts", error: err });
    }
  } else if (req.method === "POST") {
    // Create a new post
    const { title, image, description } = req.body;
    const newPost = new Post({ title, image, description });

    try {
      await newPost.save();
      res.status(201).json({ message: "Post added successfully!" });
    } catch (err) {
      res.status(500).json({ message: "Error adding post", error: err });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
