const { Product } = require('../models/productModel');

module.exports = {
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error('Erro ao obter produtos:', error);
      res.status(500).send('Erro interno do servidor');
    }
  },
};
