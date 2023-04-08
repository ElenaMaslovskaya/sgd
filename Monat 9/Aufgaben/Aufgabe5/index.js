function speichernWert() {
   let meinSpeicher = window.localStorage;

   let wert = document.getElementById('wert01').value;
   if (wert) {
      meinSpeicher.setItem('wert01', wert);
   }
}

function ladenWert() {
   let meinSpeicher = window.localStorage;

   let wert = meinSpeicher.getItem('wert01');
   if (wert) {
      document.getElementById('wert01').value = wert;
      console.log('wert01', wert);
   }
}