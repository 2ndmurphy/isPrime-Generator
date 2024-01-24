function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

function generatePrimes() {
    const angkaPertama = parseInt(document.getElementById("inputAngkaPertama").value);
    const angkaTerakhir = parseInt(document.getElementById("inputAngkaTerakhir").value);

    let primes = [];


    for (let i = angkaPertama + 1; i < angkaTerakhir; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    displayPrimes(primes);
}

function displayPrimes(primes) {
    const primeTable = document.getElementById("primeTable");
    primeTable.innerHTML = "<tr><th>Bilangan Prima</th></tr>";

    primes.forEach(prime => {
        const row = primeTable.insertRow();
        const cell = row.insertCell(0);
        cell.textContent = prime;
    });
}
