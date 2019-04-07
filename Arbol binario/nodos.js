class nodo{
    constructor(dato){
        this.dato = dato;
        this.hizq = null;
        this.hder = null;
    }
    sethIzq(hizq){
        this.hizq = hizq;
    }
    sethDer(hder){
        this.hder = hder;
    }
    gethIzq(){
        return this.hizq;
    }
    gethDer(){
        return this.hder;
    }
}
