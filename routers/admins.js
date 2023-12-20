const express = require("express");
const router = express.Router();
const {
  getProducts,
  deleteProduct,
  updateProduct,
  addProduct,
} = require("../models/admins");

router.get("/admins/view", getProducts);
router.post("/admins/add", addProduct);
router.put("/admins/:id", updateProduct);
router.delete("/admins/:id", deleteProduct);

module.exports = router;
