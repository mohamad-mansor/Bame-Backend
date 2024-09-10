import { Router } from "express";
UserC;

router.get("/", userController.getUser);
router.post("/", userController.createUser);
router.put("/", userController.updateUser);
router.delete("/", userController.deleteUser);

module.exports = router;
