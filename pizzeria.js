// =========================================================================== PIZZERIA

db.dropDatabase();

/* db = db.getSiblingDB('pizzeria');
db.proveedores.drop();
db.clientes.drop(); */

db.tiendas.insertMany(
    [
     {
       _id: 111,
       direccion:{
         id_direccion: 545,
         calle: 'Aaaa',
         numero: 1,
         codigopostal: "11111",
         localidad: "Sabadell",
         provincia: "Barcelona"
       },
   
       empleados:
       [
         {
         id_empleado: 234,
         nombre: "Manuela",
         apellidos: "Zuckerberg",
         nif: "10444444A",
         telefono: "634343434",
         tipo_empleado: "vendedor"
         },
         {
         id_empleado: 235,
         nombre: "Manuel",
         apellidos: "Bezos",
         nif: "10444444B",
         telefono: "634343435",
         tipo_empleado: "vendedor"
         }
       ],
       productos_id: 
       [
         {id_producto: 343}, {id_producto: 35}
       ]
     }
    ]
   )
   
   db.productos.insertMany(
     [
       {
         id_producto: 343,
         tipo: "pizza",
         nombre: "Hawaiana",
         descripcion: "Piña y queso",
         imagen: "http://olegif.com/bin/gifs/00/49/30.gif",
         precio: 12.95,
         categoria_pizza: "Gourmet"
       },
           {
         id_producto: 35,
         tipo: "hamburguesa",
         nombre: "3 carnes",
         descripcion: "Pollo, Conejo, Ternera",
         imagen: "http://olegif.com/bin/gifs/00/49/30.gif",
         precio: 14.95,
         categoria_pizza: ""
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
       fecha_registro: new Date(2021,01,01),
       email: "pepito@outlook.com",
       direccion:{
         calle: 'Xxxx',
         numero: 99,
         codigopostal: "22222",
         localidad: "Granollers",
         provincia: "Barcelona"
       },
       pedidos: {
         pedido_id: {_id: 1},
         tienda_id: {_id: 1},
         fecha: new Date(2021,01,01),
         hora: ("21:26:17Z"),
         precio: 12.95,
         entrega: {
           empleado_id: { _id: 234},
           hora_entrega: ("22:00:00"),
           fecha_entrega: new Date(2021,01,01)
         },
         id_productos_comprados: [
           {_id: 343},{_id: 343},{_id:35}
         ]
       }
     }
    ]
   )