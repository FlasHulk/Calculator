let backblaze = {
        minSum: 7,
        priceStorage: 0.005,
        priceTransfer: 0.01,
        fullPrice: calcFullPrice,
    },
    bunny = {
        minSum: 0,
        maxSum: 10,
        priceStorage: 0.01,
        priceTransfer: 0.01,
        fullPrice: calcFullPrice,
    },
    scaleway = {
        minSum: 0,
        priceStorage: 0.06,
        priceTransfer: 0.02,
        fullPrice: calcFullPrice,
    },
    vultr = {
        minSum: 5,
        priceStorage: 0.01,
        priceTransfer: 0.01,
        fullPrice: calcFullPrice,
    }

const inputStorage = document.getElementById('storage');
const inputTransfer = document.getElementById('transfer');

let storage = inputStorage.value,
    transfer = inputTransfer.value;

const inputHDD = document.getElementById('type-disk1');
const inputSSD = document.getElementById('type-disk2');
const inputMulti = document.getElementById('type-options1');
const inputSingle = document.getElementById('type-options2');
const diskTypes = document.getElementsByName('type-disk');
const optionTypes = document.getElementsByName('type-options');

startAll();
setPriceStorage(bunny, calcStorageOnDisk, diskTypes)
setPriceStorage(scaleway, calcStorageOnOptions, optionTypes)
setPriceTransfer(scaleway);

inputStorage.addEventListener('input', (e) => {
    storage = e.target.value
    setPriceStorage(scaleway, calcStorageOnOptions, optionTypes)
    setPriceTransfer(scaleway);
    startAll();
});
inputTransfer.addEventListener('input', (e) => {
    transfer = e.target.value
    setPriceStorage(scaleway, calcStorageOnOptions, optionTypes)
    setPriceTransfer(scaleway);
    startAll();
});

inputHDD.addEventListener('change', () => {
    setPriceStorage(bunny, calcStorageOnDisk, diskTypes)
    startAll();
});
inputSSD.addEventListener('change', () => {
    setPriceStorage(bunny, calcStorageOnDisk, diskTypes)
    startAll();
});

inputMulti.addEventListener('change', () => {
    setPriceStorage(scaleway, calcStorageOnOptions, optionTypes)
    startAll();
});
inputSingle.addEventListener('change', () => {
    setPriceStorage(scaleway, calcStorageOnOptions, optionTypes)
    startAll();
});

function calcFullPrice(storage, transfer) {
    let price = storage * this.priceStorage + transfer * this.priceTransfer;

    if(price > this.maxSum) {
        price = this.maxSum;
    }

    return (price <= this.minSum) ? this.minSum : price;
}

function calcStorageOnDisk(typeDisk) {
    switch (typeDisk) {
        case 'HDD':
            return 0.01;
            break;
        case 'SSD':
            return 0.02;
            break;
        default:
            return 0.01;
    }
}

function calcStorageOnOptions(options) {
    switch (options) {
        case 'Multi':
            return (storage <= 75) ? 0 : 0.06;
            break;
        case 'Single':
            return (storage <= 75) ? 0 : 0.03;
            break;
        default:
            return (storage <= 75) ? 0 : 0.06;
    }
}

function calcTransferOnSize() {
    return (transfer <= 75) ? 0 : 0.02;
}

function findChecked(array) {
    return Array.from(array).find(radio => radio.checked).value;
}

function setPriceStorage(obj, func,array) {
    obj.priceStorage = func(findChecked(array));
}

function setPriceTransfer(odj) {
    odj.priceTransfer = calcTransferOnSize();
}

function startAll() {
    let htmlPrice = document.querySelectorAll('.calculator-result li .price'),
        htmlBar = document.querySelectorAll('.calculator-result li .progress'),
        prices = [
            backblaze.fullPrice(storage, transfer),
            bunny.fullPrice(storage, transfer),
            scaleway.fullPrice(storage, transfer),
            vultr.fullPrice(storage, transfer)
        ];

    inputStorage.closest('.calculator-data__input').querySelector('p').setAttribute('data-value', storage);
    inputTransfer.closest('.calculator-data__input').querySelector('p').setAttribute('data-value', transfer);

    htmlPrice.forEach((item, key) => {
        item.closest('.calculator-result li').classList.remove("max")
        item.setAttribute('data-price', prices[key]);
    })

    let indexMaxEl = prices.indexOf( Math.max.apply(null, prices));
    htmlPrice[indexMaxEl].closest('.calculator-result li').classList.add("max");

    if(window.innerWidth > 767) {
        htmlBar.forEach((item, key) => {
            item.style.width = `${(100 * prices[key]) / 100}%`;
        })
    } else {
        htmlBar.forEach((item, key) => {
            item.style.height = `${(100 * prices[key]) / 100}%`;
        })
    }

}