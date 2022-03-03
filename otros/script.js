
// =========================================================================== OPTICA

db.dropDatabase();
db = db.getSiblingDB('optica');

db.proveedores.drop();
db.clientes.drop();

db.proveedores.insertMany(
    [
        {
            _id: 1,
            nombre: "Rayban",
            telefono: "611111111",
            fax: "611111111",
            nif: "61111111A",
            direccion: {
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
            direccion: {
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
            direccion: {
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
            recomendado_por: "",
            fecha_venta: ISODate("2021-01-03T23:30:15.123Z"),
            empleado_venta: "Manolo",
            direccion: {
                calle: 'Dddd',
                numero: 4,
                piso: 4,
                puerta: 4,
                ciudad: "Donetsk",
                codigopostal: "44444",
                pais: "Ucrania"
            },
            gafa_comprada: {
                marca: "Blue Rayban",
                graduacion_izq: 0.25,
                graduacion_der: 0.25,
                tipo_montura: "flotante",
                color_montura: "azul",
                color_cristales: "azul",
                precio: 25,
                proveedor_id: 1
            }
        },
        {
            _id: 2,
            nombre: "Grillo",
            telefono: "655555555",
            email: "grillo@outlook.com",
            fecha_registro: ISODate("2021-02-03T23:30:15.123Z"),
            recomendado_por: "Pepito",
            fecha_venta: ISODate("2021-02-03T23:30:15.123Z"),
            empleado_venta: "Manolo",
            direccion: {
                calle: 'Eeee',
                numero: 5,
                piso: 5,
                puerta: 5,
                ciudad: "Edimburgo",
                codigopostal: "55555",
                pais: "Escocia"
            },
            gafa_comprada: {
                marca: "Green Rayban",
                graduacion_izq: 0.5,
                graduacion_der: 0.5,
                tipo_montura: "pasta",
                color_montura: "verde",
                color_cristales: "verde",
                precio: 50,
                proveedor_id: 1
            }
        }
    ]
)


// =========================================================================== PIZZERIA

db.dropDatabase();
db = db.getSiblingDB('pizzeria');

db.proveedores.drop();
db.clientes.drop();

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




// =========================================================================== YOUTUBE

db.dropDatabase();
db = db.getSiblingDB('youtube');

db.videos.drop();
db.usuarios.drop();

db.videos.insertMany(
    [
        {
            _id: 1,
            titulo: "Entrevista a Pepito 2022",
            descripcion: "Conoce todos sus secretos",
            tamano: 225,
            duracion: "3:55",
            thumbnail: "http://olegif.com/bin/gifs/00/49/30.gif",
            reproduciones: 10454,
            likes: 54045,
            dislikes: 45639,
            visibilidad: "publico",
            fecha: new Date(2021, 01, 01),
            hora: ("22:00:00"),

            etiquetas: [
                {
                    id_etiqueta: 3943893,
                    nombre: "pepito"
                },
                {
                    id_etiqueta: 3943895,
                    nombre: "entrevistas"
                }
            ],

            likes_dislikes: [
                {
                    like_dislike_id: 2031,
                    like_dislike: "like",
                    fecha: new Date(2021, 02, 01),
                    hora: ("21:00:00"),
                    usuario_id: 444,
                },
                {
                    like_dislike_id: 2032,
                    like_dislike: "dislike",
                    fecha: new Date(2021, 04, 01),
                    hora: ("23:00:00"),
                    usuario_id: 333,
                }
            ],

            comentarios: [
                {
                    id_comentario: 205960,
                    texto: "Pepito es la ostia",
                    fecha: new Date(2021, 02, 01),
                    usuario_id: 333,
                    reacciones: [
                        {
                            reaccion_id: 40405,
                            like_dislike: "dislike",
                            fecha: new Date(2021, 04, 01),
                            hora: ("23:30:00"),
                            usuario_id: 444
                        }
                    ]
                },
                {
                    id_comentario: 205959,
                    texto: "Vaya mierda de video del Pepito este",
                    fecha: new Date(2021, 04, 01),
                    usuario_id: 444,
                    reacciones: [
                        {
                            reaccion_id: 40403,
                            like_dislike: "dislike",
                            fecha: new Date(2021, 04, 01),
                            hora: ("23:30:00"),
                            usuario_id: 333
                        }
                    ]
                }
            ]
        }
    ]
)


db.usuarios.insertMany(
    [
        {
            id_usuario: 333,
            email: "pepitofollower@gmail.com",
            contasena: "sdfkslks",
            nombre: "Pepita",
            nacimiento: new Date(1990, 01, 01),
            sexo: "no binario",
            pais: "Portugal",
            codigo_postal: "33333",
            playlists: [
                {
                    id_playlist: 99393,
                    nombre: "Pepito Greatest Hits",
                    fecha: new Date(2022, 01, 01),
                    privacidad: "publico",
                    videos_id: [
                        1, 3, 4, 5
                    ]
                }
            ]
        },
        {
            id_usuario: 444,
            email: "pepitohater@gmail.com",
            contasena: "sdfkslks",
            nombre: "Pepiño",
            nacimiento: new Date(1990, 01, 01),
            sexo: "no binario",
            pais: "Portugal",
            codigo_postal: "33333",
            playlists: []
        }
    ]
)



// =========================================================================== SPOTIFY

db.dropDatabase();
db = db.getSiblingDB('spotify');

db.usuarios.drop();
db.musica.drop();

db.usuarios.insertOne(
    [
        {
            id_usuario: 29393,
            email: "pepito@gmail.com",
            contrasena: "032029sldkf",
            nombre: "Pepito",
            nacimiento: new Date(1990, 01, 01),
            sexo: "no binario",
            pais: "Portugal",
            codigo_postal: "34340",
            premium:
            {
                id_subscripcion: 2404,
                fecha_inicio: new Date(2020, 01, 01),
                fecha_renovacion: new Date(2021, 01, 01),
                metodo_pago: "tarjeta",
                pago:
                {
                    id_pago: 30230,
                    fecha: new Date(2020, 01, 02),
                    pago_total: 19.90
                },
                tarjeta:
                {
                    id_tarjeta: "ES01030303030303033",
                    caducidad: new Date(2023, 01, 01),
                    codigo_seguridad: 934
                }
            },
            albumes_favoritos: [
                { album_id: "393" },
                { album_id: "2320" },
                { algum_id: "29239" }
            ],

            canciones_favoritas: [
                { cancion_id: "395" },
                { cancion_id: "2325" },
                { cancion_id: "29232" }
            ],

            artistas_seguidos: [
                { artista_id: "20320" },
                { artista_id: "23402" },
                { artista_id: "23429" }
            ],

            playlists:
                [
                    {
                        playlist_id: "00234",
                        titulo: "Homeoffice Elektro Chillout",
                        num_canciones: 2,
                        canciones_compartidas: [
                            {
                                cancion_id: "3502",
                                timestamp: ISODate("2019-05-13T06:47:04Z")
                            },
                            {
                                cancion_id: "3504",
                                timestamp: ISODate("2019-05-13T06:47:04Z")
                            }
                        ]
                    },
                    {
                        playlist_id: "00111",
                        titulo: "Jazz Sesions 2022",
                        num_canciones: 2,
                        canciones_compartidas: [
                            {
                                cancion_id: "4512",
                                timestamp: ISODate("2019-05-13T06:47:04Z")
                            },
                            {
                                cancion_id: "9840",
                                timestamp: ISODate("2019-05-13T06:47:04Z")
                            }
                        ]
                    }
                ]
        }
    ]
)

db.artistas.insertOne(
    [
        {
            id_artista: "23020",
            nombre: "Hot Pepito",
            imagen: "http://olegif.com/bin/gifs/00/49/30.gif",
            artistas_relacionados: [
                {
                    artista_id: 2022,
                },
                {
                    artista_id: 2431,
                },
                {
                    artista_id: 5403,
                }
            ],
            albumes: [
                {
                    id_album: 20203,
                    titulo: "Pepito's Greatest Hits",
                    fecha: new Date(1999, 01, 01),
                    reproducciones: 30534020,
                    canciones:
                        [
                            {
                                id_cancion: 23030,
                                titulo: "Pepito dances alone",
                                duracion: 3.41,
                                reproducciones: 1030053
                            },
                            {
                                id_cancion: 93874,
                                titulo: "Pepito in love",
                                duracion: 2.41,
                                reproducciones: 506023
                            },
                            {
                                id_cancion: 29394,
                                titulo: "Where is my Pepito?",
                                duracion: 4.41,
                                reproducciones: 23030204,
                            }
                        ]
                }
            ]


        }
    ]
)
