const conversionFactors = {
    length: {
        meters: { meters: 1, kilometers: 0.001, centimeters: 100, millimeters: 1000, micrometers: 1000000, nanometers: 1e+9, miles: 0.000621371, yards: 1.09361, feet: 3.28084, inches: 39.3701 },
        kilometers: { meters: 1000, kilometers: 1, centimeters: 100000, millimeters: 1000000, micrometers: 1e+9, nanometers: 1e+12, miles: 0.621371, yards: 1093.61, feet: 3280.84, inches: 39370.1 },
        centimeters: { meters: 0.01, kilometers: 0.00001, centimeters: 1, millimeters: 10, micrometers: 10000, nanometers: 1e+7, miles: 0.00000621371, yards: 0.0109361, feet: 0.0328084, inches: 0.393701 },
        millimeters: { meters: 0.001, kilometers: 0.000001, centimeters: 0.1, millimeters: 1, micrometers: 1000, nanometers: 1e+6, miles: 0.000000621371, yards: 0.00109361, feet: 0.00328084, inches: 0.0393701 },
        micrometers: { meters: 1e-6, kilometers: 1e-9, centimeters: 1e-4, millimeters: 0.001, micrometers: 1, nanometers: 1000, miles: 6.2137e-10, yards: 1.0936e-6, feet: 3.2808e-6, inches: 3.93701e-5 },
        nanometers: { meters: 1e-9, kilometers: 1e-12, centimeters: 1e-7, millimeters: 1e-6, micrometers: 1e-3, nanometers: 1, miles: 6.2137e-13, yards: 1.0936e-9, feet: 3.2808e-9, inches: 3.9370e-8 },
        miles: { meters: 1609.34, kilometers: 1.60934, centimeters: 160934, millimeters: 1609340, micrometers: 1.60934e+9, nanometers: 1.60934e+12, miles: 1, yards: 1760, feet: 5280, inches: 63360 },
        yards: { meters: 0.9144, kilometers: 0.0009144, centimeters: 91.44, millimeters: 914.4, micrometers: 914400, nanometers: 9.144e+8, miles: 0.000568182, yards: 1, feet: 3, inches: 36 },
        feet: { meters: 0.3048, kilometers: 0.0003048, centimeters: 30.48, millimeters: 304.8, micrometers: 304800, nanometers: 3.048e+8, miles: 0.000189394, yards: 0.333333, feet: 1, inches: 12 },
        inches: { meters: 0.0254, kilometers: 0.0000254, centimeters: 2.54, millimeters: 25.4, micrometers: 25400, nanometers: 2.54e+7, miles: 0.0000157828, yards: 0.0277778, feet: 0.0833333, inches: 1 }
    },
    weight: {
        grams: { grams: 1, kilograms: 0.001, milligrams: 1000, micrograms: 1e+6, pounds: 0.00220462, ounces: 0.035274 },
        kilograms: { grams: 1000, kilograms: 1, milligrams: 1e+6, micrograms: 1e+9, pounds: 2.20462, ounces: 35.274 },
        milligrams: { grams: 0.001, kilograms: 0.000001, milligrams: 1, micrograms: 1000, pounds: 2.20462e-6, ounces: 3.5274e-5 },
        micrograms: { grams: 1e-6, kilograms: 1e-9, milligrams: 0.001, micrograms: 1, pounds: 2.20462e-9, ounces: 3.5274e-8 },
        pounds: { grams: 453.592, kilograms: 0.453592, milligrams: 453592, micrograms: 4.53592e+8, pounds: 1, ounces: 16 },
        ounces: { grams: 28.3495, kilograms: 0.0283495, milligrams: 28349.5, micrograms: 2.83495e+7, pounds: 0.0625, ounces: 1 }
    },
    temperature: {
        celsius: { celsius: 1, fahrenheit: 1.8, kelvin: 1 },
        fahrenheit: { celsius: 0.555556, fahrenheit: 1, kelvin: 0.555556 },
        kelvin: { celsius: 1, fahrenheit: 1.8, kelvin: 1 }
    },
    volume: {
        liters: { liters: 1, milliliters: 1000, cubicMeters: 0.001, cubicCentimeters: 1000, gallonsUS: 0.264172, gallonsUK: 0.219969, quartsUS: 1.05669, quartsUK: 0.879876, pintsUS: 2.11338, pintsUK: 1.75975 },
        milliliters: { liters: 0.001, milliliters: 1, cubicMeters: 1e-6, cubicCentimeters: 1, gallonsUS: 0.000264172, gallonsUK: 0.000219969, quartsUS: 0.00105669, quartsUK: 0.000879876, pintsUS: 0.00211338, pintsUK: 0.00175975 },
        cubicMeters: { liters: 1000, milliliters: 1e+6, cubicMeters: 1, cubicCentimeters: 1e+6, gallonsUS: 264.172, gallonsUK: 219.969, quartsUS: 1056.69, quartsUK: 879.876, pintsUS: 2113.38, pintsUK: 1759.75 },
        cubicCentimeters: { liters: 0.001, milliliters: 1, cubicMeters: 1e-6, cubicCentimeters: 1, gallonsUS: 0.000264172, gallonsUK: 0.000219969, quartsUS: 0.00105669, quartsUK: 0.000879876, pintsUS: 0.00211338, pintsUK: 0.00175975 },
        gallonsUS: { liters: 3.78541, milliliters: 3785.41, cubicMeters: 0.00378541, cubicCentimeters: 3785.41, gallonsUS: 1, gallonsUK: 0.832674, quartsUS: 4, quartsUK: 3.33143, pintsUS: 8, pintsUK: 6.66286 },
        gallonsUK: { liters: 4.54609, milliliters: 4546.09, cubicMeters: 0.00454609, cubicCentimeters: 4546.09, gallonsUS: 1.20095, gallonsUK: 1, quartsUS: 4.80095, quartsUK: 4, pintsUS: 9.60191, pintsUK: 8 },
        quartsUS: { liters: 0.946353, milliliters: 946.353, cubicMeters: 0.000946353, cubicCentimeters: 946.353, gallonsUS: 0.25, gallonsUK: 0.208168, quartsUS: 1, quartsUK: 0.833357, pintsUS: 2, pintsUK: 1.66671 },
        quartsUK: { liters: 1.13652, milliliters: 1136.52, cubicMeters: 0.00113652, cubicCentimeters: 1136.52, gallonsUS: 0.300684, gallonsUK: 0.25, quartsUS: 1.20068, quartsUK: 1, pintsUS: 2.40137, pintsUK: 2 },
        pintsUS: { liters: 0.473176, milliliters: 473.176, cubicMeters: 0.000473176, cubicCentimeters: 473.176, gallonsUS: 0.125, gallonsUK: 0.104337, quartsUS: 0.5, quartsUK: 0.416679, pintsUS: 1, pintsUK: 0.833359 },
        pintsUK: { liters: 0.568261, milliliters: 568.261, cubicMeters: 0.000568261, cubicCentimeters: 568.261, gallonsUS: 0.166667, gallonsUK: 0.14, quartsUS: 0.666667, quartsUK: 0.571429, pintsUS: 1.2, pintsUK: 1 }
    },
    area: {
        squareMeters: { squareMeters: 1, squareKilometers: 1e-6, hectares: 1e-4, acres: 2.47105e-5, squareFeet: 10.7639, squareInches: 1550.0031, squareYards: 1.19599 },
        squareKilometers: { squareMeters: 1e+6, squareKilometers: 1, hectares: 100, acres: 247.105, squareFeet: 1.19599e+7, squareInches: 1.550e+9, squareYards: 1.19599e+5 },
        hectares: { squareMeters: 10000, squareKilometers: 0.01, hectares: 1, acres: 2.47105, squareFeet: 107639, squareInches: 1.076e+7, squareYards: 11960.6 },
        acres: { squareMeters: 4046.86, squareKilometers: 0.00404686, hectares: 0.404686, acres: 1, squareFeet: 43560, squareInches: 6272640, squareYards: 4840 },
        squareFeet: { squareMeters: 0.092903, squareKilometers: 9.2903e-8, hectares: 9.2903e-6, acres: 2.2957e-5, squareFeet: 1, squareInches: 144, squareYards: 0.111111 },
        squareInches: { squareMeters: 0.00064516, squareKilometers: 6.4516e-10, hectares: 6.4516e-8, acres: 1.5942e-8, squareFeet: 0.00694444, squareInches: 1, squareYards: 0.000771604 },
        squareYards: { squareMeters: 0.836127, squareKilometers: 8.36127e-7, hectares: 8.36127e-5, acres: 0.000206612, squareFeet: 9, squareInches: 1296, squareYards: 1 }
    },
    speed: {
        metersPerSecond: { metersPerSecond: 1, kilometersPerHour: 3.6, milesPerHour: 2.23694, feetPerSecond: 3.28084 },
        kilometersPerHour: { metersPerSecond: 0.277778, kilometersPerHour: 1, milesPerHour: 0.621371, feetPerSecond: 0.911344 },
        milesPerHour: { metersPerSecond: 0.44704, kilometersPerHour: 1.60934, milesPerHour: 1, feetPerSecond: 1.46667 },
        feetPerSecond: { metersPerSecond: 0.3048, kilometersPerHour: 1.09728, milesPerHour: 0.681818, feetPerSecond: 1 }
    },
    pressure: {
        pascals: { pascals: 1, atmospheres: 9.86923e-6, bar: 1e-5, psi: 0.000145038 },
        atmospheres: { pascals: 101325, atmospheres: 1, bar: 1.01325, psi: 14.696 },
        bar: { pascals: 100000, atmospheres: 0.986923, bar: 1, psi: 14.5038 },
        psi: { pascals: 6894.76, atmospheres: 0.068046, bar: 0.0689476, psi: 1 }
    },
    energy: {
        joules: { joules: 1, calories: 0.239006, kilocalories: 0.000239006, btus: 0.000947817, electronvolts: 6.242e+18 },
        calories: { joules: 4.184, calories: 1, kilocalories: 0.001, btus: 0.00396832, electronvolts: 2.611e+19 },
        kilocalories: { joules: 4184, calories: 1000, kilocalories: 1, btus: 3.96832, electronvolts: 2.611e+22 },
        btus: { joules: 1055.06, calories: 252, kilocalories: 0.252, btus: 1, electronvolts: 6.11e+21 },
        electronvolts: {joules: 1.60218e-19, calories: 3.8293e-20, kilocalories: 3.8293e-23, btus: 1.60218e-22, electronvolts: 1 }
},
power: {
watts: { watts: 1, kilowatts: 0.001, horsepower: 0.00134102, megawatts: 1e-6 },
kilowatts: { watts: 1000, kilowatts: 1, horsepower: 1.34102, megawatts: 0.001 },
horsepower: { watts: 745.7, kilowatts: 0.7457, horsepower: 1, megawatts: 0.0007457 },
megawatts: { watts: 1e+6, kilowatts: 1000, horsepower: 1341.02, megawatts: 1 }
},
time: {
seconds: { seconds: 1, minutes: 0.0166667, hours: 0.000277778, days: 1.15741e-5, weeks: 1.65344e-6 },
minutes: { seconds: 60, minutes: 1, hours: 0.0166667, days: 0.00138889, weeks: 0.000198413 },
hours: { seconds: 3600, minutes: 60, hours: 1, days: 0.0416667, weeks: 0.00595238 },
days: { seconds: 86400, minutes: 1440, hours: 24, days: 1, weeks: 0.142857 },
weeks: { seconds: 604800, minutes: 10080, hours: 168, days: 7, weeks: 1 }
}
};

