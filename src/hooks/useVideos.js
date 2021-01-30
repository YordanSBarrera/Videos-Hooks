import { useState, useEffect } from 'react';
import youtube from '../apis/youtube'

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        Search(defaultSearchTerm);
    }, []);

    const Search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            },
        });

        setVideos(response.data.items);
    };

    return [videos, Search];
    //==i can use {videos,Search};
}

export default useVideos;