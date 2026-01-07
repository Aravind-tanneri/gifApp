import {useState,useEffect} from 'react';
import axios from 'axios';

//api key
const API_KEY=import.meta.env.VITE_GIPHY_API_KEY;

//base url
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif= (initialTag) => {

    const [gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);

    async function fetchData(tag){
        setLoading(true);

        const {data} = await axios.get(tag? `${url}&tag=${tag}`:`${url}&tag=tom and jerry`);

        //extract
        const imageSource =data.data.images.downsized_large.url;

        setGif(imageSource); //save img
        setLoading(false);
    }
    useEffect(()=>{
        fetchData(initialTag);
    },[])

    return{gif,loading,fetchData};
}

export default useGif;