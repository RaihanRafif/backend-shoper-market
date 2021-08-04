const { Product } = require("../database/models");
const { Color } = require("../database/models");
const { Size } = require("../database/models");
const { Image } = require("../database/models");
const uuid = require("uuid");

const findAll = async (req, res, next) => {
  try {
    const product = await Product.findAll({ include: "colors" });

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success get products.",
      data: product,
    });
  } catch (error) {
    return next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      throw new Error("Product with this id not found.");
    }
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success get product",
      data: product,
    });
  } catch (error) {
    return next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { user } = req;
    const { id, product_name, description, price, discount, stock, sex } =
      req.body;
    const product = await Product.findByPk(id);

    if (!product) {
      throw new Error("Product with this id not found");
    }

    await Product.update({
      product_name,
      description,
      price,
      discount,
      sex,
      stock,
    });

    const updatedProduct = await Product.findByPk(id);

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success update product.",
      data: updatedProduct,
    });
  } catch (error) {
    return next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Product.destroy({
      where: {
        id,
      },
    });

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success delete product.",
    });
  } catch (error) {
    return next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const id = uuid.v4();
    const {
      product_name,
      description,
      price,
      discount,
      stock,
      sex,
      color,
      size,
    } = req.body;

    const product_color = await Color.create({
      id: uuid.v4(),
      product_id: id,
      color: color,
    });

    const product_size = await Size.create({
      id: uuid.v4(),
      product_id: id,
      size: size,
    });

    const product = await Product.create({
      id,
      product_name,
      description,
      price,
      discount,
      stock,
      sex,
    });

    return res.status(201).json({
      status: "success",
      code: 201,
      message: "Success create product",
      data: { product, product_color, product_size },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  add,
  destroy,
  update,
  findById,
  findAll,
};
