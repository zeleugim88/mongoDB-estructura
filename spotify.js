// =========================================================================== SPOTIFY

db.dropDatabase();

/* db = db.getSiblingDB('spotify');
db.usuarios.drop();
db.musica.drop(); */


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
