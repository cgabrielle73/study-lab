const stock = [
    ["Keyboard", 10, 150.00],
    ["Mouse", 0, 80.00],
    ["Monitor", 5, 900.00]
];


for(let [name, quantity, price] of stock) {
    const total = quantity * price;
    quantity === 0 && console.log(`ALET: There isn't ${name} in stock!`)
    console.log(name, total)
}