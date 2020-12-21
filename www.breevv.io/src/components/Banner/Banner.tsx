import React from 'react'

import { TMDbResponse } from '../../declarations/TMDb.declaration'

import getColor from '../../scripts/getColor'

import './style.css'

interface BannerProps {
    tmdb?: TMDbResponse,
    viewed?: number,
    direction?: string,
}

function Banner({ tmdb, viewed = 0, direction = 'column' }: BannerProps) {
    const poster = tmdb?.poster_path

    const backStyle = { backgroundImage: `url(https://image.tmdb.org/t/p/original${poster})` }

    const note = tmdb?.vote_average ? tmdb.vote_average * 10 : 0

    const color = getColor(note)

    const percent = { width: `${viewed}%` };

    const classes = ['banner'];

    if (direction === 'row') classes.push('row');

    return (
        <div className={classes.join(' ')}>
            <div className="progress" style={percent}></div>
            <div className="backdrop" style={backStyle}></div>
            <div className="info">
                <h2>{tmdb?.title}</h2>
                <span style={{color}}>Recommandé à {note}%</span>
                {
                    direction === 'column' && (
                        <div className="overview">
                            <p>{tmdb?.overview}</p>
                        </div>
                    )
                }
                
            </div>
        </div>
    );
}

export default Banner;
