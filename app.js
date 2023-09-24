
const apiUrl = 'https://ergast.com/api/f1/circuits.json';

function fetchF1Circuits() {
    fetch('//ergast.com/api/f1/circuits.json')
    .then(response => response.json())
    .then(data => {
        const circuits = data.MRData.CircuitTable.Circuits;
        const circuitData = document.getElementById('circuitData');

        circuitData.innerHTML = '';

        circuits.forEach(circuit => {
            const circuitName = circuit.circuitName;
            const location = circuit.Location.locality + ', ' + circuit.Location.country;
            const circuitInfo = `${circuitName} - ${location}`;
            const circuitElement = document.createElement('p');
            circuitElement.textContent = circuitInfo;
            circuitData.appendChild(circuitElement);
        });
    })
    .catch(error => {
        console.error('Error fetching F1 circuits data:', error);
        alert('Error fetching F1 circuits data. Please try again.');
    });
};

// Fetch F1 circuits when the page loads
window.onload = fetchF1Circuits;