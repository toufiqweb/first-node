const express = require("express");
const app = express();
const port = 4000;

const users = [
  {
    id: 1,
    name: "Rahim Uddin",
    email: "rahim@example.com",
    age: 25,
    role: "Frontend Developer",
    isActive: true,
  },
  {
    id: 2,
    name: "Ayesha Khan",
    email: "ayesha@example.com",
    age: 22,
    role: "UI/UX Designer",
    isActive: false,
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    email: "tanvir@example.com",
    age: 28,
    role: "Backend Developer",
    isActive: true,
  },
];
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    brand: "SoundMax",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 29.99,
    category: "Accessories",
    brand: "ClickPro",
    inStock: true,
    rating: 4.3,
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 99.99,
    category: "Wearables",
    brand: "TechTime",
    inStock: false,
    rating: 4.7,
  },
];

app.get("/", (req, res) => {
  res.send(users);
});

app.get("/products", (req, res) => {
  res.send(products);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
