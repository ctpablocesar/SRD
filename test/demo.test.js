const {fetch} = require('whatwg-fetch');

describe('Prueba GET propietarios', () => {

    test('Se tiene que devolver un ok y los propietarios en la bd', async () => {
        const resp = await fetch('http://backendsrc.vecinoscomprometidos.com/api/propietario/todos');
        const body = await resp.json();

        if (!body.ok) {
            throw new Error('La consulta falló')
        }

    })

    test('Se tiene que devolver un ok y la informacion de las casas en renta', async () => {
        const resp = await fetch('http://backendsrc.vecinoscomprometidos.com/api/propietario/rentadas');
        const body = await resp.json();

        if (!body.ok) {
            throw new Error('La consulta falló')
        }

    })

    test('Se tiene que devolver un ok y la informacion de los vehiculos registrados por propietario', async () => {
        const resp = await fetch('http://backendsrc.vecinoscomprometidos.com/api/propietario/informacion-personal');
        const body = await resp.json();

        if (!body.ok) {
            throw new Error('La consulta falló')
        }

    })

    test('Se tiene que devolver un ok y la informacion de las cuotas', async () => {
        const resp = await fetch('http://backendsrc.vecinoscomprometidos.com/api/cuotas-mantenimiento');
        const body = await resp.json();

        if (!body.ok) {
            throw new Error('La consulta falló')
        }

    })

    test('Se tiene que devolver un ok y las estadisticas de casas en construidas', async () => {
        const resp = await fetch('http://backendsrc.vecinoscomprometidos.com/api/estadisticas/construidas');
        const body = await resp.json();

        if (!body.ok) {
            throw new Error('La consulta falló')
        }

    })

    test('Se tiene que devolver un ok y las estadisticas de casas en proceso', async () => {
        const resp = await fetch('http://backendsrc.vecinoscomprometidos.com/api/estadisticas/proceso');
        const body = await resp.json();

        if (!body.ok) {
            throw new Error('La consulta falló')
        }

    })

    test('Se tiene que devolver un ok y las estadisticas de casas en habitadas', async () => {
        const resp = await fetch('http://backendsrc.vecinoscomprometidos.com/api/estadisticas/habitadas');
        const body = await resp.json();

        if (!body.ok) {
            throw new Error('La consulta falló')
        }

    })

    test('Se tiene que devolver un ok y las estadisticas de casas en rentadas', async () => {
        const resp = await fetch('http://backendsrc.vecinoscomprometidos.com/api/estadisticas/rentadas');
        const body = await resp.json();

        if (!body.ok) {
            throw new Error('La consulta falló')
        }

    })
})