let list [
  {cost: "10.99", item: "bread"},
  {cost: "10.00, item: "cereal"},
];

let totalCost = 0;
for (let i = 0; i < list.length; i++) {
  item = list[i];
  totalCost = totalCost + parseFloat {item.cost}
}

console.log(Math.ceil(totalCost * 100) / 100;)