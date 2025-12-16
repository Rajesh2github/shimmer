import React, { useState, useEffect, use } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';
function Body() {
    const [meme, setMeme] = useState(null);
    const fetchMeme = async () => {
        const res = await fetch('https://meme-api.com/gimme/20');
        const memeData = await res.json();
        setMeme(memeData.memes);
    }

    useEffect(() => {
        fetchMeme();
    }, [])
    return (
        !meme ? <Shimmer/> :  meme?.map((item, i) =>
            <div>
                <MemeCard
                    title={item.title}
                    url={item.url}
                    author={item.author}
                />
            </div>
        )
    )
}

export default Body