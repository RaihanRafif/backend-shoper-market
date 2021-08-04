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

router.post("/", findAll);
router.get("/:id", findById);
router.post("/", add);
router.patch("/", authorization, update);
router.delete("./:id", authorization, destroy);

module.exports = router;
