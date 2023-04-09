class HeimwerkerWerkzeug {
   constructor(eigenschaften) {
      this.name = eigenschaften.name;
      this.farbe = eigenschaften.farbe;
   }
}

class ProfiWerkzeug {
   constructor(eigenschaften) {
      this.name = eigenschaften.name;
      this.leistung = eigenschaften.leistung;
   }
}

class WerzeugFabrik {
   static getWerkzeug(typ, eigenschaften) {
      if (typ == 'profi') {
         return new ProfiWerkzeug(eigenschaften);
      }
      else {
         if (typ == 'heimwerker') {
            return new HeimwerkerWerkzeug(eigenschaften);
         }
      }
   }
}

let heimwerker = WerzeugFabrik.getWerkzeug('heimwerker', {
   name: 'Bohrmaschine',
   farbe: 'grün'
})

let profi = WerzeugFabrik.getWerkzeug('profi', {
   name: 'Bohrhammer',
   leistung: 1800
})

console.log(heimwerker.name + ' ' + heimwerker.farbe);
console.log(profi.name + ' ' + profi.leistung);

