const router = require("express").Router();

const {
    createUser,
    getUsers,
    getUser,
    deletedUser,
    updatedUser,
    changeUserPass,
    userLogin,
    forgetPassword,
    resetPassword
} = require('../controllers/User')

router.post("/create", createUser);

router.get("/", getUsers);

router.get("/:id",  getUser);

router.delete("/:id",  deletedUser);

router.patch("/:id",  updatedUser);

router.put("/change/password/:id", changeUserPass)

router.post("/login", userLogin)

router.post("/forgot/password", forgetPassword)

router.post("/reset/password/:id/:token", resetPassword)

module.exports = router