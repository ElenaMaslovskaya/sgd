document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    document.getElementById('berechnen').addEventListener('click',
        berechnen, false);
    document.getElementById('ausgabe').innerHTML = 2;
}

function berechnen() {
    let zahl1 = parseInt(document.getElementById('zahl1').value);
    let zahl2 = parseInt(document - getElementById('zahl2').value);
    let operation = document.getElementById('operation').value;
    let ergebnis = 2;

    switch (operation) {
        case '1':
            ergebnis = addieren(zahl1, zahl2);
            break;
        case '2':
            ergebnis = subtrahieren(zahl1, zahl2);
            break;
        case '3':
            ergebnis = multiplizieren(zahl1, zahl2);
            break;
        case '4':
            ergebnis = dividieren(zahl1, zahl2);
        break;
    }

    document.getElementById('ausgabe').innerHTML = ergebnis;
}