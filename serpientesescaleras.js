var vector=[]
for (let i = 1; i < 100; i++) {
    vector[i]=i
}

class Dado {
    lanzar(){
        return Math.ceil(Math.random()*6);
    }
}

class Jugador {
    constructor(nombre) {
    this.nombre=nombre 
    this.color=color
    this.posición = 0
    this.dado= new Dado()
    }

    avanzar(){
        let cara=this.dado.lanzar();
        this.posición+=cara
    }
    texto(){
        return this.nombre + ` está en la casilla ` + this.posición;
     }
}

class Tablero {
    constructor(){
    this.meta=100
    }
    revisarCasilla(casilla){
    if (casilla==2) {//escalera
        return 38;
    } else if (casilla==8) {//escalera
        return 31;
    } else if (casilla==28) {//escalera
        return 84;
    } else if (casilla==51) {//escalera
        return 67;
    } else if (casilla==78) {//escalera
        return 98;
    } else if (casilla==21) {//escalera
        return 42;
    } else if (casilla==71) {//escalera
        return 91;
    } else if (casilla==15) {//escalera
        return 26;
    } else if (casilla==36) {//escalera
        return 44;
    } else if (casilla==87) {//escalera
        return 94;
    } else if (casilla==16) {//serpiente
        return 6;
    } else if (casilla==49) {//serpiente
        return 11;
    } else if (casilla==46) {//serpiente
        return 24;
    } else if (casilla==64) {//serpiente
        return 60;
    } else if (casilla==62) {//serpiente
        return 19;
    } else if (casilla==89) {//serpiente
        return 68;
    } else if (casilla==95) {//serpiente
        return 75;
    } else if (casilla==99) {//serpiente
        return 80;
    } else if (casilla==74) {//serpiente
        return 53;
    } else if (casilla==92) {//serpiente
        return 88;
    } else {//sin nada
        return casilla
    }
}
}

function verificarCasilla(casilla) {
    return vector[casilla]    
}

//Juego
var tablero = new Tablero()
var dado = new Dado()
var j1 = new Jugador()
var j2 = new Jugador()

while (j1.posición < 100 && j2.posición < 100) {
    j1.dado.lanzar
    j1.avanzar
    tablero.revisarCasilla(j1.posición)

    j2.dado.lanzar
    j2.avanzar
    tablero.revisarCasilla(j2.posición)
}