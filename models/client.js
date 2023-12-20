const client = require('../db');

async function getCProducts(req,res) {
    const search = req.query.search || '';
    const resp = await client.query(
    "SELECT * FROM products where name like '%" + search + "%'"
  );
  res.send(resp.rows);
}

async function addOrder(req,res){
    const { items, address,status } = req.body;
    const resp = await client.query(`INSERT INTO orders (items, address, status) VALUES ('${items}', '${address}', '${status}') RETURNING *`)
    res.send(resp.rows);
}

module.exports = {
    getCProducts,
    addOrder,
};