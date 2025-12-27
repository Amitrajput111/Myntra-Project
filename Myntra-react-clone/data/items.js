const fs = require("fs");
const path = require("path");

const itemsFilePath = path.join(__dirname, "..", "items.json");

function getStoredItems() {
  const rawFileContent = fs.readFileSync(itemsFilePath, { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  // The items.json has nested array structure, so we flatten it
  const storedItems = data.items?.[0] ?? [];
  return storedItems;
}

function storeItems(items) {
  const data = { items: items };
  fs.writeFileSync(itemsFilePath, JSON.stringify(data));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
