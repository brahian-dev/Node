const empleados = [
    {
        id: 1,
        nombre: 'Brahian'
    },
    {
        id: 2,
        nombre: 'Sara'
    },
    {
        id: 3,
        nombre: 'Andres'
    }
]

const salarios = [
    {
        id: 1,
        salario: 2000
    },
    {
        id: 2,
        salario: 3000
    }
]

const getSalario = ( id, callback ) => {
    const salario = salarios.find(e => e.id === id)

    if (salario) {
        callback(null, salario)
    } else {
        callback(true, `No existe el salario con el ID ${ id }`)
    }
}

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find(e => e.id === id)

    if (empleado) {
        callback(null, empleado)
    } else {
        callback(true, `No existe el empleado con el ID ${ id }`)
    }
}


getEmpleado(10, (error, empleado) => {
    if (error) {
        return console.log(empleado)
    }

    return console.log('Empleado', empleado)
})

getSalario(4, ( error, salario ) => {
    if (error) {
        return console.log(salario)
    } else {
        return console.log('Salario', salario)
    }
})
