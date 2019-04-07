document.getElementById('añadir').addEventListener('click', nuevoNum);
var arbolBi = new arbol;
function nuevoNum(){
    let numero = new nodo(document.getElementById('numero').value);
    arbolBi.agregar(numero);
    console.log(arbolBi);
}

document.getElementById('inOrder').addEventListener('click', ver);
function ver() {
    document.getElementById('res').innerHTML = `In-Order: ${arbolBi.InOrden()}`;
}

document.getElementById('preOrder').addEventListener('click', verPre);
function verPre() {
    document.getElementById('res').innerHTML = `Pre-Order: ${arbolBi.PreOrden()}`;
}

document.getElementById('postOrder').addEventListener('click', verPost);
function verPost() {
    document.getElementById('res').innerHTML = `Post-Order: ${arbolBi.PostOrden()}`;
}

document.getElementById('buscar').addEventListener('click', busqueda);
function busqueda() {
    let nume = document.getElementById('numero').value;
    document.getElementById('res').innerHTML = `El número ${nume} ${arbolBi.buscar(nume, arbolBi.raiz)}`;
}