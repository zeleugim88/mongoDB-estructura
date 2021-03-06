// =========================================================================== OPTICA

db.dropDatabase();

/* db = db.getSiblingDB('optica');
db.proveedores.drop();
db.clientes.drop();
 */
db.proveedores.insertMany(
    [
     {
       _id: 1,
       nombre: "Rayban",
       telefono: "611111111",
       fax: "611111111",
       nif: "61111111A",
       direccion:{
         calle: 'Aaaa',
         numero: 1,
         piso: 1,
         puerta: 1,
         ciudad: "Amsterdam",
         codigopostal: "11111",
         pais: "Holanda"
       }
     },
    {
       _id: 2,
       nombre: "Hawckers",
       telefono: "622222222",
       fax: "622222222",
       nif: "62222222A",
       direccion:{
         calle: 'Bbbb',
         numero: 2,
         piso: 2,
         puerta: 2,
         ciudad: "Birmingham",
         codigopostal: "22222",
         pais: "Inglaterra"
       },
     },
      {
       _id: 3,
       nombre: "AwesomeGlasses",
       telefono: "633333333",
       fax: "633333333",
       nif: "63333333A",
       direccion:{
         calle: 'Cccc',
         numero: 3,
         piso: 3,
         puerta: 3,
         ciudad: "Cordoba",
         codigopostal: "33333",
         pais: "España"
       }
     }
    ]
   )
   
   
   db.clientes.insertMany(
    [
     {
       _id: 1,
       nombre: "Pepito",
       telefono: "644444444",
       email: "pepito@outlook.com",
       fecha_registro: ISODate("2021-01-03T23:30:15.123Z"),
       recomendado_por: ObjectId("5349b4ddd2781d08c09890f4"),
       fecha_venta: ISODate("2021-01-03T23:30:15.123Z"),
       empleado_venta: "Manolo",
       direccion:{
         calle: 'Dddd',
         numero: 4,
         piso: 4,
         puerta: 4,
         ciudad: "Donetsk",
         codigopostal: "44444",
         pais: "Ucrania"
       },
         gafas_compradas:
         [
           {
           marca: "Blue Rayban",
           graduacion_izq: 0.25,
           graduacion_der: 0.25,
           tipo_montura: "flotante",
           color_montura: "azul",
           color_cristales: "azul",
           precio: 25,
           proveedor_id: 1
           }
         ]
     },
     {
       _id: 2,
       nombre: "Grillo",
       telefono: "655555555",
       email: "grillo@outlook.com",
       fecha_registro: ISODate("2021-02-03T23:30:15.123Z"),
       recomendado_por: ObjectId("5349b4ddd2781d08c09890f4"),
       fecha_venta: ISODate("2021-02-03T23:30:15.123Z"),
       empleado_venta: "Manolo",
       direccion:{
         calle: 'Eeee',
         numero: 5,
         piso: 5,
         puerta: 5,
         ciudad: "Edimburgo",
         codigopostal: "55555",
         pais: "Escocia"
       },
         gafas_compradas:
         [
           {
             marca: "Green Rayban",
             graduacion_izq: 0.5,
             graduacion_der: 0.5,
             tipo_montura: "pasta",
             color_montura: "verde",
             color_cristales: "verde",
             precio: 50,
             proveedor_id: 1
           },
           {        
             marca: "Green Rayban",
             graduacion_izq: 0.5,
             graduacion_der: 0.5,
             tipo_montura: "pasta",
             color_montura: "verde",
             color_cristales: "verde",
             precio: 50,
             proveedor_id: 1
           }
         ]
     }
    ] 
   )
   