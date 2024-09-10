const users = [];

exports.getUser = (req, res) => {
  const userId = req.params.id;
  if (userId) {
    const user = users.find((u) => u.id === parseInt(userId));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } else {
    res.status(200).json(users);
  }
};

exports.createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = { id: userId, ...req.body };
    res.status(200).json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.status(200).json(deletedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
