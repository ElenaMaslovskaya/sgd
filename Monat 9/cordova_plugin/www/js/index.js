document.addEventListener('deviceready', onDeviceReady, false);

document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);

function onDeviceReady() {
    info();
    window.addEventListener("batterystatus", onBatteryStatus,
        false);
    window.addEventListener("batterycritical", onBatteryCritical,
        false);
    window.addEventListener("batterylow", onBatteryLow, false);
    document.getElementById('beschaffen').disabled = false;
    document.getElementById('beschaffen').addEventListener
        ('click', information, false);
    document.getElementById('aufnehmen').addEventListener('click', aufnehmenClicked, false);
    document.getElementById('galerie').addEventListener('click', galerieClicked, false);
    plattform = device.platform;
}

function information() {

    document.getElementById('cordovaversion').innerHTML = 'Cordova Version: ' + device.cordova;
    document.getElementById('modell').innerHTML = 'Modell: ' + device.model;
    document.getElementById('plattform').innerHTML = 'Plattform: ' + device.platform;
    document.getElementById('version').innerHTML = 'Version: ' + device.version;
    document.getElementById('hersteller').innerHTML = 'Hersteller: ' + device.manufacturer;

    if (device.isVirtual == true) {
        document.getElementById('virtuell').innerHTML = 'virtuelles Gerät';
    }
    else {
        document.getElementById('virtuell').innerHTML = 'kein virtuelles Gerät';
    }
}

function info() {
    let status = navigator.connection.type;
    document.getElementById('typ').innerHTML = 'Netzwerk: ' + status;
}

function onOffline() {
    document.getElementById('online').innerHTML = 'Das Gerät ist offline.';
}
function onOnline() {
    document.getElementById('online').innerHTML = 'Das Gerät ist online.';
}

function onBatteryStatus(status) {
    let aktuellerStatus = 'Das Gerät wird nicht geladen.';

    if (status.isPlugged == true) {
        aktuellerStatus = 'Das Gerät wird geladen.';
    }

    document.getElementById('status').innerHTML = aktuellerStatus + ' Prozent: ' + status.level;
}

function onBatteryCritical(status) {
    let aktuellerStatus = 'Der Batteriezustand ist kritisch.'
    document.getElementById('status').innerHTML = aktuellerStatus + ' Prozent: ' + status.level;
}
function onBatteryLow(status) {
    let aktuellerStatus = 'Der Batteriezustand ist niedrig.';
    document.getElementById('status').innerHTML = aktuellerStatus + ' Prozent: ' + status.level;
}

function optionenSetzen(quelle) {
    let ziel = Camera.DestinationType.FILE_URI;
    if (plattform == 'browser') {
        ziel = Camera.DestinationType.DATA_URL;
    }
    let optionen = {
        quality: 75,
        destinationType: ziel,
        sourceType: quelle,
        correctOrientation: true
    }
    return optionen;
}

bildErstellen(quelle);

function aufnehmenClicked() {
    let quelle = Camera.PictureSourceType.CAMERA;
    bildErstellen(quelle);
}

function galerieClicked() {
    let quelle = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    bildErstellen(quelle);
}

function bildErstellen(quelle) {
    let optionen = optionenSetzen(quelle);
    navigator.camera.getPicture(onSuccess, onError, optionen);
}

function onSuccess(ergebnis) {
    if (plattform == 'browser') {
        document.getElementById('bild').src = 'data:image/jpeg;base64,' + ergebnis;
    }
    else {
        document.getElementById('bild').src = ergebnis;
    }
}

function onError(fehler) {
    alert(fehler);
}