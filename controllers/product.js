const Product = require("../database/models").product;
const Color = require("../database/models").color;
const Size = require("../database/models").size;
const uuid = require("uuid");

const findAll = async (req, res, next) => {
  try {
    const product = await Product.findAll({
      include: [
        {
          model: Color,
          attribute: "color",
        },
        {
          model: Size,
          attribute: ["size"],
        },
      ],
    });

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

    const product = await Product.findByPk(id, {
      include: [
        {
          model: Color,
          attribute: "color",
        },
        {
          model: Size,
          attribute: ["size"],
        },
      ],
    });

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
    const { id } = req.params;
    const { product_name, description, price, discount, stock, sex } = req.body;

    const updatedProduct = await Product.findByPk(id);
    if (!updatedProduct) {
      throw new Error("Product with this id not found");
    }
    const updatedColor = await Color.findOne({
      where: {
        productId: id,
      },
    });
    const updatedSize = await Size.findOne({
      where: {
        productId: id,
      },
    });

    updatedProduct.product_name = product_name;
    updatedProduct.description = description;
    updatedProduct.price = price;
    updatedProduct.discount = discount;
    updatedProduct.stock = stock;
    updatedProduct.sex = sex;

    updatedColor.color = color;

    updatedSize.size = size;

    await updatedProduct.save();
    await updatedSize.save();
    await updatedColor.save();

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success update product.",
    });
  } catch (error) {
    return next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
      include: [
        {
          model: Color,
          attribute: "color",
        },
        {
          model: Size,
          attribute: ["size"],
        },
      ],
    });

    if (!product) {
      throw new Error("Product with this id not found.");
    }

    await Product.destroy({
      where: {
        id,
      },
    });
    await Color.destroy({
      where: {
        productId: id,
      },
    });
    await Size.destroy({
      where: {
        productId: id,
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
    const productId = uuid.v4();
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

    const product = await Product.create({
      id: productId,
      product_name,
      description,
      price,
      discount,
      stock,
      sex,
    });
    const product_color = await Color.create({
      id: uuid.v4(),
      productId: productId,
      color,
    });

    const product_size = await Size.create({
      id: uuid.v4(),
      productId: productId,
      size,
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
