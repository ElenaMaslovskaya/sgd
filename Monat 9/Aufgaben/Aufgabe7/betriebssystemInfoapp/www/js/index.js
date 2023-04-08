document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.getElementById('beschaffen').disabled = false;
    document.getElementById('beschaffen').addEventListener
        ('click', info, false);
}
function info() {
    if (device.platform == 'browser') {
        document.getElementById('plattform').innerHTML = 'Sie arbeiten im Browser mit der Versionsnummer ' + device.version + '.'
    }

    if (device.platform == 'Android') {
        document.getElementById('plattform').innerHTML = 'Sie arbeiten mit dem Betriebssystem Android in der Version  ' + device.version + '.'
    }
}