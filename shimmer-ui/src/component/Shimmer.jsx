import React from 'react'

function Shimmer() {
    return (
        Array(20).fill('').map((i, index) =>
            <div key={index+"r"} style={{ padding: 5, margin: 10, border: '1px solid black' }}>
                <div key={index} style={{ width: 200, height: 200, background: 'gray' }}></div>
            </div>)
    )
}

export default Shimmer