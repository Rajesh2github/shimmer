import React from 'react'

function MemeCard({title, url, author}) {
    return (
        <div style={{padding: 5, margin: 10,  border: '1px solid black'}}>
            
            <img
                src={url}
                alt={title}
                width={200}
                height={200}
            />
            <div>{author}</div>
        </div>
    )
}

export default MemeCard