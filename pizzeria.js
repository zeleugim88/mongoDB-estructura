// =========================================================================== PIZZERIA

db.dropDatabase();

/* db = db.getSiblingDB('pizzeria');
db.proveedores.drop();
db.clientes.drop(); */

db.tiendas.insertMany(
    [
        {
            _id: 1,
            direccion: {
                id_direccion: 545,
                calle: 'Aaaa',
                numero: 1,
                codigopostal: "11111",
                localidad: "Sabadell",
                provincia: "Barcelona"
            },
            productos: {
                id_producto: 343,
                tipo: "pizza",
                nombre: "Hawaiana",
                descripcion: "Piña y queso",
                imagen: "http://olegif.com/bin/gifs/00/49/30.gif",
                precio: 12.95,
                categoria_pizza: "Gourmet"
            },
            empleados: {
                id_empleado: 234,
                nombre: "Manuela",
                apellidos: "Zuckerberg",
                nif: "10444444A",
                telefono: "634343434",
                tipo_empleado: "vendedor"
            }
        }
    ]
)

db.clientes.insertMany(
    [
        {
            _id: 1,
            nombre: "Pepito",
            apellidos: "Grillo",
            telefono: "678787878",
            fecha_registro: new Date(2021, 01, 01),
            email: "pepito@outlook.com",
            direccion: {
                calle: 'Xxxx',
                numero: 99,
                codigopostal: "22222",
                localidad: "Granollers",
                provincia: "Barcelona"
            },
            pedidos: {
                pedido_id: 1,
                fecha: new Date(2021, 01, 01),
                hora: ("21:26:17Z"),
                precio: 12.95,
                entrega: {
                    empleado_id: 234,
                    hora_entrega: ("22:00:00"),
                    fecha_entrega: new Date(2021, 01, 01)
                }
            }
        }
    ]
)


