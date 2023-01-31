const API_KEY = '94e7350e65ba433baccbec406066c2bd'
const BASE_URL = 'https://newsapi.org/v2'

export function fetchNewsByKeyword(query){
    const url = `${BASE_URL}/everything?q=${query}&pageSize=20&apiKey=${API_KEY}`
    return fetch(url).then(res => res.json())
}

export function fetchNewsBySort(query, sortBy){
    const url = `${BASE_URL}/everything?q=${query}&pageSize=20&sortBy=${sortBy}&apiKey=${API_KEY}`
    return fetch(url).then(res => res.json())
}

export function fetchNewsByPageSize(query, pageSize){
    const url = `${BASE_URL}/everything?q=${query}&pageSize=${pageSize}&apiKey=${API_KEY}`
    return fetch(url).then(res => res.json())
}