function updateUnits() {
const category = document.getElementById(‘category’).value;
const fromUnit = document.getElementById(‘fromUnit’);
const toUnit = document.getElementById(‘toUnit’);
fromUnit.innerHTML = ‘’;
toUnit.innerHTML = ‘’;

const units = Object.keys(conversionFactors[category]);

units.forEach(unit => {
    fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
    toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
});

}

function convert() {
const category = document.getElementById(‘category’).value;
const fromUnit = document.getElementById(‘fromUnit’).value;
const toUnit = document.getElementById(‘toUnit’).value;
const value = parseFloat(document.getElementById(‘inputValue’).value);

if (isNaN(value) || !fromUnit || !toUnit) {
    alert('Please provide valid input values.');
    return;
}

let result;
if (category === 'temperature') {
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (value * 1.8) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (value - 32) / 1.8;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = value + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = value - 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = ((value - 32) / 1.8) + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = ((value - 273.15) * 1.8) + 32;
    } else {
        result = value; // Same unit conversion
    }
} else {
    const factor = conversionFactors[category][fromUnit][toUnit];
    result = value * factor;
}
document.getElementById('result').textContent = `Result: ${result} ${toUnit}`;

}

function submitContactForm() {
const name = document.getElementById(‘name’).value;
const email = document.getElementById(‘email’).value;
const message = document.getElementById(‘message’).value;

if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
}

fetch('/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
}).then(response => response.text())
  .then(data => {
      document.getElementById('contactResult').classList.remove('hidden');
      setTimeout(() => {
          document.getElementById('contactResult').classList.add('hidden');
      }, 3000);
  })
  .catch(error => {
      console.error('Error:', error);
  });

}

document.getElementById(‘category’).addEventListener(‘change’, updateUnits);
document.getElementById(‘convertButton’).addEventListener(‘click’, convert);
document.getElementById(‘submitContact’).addEventListener(‘click’, submitContactForm);

updateUnits();