const { getStoredItems } = require('../data/items');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const items = getStoredItems();
    res.status(200).json({ items });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
