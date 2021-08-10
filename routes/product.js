const { Router } = require("express");
const {
  findAll,
  findById,
  add,
  update,
  destroy,
} = require("../controllers/product");
const { authorization } = require("../middleware/authorization");

const router = Router();

router.get("/", findAll);
router.get("/:id", findById);
router.post("/", add);
router.patch("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
