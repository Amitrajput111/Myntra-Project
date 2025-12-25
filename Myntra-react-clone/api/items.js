const items = [
  {
    "id": "001",
    "image": "/images/1.jpg",
    "company": "Carlton London",
    "item_name": "Rhodium-Plated CZ Floral Studs",
    "original_price": 1045,
    "current_price": 606,
    "discount_percentage": 42,
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": { "stars": 4.5, "count": 1400 }
  },
  {
    "id": "002",
    "image": "/images/2.jpg",
    "company": "CUKOO",
    "item_name": "Women Padded Halter Neck Swimming Dress",
    "original_price": 2599,
    "current_price": 1507,
    "discount_percentage": 42,
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": { "stars": 4.3, "count": 24 }
  },
  {
    "id": "003",
    "image": "/images/3.jpg",
    "company": "NUEVOSDAMAS",
    "item_name": "Women Red & White Printed A-Line Knee-Length Skirts",
    "original_price": 1599,
    "current_price": 495,
    "discount_percentage": 69,
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": { "stars": 4.1, "count": 249 }
  },
  {
    "id": "004",
    "image": "/images/4.jpg",
    "company": "ADIDAS",
    "item_name": "Indian Cricket ODI Jersey",
    "original_price": 999,
    "current_price": 999,
    "discount_percentage": 0,
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": { "stars": 5, "count": 10 }
  },
  {
    "id": "005",
    "image": "/images/5.jpg",
    "company": "Roadster",
    "item_name": "Pure Cotton T-shirt",
    "original_price": 1399,
    "current_price": 489,
    "discount_percentage": 65,
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": { "stars": 4.2, "count": 3500 }
  },
  {
    "id": "006",
    "image": "/images/6.jpg",
    "company": "Nike",
    "item_name": "Men ReactX Running Shoes",
    "original_price": 14995,
    "current_price": 14995,
    "discount_percentage": 0,
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": { "stars": 0, "count": 0 }
  },
  {
    "id": "007",
    "image": "/images/7.jpg",
    "company": "The Indian Garage Co",
    "item_name": "Men Slim Fit Regular Shorts",
    "original_price": 1599,
    "current_price": 639,
    "discount_percentage": 60,
    "rating": { "stars": 4.2, "count": 388 }
  },
  {
    "id": "008",
    "image": "/images/8.jpg",
    "company": "Nivea",
    "item_name": "Men Fresh Deodrant 150ml",
    "original_price": 285,
    "current_price": 142,
    "discount_percentage": 50,
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": { "stars": 4.2, "count": 5200 }
  }
];

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === 'GET') {
    // Simulate delay
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    res.status(200).json({ items });
  } else if (req.method === 'POST') {
    const itemData = req.body;
    const newItem = {
      ...itemData,
      id: Math.random().toString(),
    };
    items.unshift(newItem);
    res.status(201).json({ message: "Stored new item.", item: newItem });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
