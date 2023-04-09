class Singleton {
   static instanz;
   constructor() {
      console.log('Eine Instanz der Klasse Singleton wurde erzeugt.');
      this.zahl = 20;
   }
   static getInstanz() {
      if (!Singleton.instanz) {
         Singleton.instanz = new Singleton();
      }
      return Singleton.instanz;
   }

   veraendern() {
      this.zahl = this.zahl * 2;
      console.log(this.zahl);
   }
}

let instanz1 = Singleton.getInstanz();
let instanz2 = Singleton.getInstanz();

instanz1.veraendern();
instanz2.veraendern();

if (instanz1 === instanz2) {
   console.log('Die Instanzen sind identisch.')
}
else {
      console.log('Die Instanzen sind nicht identisch.')
}

let instanz3 = new Singleton();
let instanz4 = new Singleton();

instanz3.veraendern();
instanz4.veraendern();

if (instanz3 === instanz4) {
   console.log('Die Instanzen sind identisch.')
}
else {
   console.log('Die Instanzen sind nicht identisch.')
}


