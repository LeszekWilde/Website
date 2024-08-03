const conversionFactors = {
    length: {
        meters: { meters: 1, kilometers: 0.001, miles: 0.000621371, feet: 3.28084, inches: 39.3701 },
        kilometers: { meters: 1000, kilometers: 1, miles: 0.621371, feet: 3280.84, inches: 39370.1 },
        miles: { meters: 1609.34, kilometers: 1.60934, miles: 1, feet: 5280, inches: 63360 },
        feet: { meters: 0.3048, kilometers: 0.0003048, miles: 0.000189394, feet: 1, inches: 12 },
        inches: { meters: 0.0254, kilometers: 0.0000254, miles: 0.0000157828, feet: 0.0833333, inches: 1 }
    },
    mass: {
        grams: { grams: 1, kilograms: 0.001, pounds: 0.00220462, ounces: 0.035274 },
        kilograms: { grams: 1000, kilograms: 1, pounds: 2.20462, ounces: 35.274 },
        pounds: { grams: 453.592, kilograms: 0.453592, pounds: 1, ounces: 16 },
        ounces: { grams: 28.3495, kilograms: 0.0283495, pounds: 0.0625, ounces: 1 }
    },
    temperature: {
        celsius: { celsius: 1, fahrenheit: 1, kelvin: 1 },
        fahrenheit: { celsius: 1, fahrenheit: 1, kelvin: 1 },
        kelvin: { celsius: 1, fahrenheit: 1, kelvin: 1 }
    },
    volume: {
        liters: { liters: 1, milliliters: 1000, gallons: 0.264172, quarts: 1.05669, pints: 2.11338 },
        milliliters: { liters: 0.001, milliliters: 1, gallons: 0.000264172, quarts: 0.00105669, pints: 0.00211338 },
        gallons: { liters: 3.78541, milliliters: 3785.41, gallons: 1, quarts: 4, pints: 8 },
        quarts: { liters: 0.946353, milliliters: 946.353, gallons: 0.25, quarts: 1, pints: 2 },
        pints: { liters: 0.473176, milliliters: 473.176, gallons: 0.125, quarts: 0.5, pints: 1 }
    },
    area: {
        squareMeters: { squareMeters: 1, squareKilometers: 0.000001, squareMiles: 3.861e-7, acres: 0.000247105, squareYards: 1.19599, squareFeet: 10.7639, squareInches: 1550 },
        squareKilometers: { squareMeters: 1000000, squareKilometers: 1, squareMiles: 0.386102, acres: 247.105, squareYards: 1195990, squareFeet: 10763900, squareInches: 1550000000 },
        squareMiles: { squareMeters: 2589980, squareKilometers: 2.58998, squareMiles: 1, acres: 640, squareYards: 3097600, squareFeet: 27878400, squareInches: 4014489600 },
        acres: { squareMeters: 4046.86, squareKilometers: 0.00404686, squareMiles: 0.0015625, acres: 1, squareYards: 4840, squareFeet: 43560, squareInches: 6272640 },
        squareYards: { squareMeters: 0.836127, squareKilometers: 8.36127e-7, squareMiles: 3.22831e-7, acres: 0.000206612, squareYards: 1, squareFeet: 9, squareInches: 1296 },
        squareFeet: { squareMeters: 0.092903, squareKilometers: 9.2903e-8, squareMiles: 3.587e-8, acres: 0.0000229568, squareYards: 0.111111, squareFeet: 1, squareInches: 144 },
        squareInches: { squareMeters: 0.00064516, squareKilometers: 6.4516e-10, squareMiles: 2.49098e-10, acres: 0.00000015942, squareYards: 0.000771605, squareFeet: 0.00694444, squareInches: 1 }
    },
    speed: {
        metersPerSecond: { metersPerSecond: 1, kilometersPerHour: 3.6, milesPerHour: 2.23694, feetPerSecond: 3.28084 },
        kilometersPerHour: { metersPerSecond: 0.277778, kilometersPerHour: 1, milesPerHour: 0.621371, feetPerSecond: 0.911344 },
        milesPerHour: { metersPerSecond: 0.44704, kilometersPerHour: 1.60934, milesPerHour: 1, feetPerSecond: 1.46667 },
        feetPerSecond: { feetPerSecond: { metersPerSecond: 0.3048, kilometersPerHour: 1.09728, milesPerHour: 0.681818, feetPerSecond: 1 }
    },
    pressure: {
        pascals: { pascals: 1, bars: 1e-5, psi: 0.000145038, atmospheres: 9.86923e-6 },
        bars: { pascals: 100000, bars: 1, psi: 14.5038, atmospheres: 0.986923 },
        psi: { pascals: 6894.76, bars: 0.0689476, psi: 1, atmospheres: 0.068046 },
        atmospheres: { pascals: 101325, bars: 1.01325, psi: 14.696, atmospheres: 1 }
    },
    energy: {
        joules: { joules: 1, kilojoules: 0.001, calories: 0.239006, kilocalories: 0.000239006 },
        kilojoules: { joules: 1000, kilojoules: 1, calories: 239.006, kilocalories: 0.239006 },
        calories: { joules: 4.184, kilojoules: 0.004184, calories: 1, kilocalories: 0.001 },
        kilocalories: { joules: 4184, kilojoules: 4.184, calories: 1000, kilocalories: 1 }
    },
    power: {
        watts: { watts: 1, kilowatts: 0.001, horsepower: 0.00134102 },
        kilowatts: { watts: 1000, kilowatts: 1, horsepower: 1.34102 },
        horsepower: { watts: 745.7, kilowatts: 0.7457, horsepower: 1 }
    },
    time: {
        seconds: { seconds: 1, minutes: 0.0166667, hours: 0.000277778, days: 1.1574e-5 },
        minutes: { seconds: 60, minutes: 1, hours: 0.0166667, days: 0.000694444 },
        hours: { seconds: 3600, minutes: 60, hours: 1, days: 0.0416667 },
        days: { seconds: 86400, minutes: 1440, hours: 24, days: 1 }
    }
};

const categorySelect = document.getElementById('category');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const inputValue = document.getElementById('inputValue');
const convertButton = document.getElementById('convertButton');
const resultDisplay = document.getElementById('result');

categorySelect.addEventListener('change', populateUnits);
convertButton.addEventListener('click', convertUnits);

function populateUnits() {
    const category = categorySelect.value;
    const units = Object.keys(conversionFactors[category]);

    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';

    units.forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        fromUnitSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;
        toUnitSelect.appendChild(option2);
    });
}

