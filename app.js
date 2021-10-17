let fans = 0
let pairsOfCleats = 0
let rookies = 0
let jerseys = 0
let allstars = 0
let autoUpgrades = 0
let totalMultiplier = 1
let cleatsCost = 5
let rookCost = 15
let jersCost = 50
let allStarCost = 100

// let clickUpgrades = {
//     cleats: {
//         price: 5,
//         quantity: 0,
//         multiplier: 1
//     },
//     newJerseys: {
//         price: 15,
//         quantity: 0,
//         multiplier: 3
//     },
// };

// let automaticUpgrades = {
//     rookiePlayer: {
//         price: 10,
//         quantity: 0,
//         multiplier: 2
//     },
//     allStarPlayer: {
//         price: 20,
//         quantity: 0,
//         multiplier: 4
//     },
// };

function runPlay() {
    fans++
    fans += pairsOfCleats
    fans += (jerseys * 3)
    // alert(fans)
    console.log('fans', fans)
    update()
}
function cleatsfunc(item) {
    if (fans >= cleatsCost) {
        pairsOfCleats++
        fans -= cleatsCost
        totalMultiplier++
        cleatsCost += 3
        console.log('cleats', pairsOfCleats, 'fans', fans)
    }
    update()
}
function jerseysfunc(item) {
    if (fans >= jersCost) {
        jerseys++
        fans -= jersCost
        jersCost += 16
        totalMultiplier += 3
        console.log('jerseys', jerseys, 'fans', fans)
    }
    update()
}
function rookiefunc(item) {
    if (fans >= rookCost) {
        rookies++
        fans -= rookCost
        rookCost += 11
        totalMultiplier += 2
        console.log('rookies', rookies, 'fans', fans)
    }
    update()
}
function allstarfunc(item) {
    if (fans >= allStarCost) {
        allstars++
        fans -= allStarCost
        allStarCost += 40
        totalMultiplier += 4
        console.log('allstars', allstars, 'fans', fans)
    }
    update()
}

function autofan() {
    let auto = setInterval(collectAutoUpgrades, 3000);
}

function collectAutoUpgrades() {
    autoUpgrades = (allstars * 4) + (rookies * 2)
    console.log(autoUpgrades)
    fans += autoUpgrades
    console.log('this is auto upgrade', fans)
    update()
}

// function buyClick(item) {
//     let purchaseClick = clickUpgrades[item]
//     // if (purchaseClick.price == 5) {
//     //     fans -= purchaseClick.price
//     //     pairsOfCleats++
//     // }
//     // else if (purchaseClick.price == 15) {
//     //     fans -= purchaseClick.price
//     //     jerseys++
//     // }
//     console.log('cleats', pairsOfCleats, 'fans', fans, 'jerseys', jerseys)
//     update()
// }

function update() {
    document.getElementById('fanInv').innerText = fans.toString()
    document.getElementById('cleatInv').innerText = pairsOfCleats.toString()
    document.getElementById('rookInv').innerText = rookies.toString()
    document.getElementById('jerInv').innerText = jerseys.toString()
    document.getElementById('allStarInv').innerText = allstars.toString()
    document.getElementById('tfm').innerText = totalMultiplier.toString()
    document.getElementById('fps').innerText = autoUpgrades.toString()
    document.getElementById('costofCleats').innerText = cleatsCost.toString()
    document.getElementById('costofRook').innerText = rookCost.toString()
    document.getElementById('costofJers').innerText = jersCost.toString()
    document.getElementById('costofAllStar').innerText = allStarCost.toString()
}
autofan()
update()