
const productos = [
    {
        id: 1,
        name: "Camiseta de algodón",
        image: "./src/assets/camiseta_de_algodon.png",
        description: "Camiseta de algodón de alta calidad, disponible en varios colores.",
        price: 19.99,
        category: "Ropa"
    },
    {
        id: 2,
        name: "Zapatos deportivos",
        image: "./src/assets/Zapatos_deportivos.png",
        description: "Zapatos deportivos con suela antideslizante y amortiguación.",
        price: 49.99,
        category: "Calzado"
    },
    {
        id: 3,
        name: "Taza térmica",
        image: "./src/assets/taza_termica.png",
        description: "Taza de cerámica con diseño personalizado.",
        price: 9.99,
        category: "Hogar"
    },
    {
        id: 4,
        name: "Libro de cocina",
        image: "./src/assets/libro_de_cocina.png",
        description: "Libro de cocina con recetas fáciles y saludables.",
        price: 14.99,
        category: "Libros"
    },
    {
        id: 5,
        name: "Mochila de viaje",
        image: "./src/assets/mochila_de_viaje.png",
        description: "Mochila de viaje con compartimentos y correas acolchadas.",
        price: 29.99,
        category: "Accesorios"
    },
    {
        id: 6,
        name: "Buzo con capucha",
        image: "./src/assets/buzo_con_capucha.png",
        description: "Sudadera cómoda y cálida, ideal para días fríos.",
        price: 34.99,
        category: "Ropa"
    },
    {
        id: 7,
        name: "Botas de invierno",
        image: "./src/assets/botas_de_invierno.png",
        description: "Botas de invierno impermeables y con aislamiento.",
        price: 79.99,
        category: "Calzado"
    },
    {
        id: 8,
        name: "Juego de tazas",
        image: "./src/assets/juego_de_tazas.png",
        description: "Juego de tazas de cerámica con diseños modernos.",
        price: 24.99,
        category: "Hogar"
    },
    {
        id: 9,
        name: "Novela de misterio",
        image: "./src/assets/novela_de_misterio.png",
        description: "Una emocionante novela de misterio que te mantendrá en vilo.",
        price: 12.99,
        category: "Libros"
    },
    {
        id: 10,
        name: "Funda para laptop",
        image: "./src/assets/funda_para_laptop.png",
        description: "Funda acolchada para laptop, disponible en varios tamaños.",
        price: 19.99,
        category: "Accesorios"
    },
    {
        id: 11,
        name: "Pantalones cortos",
        image: "./src/assets/pantalones_cortos.png",
        description: "Pantalones cortos cómodos, perfectos para el verano.",
        price: 24.99,
        category: "Ropa"
    },
    {
        id: 12,
        name: "Sandalias de playa",
        image: "./src/assets/sandalias_de_playa.png",
        description: "Sandalias ligeras y cómodas, ideales para la playa.",
        price: 15.99,
        category: "Calzado"
    },
    {
        id: 13,
        name: "Almohada de viaje",
        image: "./src/assets/almohada_de_viaje.png",
        description: "Almohada ergonómica para mayor comodidad durante tus viajes.",
        price: 12.99,
        category: "Hogar"
    },
    {
        id: 14,
        name: "Guía de jardinería",
        image: "./src/assets/guia_de_jardineria.png",
        description: "Guía completa para cultivar tus propias plantas.",
        price: 16.99,
        category: "Libros"
    },
    {
        id: 15,
        name: "Cargador portátil",
        image: "./src/assets/cargador_portatil.png",
        description: "Cargador portátil con alta capacidad para tus dispositivos.",
        price: 29.99,
        category: "Accesorios"
    }
];


export default function fetchData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        },500);
    })
}