// =========================================================================== YOUTUBE

db.dropDatabase();

/* db = db.getSiblingDB('youtube');
db.videos.drop();
db.usuarios.drop(); */

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
       fecha: new Date(2021,01,01),
       hora: ("22:00:00"),
       usuario_id: {_id: 834}
   
       etiquetas:[
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
           fecha: new Date(2021,02,01),
           hora: ("21:00:00"),
           usuario_id: 444,
         },
          {
           like_dislike_id: 2032,
           like_dislike: "dislike",
           fecha: new Date(2021,04,01),
           hora: ("23:00:00"),
           usuario_id: 333,
         }
       ],
   
       comentarios: [
         {
           id_comentario: 205960,
           texto: "Pepito es la ostia",
           fecha: new Date(2021,02,01),
           usuario_id: 333,
         reacciones: [
             {
               reaccion_id: 40405,
               like_dislike: "dislike",
               fecha: new Date(2021,04,01),
               hora: ("23:30:00"),
               usuario_id: 444
             }
           ]
         },
         {
           id_comentario: 205959,
           texto: "Vaya mierda de video del Pepito este",
           fecha: new Date(2021,04,01),
           usuario_id: 444,
           reacciones: [
             {
               reaccion_id: 40403,
               like_dislike: "dislike",
               fecha: new Date(2021,04,01),
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
         nacimiento: new Date (1990,01,01),
         sexo: "no binario",
         pais: "Portugal",
         codigo_postal: "33333",
         playlists: [
           {
             id_playlist: 99393,
             nombre: "Pepito Greatest Hits",
             fecha: new Date (2022,01,01),
             privacidad: "publico",
             videos_id: [
                 1, 3, 4 , 5
             ]
           }
         ]
       },
       {
         id_usuario: 444,
         email: "pepitohater@gmail.com",
         contasena: "sdfkslks",
         nombre: "Pepi??o",
         nacimiento: new Date (1990,01,01),
         sexo: "no binario",
         pais: "Portugal",
         codigo_postal: "33333",
         playlists: []
       }
     ]
   )