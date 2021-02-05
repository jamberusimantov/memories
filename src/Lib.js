let Lib;

function newElement(elementType, elementClass, elementInnerValue) {
    let textNode;
    let node = document.createElement(elementType && elementType.trim().length > 0 ? elementType.toUpperCase() : 'DIV');
    node.setAttribute('class', elementClass && elementClass.trim().length > 0 ? elementClass : 'div');
    textNode = elementInnerValue && elementInnerValue.trim().length > 0 ? document.createTextNode(elementInnerValue) : null;
    if (textNode) {
        node.appendChild(textNode);
    }
    return node;
}

// function newList() {

// }
Lib = { newElement }
export default Lib;