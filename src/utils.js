import api from './api';

//SEARCH STREAMS WITH MAXIMUN NUM OF OBJECTS TO RETURN BY VIEWERS
export function fetchStreams(query, limit){
    return api.get(`search/streams?query=${query}&limit=${limit}`);
}

export function getStream(channedId){
    return api.get(`streams/${channedId}`);
}