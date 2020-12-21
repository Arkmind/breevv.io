import React from 'react'

import './style.css'

import Banner from '../../../components/Banner/Banner'

import TMDbExample from '../../../test/TMDb.example'

interface HighlightProps {
    direction?: string,
    number?: number | string,
}

function Highlight({ direction = 'column', number = 4 }: HighlightProps) {
    const banners = [];

    for (let i = 0; i < +number; i++) {
        banners.push({
            direction,
            tmdb: TMDbExample[Math.floor(Math.random() * TMDbExample.length)],
        })
    }

    return (
        <div className="highlight">
            {banners.map(e => (
                <Banner direction={e.direction} tmdb={e.tmdb}></Banner>
            ))}
        </div>
    );
}

export default Highlight;
