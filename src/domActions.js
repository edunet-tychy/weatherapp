const _getDOMElem = (id) => {
    return document.getElementById(id);
}

export const mapListToDomElements = (listOfId) => {
    const _vieweElems = {};

    for (const id of listOfId) {
        _vieweElems[id] = _getDOMElem(id);
    }

    return _vieweElems;
}
