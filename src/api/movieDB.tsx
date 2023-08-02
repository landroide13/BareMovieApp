import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '8f1c534f5d7b0440bed6bf910f04ded0',
        language: 'es-ES'
    }
})


export default movieDB;






