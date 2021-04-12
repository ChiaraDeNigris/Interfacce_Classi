// Import stylesheets
import "./style.css";

interface cane {
  coda: string;
  peso: any;
}
interface gatto {
  baffi: string;
  orecchie: any;
}
interface pesce {
  pinne: string;
  branchie: any;
}
class CaneGatto implements cane, gatto {
  coda: string;
  peso: number;
  baffi: string;
  orecchie: string;
}

class PesceGatto implements gatto, pesce {
  baffi: string;
  orecchie: string;
  pinne: string;
  branchie: string;
  constructor() {
    this.branchie = "verdi";
    this.pinne = "";
  }
}

var animale1 = new CaneGatto();
animale1.coda = "nera";
animale1.peso = 30;
animale1.baffi = "lunghi";
animale1.orecchie = "a punta";
console.log(animale1);

var animale2 = new PesceGatto();
animale2.baffi = "lunghi";
animale2.pinne = "blu";
console.log(animale2);