function convertUnits() {
    const category = categorySelect.value;
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const value = parseFloat(inputValue.value);

    if (isNaN(value)) {
        resultDisplay.textContent = 'Result: Invalid input';
        return;
    }

    let result;

    if (category === 'temperature') {
        if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
            result = value * 9/5 + 32;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
            result = (value - 32) * 5/9;
        } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
            result = value + 273.15;
        } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
            result = value - 273.15;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
            result = (value - 32) * 5/9 + 273.15;
        } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
            result = (value - 273.15) * 9/5 + 32;
        } else {
            result = value;
        }
    } else {
        result = value * conversionFactors[category][fromUnit][toUnit];
    }

    resultDisplay.textContent = `Result: ${result}`;
}

// Initialize the units for the first category
populateUnits();

const contactForm = document.getElementById('submitContact');
const contactResult = document.getElementById('contactResult');

contactForm.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.text())
    .then(data => {
        contactResult.textContent = data;
        contactResult.classList.remove('hidden');
        setTimeout(() => {
            contactResult.classList.add('hidden');
        }, 3000);
    })
    .catch(error => {
        contactResult.textContent = 'Error: ' + error;
        contactResult.classList.remove('hidden');
        setTimeout(() => {
            contactResult.classList.add('hidden');
        }, 3000);
    });
});