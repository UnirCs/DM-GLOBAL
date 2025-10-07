// Datos de películas para diferentes ciudades
export const moviesDataBarcelona = [
  {
    id: 1,
    title: "Avatar: El camino del agua",
    genre: "Ciencia ficción",
    duration: "192 min",
    rating: "7.8/10",
    image: "https://via.placeholder.com/300x400/0066cc/ffffff?text=Avatar+2",
    showtimes: ["16:00", "19:30", "22:45"],
    synopsis: "Jake Sully vive con su nueva familia formada en el planeta de Pandora. Una vez que una amenaza familiar regresa para terminar lo que se empezó anteriormente, Jake debe trabajar con Neytiri y el ejército de la raza Na'vi para proteger su planeta."
  },
  {
    id: 2,
    title: "Black Panther: Wakanda Forever",
    genre: "Acción",
    duration: "161 min",
    rating: "7.2/10",
    image: "https://via.placeholder.com/300x400/8B4513/ffffff?text=Black+Panther+2",
    showtimes: ["15:30", "18:15", "21:00"],
    synopsis: "La reina Ramonda, Shuri, M'Baku, Okoye y las Dora Milaje luchan para proteger su nación de las potencias mundiales que intervienen tras la muerte del rey T'Challa."
  },
  {
    id: 3,
    title: "Top Gun: Maverick",
    genre: "Acción",
    duration: "130 min",
    rating: "8.5/10",
    image: "https://via.placeholder.com/300x400/FF6347/ffffff?text=Top+Gun",
    showtimes: ["17:00", "20:00", "23:00"],
    synopsis: "Después de más de 30 años de servicio como uno de los mejores aviadores de la Armada, Pete 'Maverick' Mitchell está donde pertenece, empujando los límites como un valiente piloto de prueba."
  }
];

export const moviesDataMadrid = [
  {
    id: 4,
    title: "Spiderman: No Way Home",
    genre: "Acción",
    duration: "148 min",
    rating: "8.4/10",
    image: "https://via.placeholder.com/300x400/FF0000/ffffff?text=Spiderman",
    showtimes: ["16:30", "19:45", "22:30"],
    synopsis: "Peter Parker busca ayuda del Doctor Strange para que el mundo olvide que él es Spiderman, pero el hechizo sale mal y villanos de otros universos comienzan a aparecer."
  },
  {
    id: 5,
    title: "Doctor Strange 2",
    genre: "Fantasía",
    duration: "126 min",
    rating: "7.0/10",
    image: "https://via.placeholder.com/300x400/800080/ffffff?text=Dr+Strange",
    showtimes: ["15:00", "18:00", "21:30"],
    synopsis: "El Doctor Strange se adentra en el peligroso Multiverso Alternativo con la ayuda de nuevos aliados místicos y otros ya conocidos para enfrentarse a un nuevo y misterioso adversario."
  },
  {
    id: 6,
    title: "Thor: Love and Thunder",
    genre: "Acción",
    duration: "119 min",
    rating: "6.8/10",
    image: "https://via.placeholder.com/300x400/FFD700/ffffff?text=Thor",
    showtimes: ["16:45", "19:15", "22:00"],
    synopsis: "Thor se embarca en un viaje como nunca antes había hecho: una búsqueda de la paz interior. Pero su retiro se ve interrumpido por un asesino galáctico conocido como Gorr el Carnicero de Dioses."
  }
];

export const moviesDataValencia = [
  {
    id: 7,
    title: "Jurassic World: Dominion",
    genre: "Aventura",
    duration: "147 min",
    rating: "7.1/10",
    image: "https://via.placeholder.com/300x400/228B22/ffffff?text=Jurassic",
    showtimes: ["15:45", "18:30", "21:45"],
    synopsis: "Cuatro años después de la destrucción de Isla Nublar, los dinosaurios ahora viven y cazan junto a los humanos en todo el mundo. Este frágil equilibrio remodelará el futuro."
  },
  {
    id: 8,
    title: "Minions: The Rise of Gru",
    genre: "Animación",
    duration: "87 min",
    rating: "7.3/10",
    image: "https://via.placeholder.com/300x400/FFFF00/000000?text=Minions",
    showtimes: ["16:00", "18:00", "20:00"],
    synopsis: "En los años 70, Gru crece siendo un gran fan de un grupo de supervillanos conocido como Vicious 6. Cuando los Vicious 6 despiden a su líder, Gru se presenta para unirse a ellos."
  },
  {
    id: 9,
    title: "Lightyear",
    genre: "Animación",
    duration: "105 min",
    rating: "7.2/10",
    image: "https://via.placeholder.com/300x400/87CEEB/ffffff?text=Lightyear",
    showtimes: ["15:30", "17:30", "19:30"],
    synopsis: "La historia del origen definitiva de Buzz Lightyear, el héroe que inspiró el juguete, siguiendo al legendario Space Ranger después de que él y su comandante queden varados en un planeta hostil."
  }
];

export const citiesData = {
  barcelona: {
    name: "Barcelona",
    movies: moviesDataBarcelona
  },
  madrid: {
    name: "Madrid",
    movies: moviesDataMadrid
  },
  valencia: {
    name: "Valencia",
    movies: moviesDataValencia
  }
};
