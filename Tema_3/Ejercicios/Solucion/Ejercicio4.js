// Función auxiliar para determinar si un nodo es de tipo Element
function isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
}

// Recorrido en preorden: procesa el nodo, luego recorre todos sus hijos
function preorden(node) {
    if (!node) return;
    if (isElementNode(node)) {
        console.log("Preorden:", node.tagName);
    }
    Array.from(node.childNodes).forEach(child => {
        if (isElementNode(child)) {
            preorden(child);
        }
    });
}

// Recorrido en postorden: recorre los hijos y luego procesa el nodo
function postorden(node) {
    if (!node) return;
    Array.from(node.childNodes).forEach(child => {
        if (isElementNode(child)) {
            postorden(child);
        }
    });
    if (isElementNode(node)) {
        console.log("Postorden:", node.tagName);
    }
}

// Seleccionamos el contenedor de películas como raíz para los recorridos
const moviesContainer = document.getElementById('movies');

console.log("Recorrido Preorden:");
preorden(moviesContainer);

console.log("Recorrido Postorden:");
postorden(moviesContainer);
