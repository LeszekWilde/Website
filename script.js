const units = {
    length: ['meters', 'kilometers', 'miles', 'feet', 'inches'],
    weight: ['kilograms', 'grams', 'pounds', 'ounces'],
    temperature: ['celsius', 'fahrenheit', 'kelvin']
};

const conversionFactors = {
    length: {
        meters: { meters: 1, kilometers: 0.001, miles: 0.000621371, feet: 3.28084, inches: 39.3701 },
        kilometers: { meters: 1000, kilometers: 1, miles: 0.621371, feet: 3280.84, inches: 39370.1 },
        miles: { meters: 1609.34, kilometers: 1.60934, miles: 1, feet: 5280, inches: 63360 },
        feet: { meters: 0.3048, kilometers: 0.0003048, miles: 0.000189394, feet: 1, inches: 12 },
        inches: { meters: 0.0254, kilometers: 0.0000254, miles: 0.000015783, feet: 0.0833333, inches: 1 }
    },
    weight: {
        kilograms: { kilograms: 1, grams: 1000, pounds: 2.20462, ounces: 35.274 },
        grams: { kilograms: 0.001, grams: 1, pounds: 0.00220462, ounces: 0.035274 },
        pounds: { kilograms: 0.453592, grams: 453.592, pounds: 1, ounces: 16 },
        ounces: { kilograms: 0.0283495, grams: 28.3495, pounds: 0.0625, ounces: 1 }
    },
    temperature: {
        celsius: { celsius: 1, fahrenheit: (value) => (value * 9/5) + 32, kelvin: (value) => value + 273.15 },
        fahrenheit: { celsius: (value) => (value - 32) * 5/9, fahrenheit: 1, kelvin: (value) => (value - 32) * 5/9 + 273.15 },
        kelvin: { celsius: (value) => value - 273.15, fahrenheit: (value) => (value - 273.15) * 9/5 + 32, kelvin: 1 }
    }
};

function populateUnits() {
    const unitType = document.getElementById('unit-type').value;
    const inputUnit = document.getElementById('input-unit');
    const outputUnit = document.getElementById('output-unit');

    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';

    units[unitType].forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        inputUnit.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;
        outputUnit.appendChild(option2);
    });
}

function convert() {
    const unitType = document.getElementById('unit-type').value;
    const inputUnit = document.getElementById('input-unit').value;
    const outputUnit = document.getElementById('output-unit').value;
    const inputValue = parseFloat(document.getElementById('input-value').value);
    const outputValueElement = document.getElementById('output-value');

    if (isNaN(inputValue)) {
        outputValueElement.value = 'Invalid input';
        return;
    }

    let result;

    if (unitType === 'temperature') {
        result = conversionFactors[unitType][inputUnit][outputUnit](inputValue);
    } else {
        const factor = conversionFactors[unitType][inputUnit][outputUnit];
        result = inputValue * factor;
    }

    outputValueElement.value = result;
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: new URLSearchParams(formData)
    })
    .then(response => response.text())
    .then(result => {
        const successMessage = document.getElementById('success-message');
        successMessage.classList.remove('hidden');
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 3000);
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

window.onload = populateUnits;