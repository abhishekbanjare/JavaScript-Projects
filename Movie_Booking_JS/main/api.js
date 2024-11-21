export const database = [
    
    
    
    { name: 'The Ligend of Hanuman', imgUrl: 'https://w0.peakpx.com/wallpaper/549/42/HD-wallpaper-sneak-peek-the-legend-of-hanuman-on-disney-hotstar-thumbnail.jpg' },
    { name: 'SALAAR', imgUrl: 'https://cdn.cinematerial.com/p/297x/97r67qou/salaar-indian-movie-poster-md.jpg?v=1698004556' },
    { name: '21 Jump Street', imgUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLCqM8Ispa4waG8tNLPdy6rtiJFOEZUZxdzP-y_BQzfgo953Gb' },
    { name: 'GhAJINI', imgUrl: 'https://e0.pxfuel.com/wallpapers/334/571/desktop-wallpaper-ghajini-2008-thumbnail.jpg' },
    { name: 'GODHARAA', imgUrl: 'https://stat5.bollywoodhungama.in/wp-content/uploads/2023/12/Godhra.jpg'},
    { name: 'Cars 3', imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_cars3_19643_3ab8aca1.jpeg' },
    
    { name: 'DANGAL', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg' },
    { name: 'GANG OF WASSEPUR', imgUrl: 'https://www.tallengestore.com/cdn/shop/products/Gangs_Of_Wasseypur_-_Bollywood_Cult_Classic_Hindi_Movie_Poster_8a6323e6-0199-4d1e-9d8f-85a0b2369430.jpg?v=1570245960' },
    { name: 'LOVE LETTER', imgUrl: 'https://timesofindia.indiatimes.com/photo/92080395.cms' },
    { name: 'Cars 2', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Cars_2_Poster.jpg' },
    
    // { name: 'TERE NAAM', imgUrl: 'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/381217/4672124/apirnj9tc__30852.1625668454.jpg?c=2' },
    // { name: 'SHEHZADA', imgUrl: 'https://i.pinimg.com/originals/f8/64/c4/f864c455b9224b4a461969c3d773bc5e.jpg' },
    // { name: 'GADAR', imgUrl: 'https://www.hindustantimes.com/ht-img/img/2023/07/26/900x1600/gadar_2_upcoming_1690363465208_1690363472660.jpg' },
    // { name: 'JAWAN', imgUrl: 'https://wallpapercave.com/dwp1x/wp11851029.jpg' },
    // { name: 'OMG', imgUrl: 'https://filmfare.wwmindia.com/content/2023/sep/trendingbollywoodmovies21693894371.jpg' },
    // { name: 'RANGOBATI', imgUrl: 'https://timesofindia.indiatimes.com/photo/71075059.cms' },
    // { name: 'Boos', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJuZdldF7M9YhGffzRxLPJT8rtlkGIu-nrIVa9krg9DQe3l7skgbyCYxDo3WV7ajuwExs&usqp=CAU' },
    // { name: 'Desi', imgUrl: 'https://drop.ndtv.com/albums/ENTERTAINMENT/bollywood-posters-2011/desi-boyz.jpg' },
    // { name: 'Brahmastra', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwgqMGqvEV28E52xk1BFD_-a4aeFKt4IPBd1v1zM8ZN0WUGD_TTPjLqeXmdKSS8nrpOI&usqp=CAU' },
    // { name: 'Bhoot Police', imgUrl: 'https://e1.pxfuel.com/desktop-wallpaper/322/698/desktop-wallpaper-upcoming-hindi-film-movie-posters-bollywood-2022-movie.jpg' },
    // { name: 'Cars', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg' },
    // { name: 'GUIYAAN', imgUrl: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/guiyan-et00378098-1701672194.jpg' },
    // { name: 'Pathan', imgUrl: 'https://bollywoodmovieposters.com/wp-content/uploads/2023/01/pathan-poster-shahrukh-khan-movie-srk.jpg' },
    // { name: 'Kabir Singh', imgUrl: 'https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg' }
]
export const availibility = {
    'The Ligend of Hanuman': [1, 2, 5, 8, 9,19,22,20,11],
    'SALAAR': [1, 2, 3, 5, 6,10,11,12,13,14,15,16,17, 24],
    '21 Jump Street': [1, 2, 3, 4, 5, 6,15,16,17,18,19,20,21,22,23,24],
    'GhAJINI': [4, 6, 8,10,11,12,13,14,15,16],
    'GODHARAA': [3, 5, 7, 9,20,21,12,13,19,24],
    'Cars 3': [1,2,3,7,8,9,13,14,19,20,21]
}
const fetchMovieList = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database)
        }, 500)
    })
}

const fetchMovieAvailability = async (movieName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const m in availibility) {
                if (m === movieName) resolve(availibility[m])
            }
            resolve([])
        }, 500)
    })
}

export { fetchMovieList, fetchMovieAvailability }