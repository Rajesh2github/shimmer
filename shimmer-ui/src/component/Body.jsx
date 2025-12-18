import React, { useState, useEffect, useRef } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

function Body() {
    const [meme, setMeme] = useState([]);
    const [isLoading, setLoading] = useState(false);
     const isFetching = useRef(false);

    const handleScroll = () => {

        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
            fetchMeme();
        }
    }

    const fetchMeme = async () => {
        if(isFetching.current) return;
        isFetching.current = true;
        setLoading(true);
        try{
        const res = await fetch('https://meme-api.com/gimme/20');
        const memeData = await res.json();
        setMeme((meme) => [...meme, ...memeData.memes]);
        }catch(e){
            console.log(e);
        }finally{
            setLoading(false);
            isFetching.current = false;
        }
        
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        fetchMeme();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (
        <>
            {meme?.map((item, i) =>
                <div key={i}>
                    <MemeCard
                        title={item.title}
                        url={item.url}
                        author={item.author}
                    />
                </div>)}
            {isLoading && <Shimmer />}
        </>
    )
}

export default Body