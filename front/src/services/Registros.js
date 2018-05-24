//const baseUrl = 'https://findep.herokuapp.com';
const baseUrl = 'http://localhost:3000';

//MOSTRAR REGISTROS
export function getRegistros() {
    return fetch(baseUrl + '/registros')
        .then(r => r.json())
        .then(data => data);
}

//AGREGAR REGISTRO CON FOTO
export function addRegistro(registro) {
    console.log("nuevo registro desde el front", registro)
    let formData = new FormData();
    //push objetos
    for (let k in registro) {
        formData.append(k, registro[k]);
    }
    return fetch(baseUrl + '/registros/new', {
            method: 'post',
            credentials: "include",
            body: formData
        })
        .then(r => r.json())
        .then(registro => registro);
}

//BORRAR REGISTRO
export function deleteRegistro(id) {
    return fetch(baseUrl + '/registros/borrar/' + id, {
            method: 'delete'
        })
        .then(r => r.json())
        .then(registro => registro)
}

//EDITAR REGISTRO
export function editRegistro(id, registro) {
    const formData = new FormData()
    for (let k in registro) {
        formData.append(k, registro[k]);
    }
    return fetch(baseUrl + '/registros/edit/' + id, {
            method: 'put',
            body: formData
        })
        .then(r => r.json())
        .then(registro => registro)
}