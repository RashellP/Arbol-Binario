class arbol{
    constructor(){
        this.raiz = null;
        this.order = "";
    }
    agregar(nuevo){
        if(this.raiz == null){
            this.raiz = nuevo;
        }
        else{
            this.agregate(nuevo, this.raiz);
        }
    }
    agregate(nuevo, raiz){
        if(nuevo.dato < raiz.dato){
            if(raiz.hizq == null){
                raiz.hizq = nuevo;
            }
            else{
                this.agregate(nuevo, raiz.hizq);
            }
        }
        else{
            if(raiz.hder == null){
                raiz.hder = nuevo;
            }
            else{
                this.agregate(nuevo, raiz.hder);
            }
        }
    }
    inOr(raiz){
        if (raiz.hizq != null) {
            this.inOr(raiz.hizq);
        }
        this.order = this.order + raiz.dato + "-";
        if (raiz.hder != null){
            this.inOr(raiz.hder);
        }
        return this.order;
    }
    preOrder(raiz){
        this.order = this.order + raiz.dato + "-";
        if (raiz.hizq != null) {
            this.order = this.preOrder(raiz.hizq);
        }
        if (raiz.hder != null) {
            this.order = this.preOrder(raiz.hder); 
        }
        return this.order;
    }
    postOrder(raiz){
        if (raiz.hizq != null) {
            this.order = this.postOrder(raiz.hizq);
        }
        if (raiz.hder != null) {
            this.order = this.postOrder(raiz.hder); 
        }
        this.order = this.order + raiz.dato + "-";
        return this.order;
    }
    InOrden(raiz){
        this.order = "";
        if(this.raiz == null){
            return "";
        }
        else{
            return this.inOr(this.raiz);
        }
    }
    PreOrden(raiz){
        this.order = "";
        if (this.raiz == null) {
            return "";
        }
        else{
            return this.preOrder(this.raiz);
        }
    }
    PostOrden(raiz){
        this.order = "";
        if (this.raiz == null) {
            return "";
        }
        else{
            return this.postOrder(this.raiz);
        }
    }
    buscar(nodo, raiz){
        if (nodo == raiz.dato) {
            return ' ha sido encontrado.';
        }
        else if (nodo < raiz.dato) {
            if (raiz.hizq != null) {
                return this.buscar(nodo, raiz.hizq);
            }
            else{
                return ' no ha sido encontrado.';
            }
        }
        else if (nodo > raiz.dato) {
            if (raiz.hder != null) {
                return this.buscar(nodo, raiz.hder);
            }
            else{
                return ' no ha sido encontrado.';
            }
        }
    }
}