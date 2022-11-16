// Currency
var money = 0
var diamonds = 0

// Purchased Miners
var purchasedAmongus = 0
var purchased = 0
var purchased = 0

// Miner Data
let minerNames = [
    "amongus" // $100
];

console.table(dataTable)

function throwError(error) {
    if (error) {
        alert(error)
    } else {
        alert("An error occured.")
    }
}

function purchaseItem(item) {

    if (dataTable.includes(item)) {
        alert(item[1])
    } else {
        throwError("Item Not Found")
    }
}

purchaseItem("amongus")