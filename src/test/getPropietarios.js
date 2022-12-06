const fetch = require('node-fetch');

export const getPropietarios = async () => {

    const resp = await fetch('https://backendsrc.vecinoscomprometidos.com/api/propietario/todos');
    const body = await resp.json();

    return body;

}