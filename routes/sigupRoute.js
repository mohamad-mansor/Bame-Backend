import express from "express";

const app = express();

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, Email, and Password are required." });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }
    return res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occurred.", error: error.message });
  }
});

// Controller auslager, keine Validierung, Bitte nur dummy respone zurückgeben, json
