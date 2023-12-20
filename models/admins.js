const client = require('../db');

async function getProducts(req,res) {
    const search = req.query.search || '';
    const resp = await client.query(
    "SELECT * FROM products where name like '%" + search + "%'"
  );
  res.send(resp.rows);
}

async function addProduct(req,res){
    const { name, price, discount, image, active } = req.body;
    const resp = await client.query(
        `INSERT INTO products (name, price, discount, image, active) VALUES ('${name}', ${price}, ${discount}, '${image}', ${active}) RETURNING *`
    );
    res.send(resp.rows);
}

async function updateProduct(req,res){
    const id = req.params.id;
    const { name, price, discount, image, active } = req.body;
    const resp = await client.query(
        `UPDATE products SET name='${name}', price=${price}, discount=${discount}, image='${image}', active=${active} WHERE id=${id} RETURNING *`
    );
    res.send(resp.rows);
}

async function deleteProduct(req,res){
    const id = req.params.id;
    const resp = await client.query(
        `DELETE FROM products WHERE id=${id} RETURNING *`
    );
    res.send(resp.rows);
}

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
