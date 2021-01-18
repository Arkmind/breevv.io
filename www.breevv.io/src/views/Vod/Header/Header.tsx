import React from 'react';

import './style.css'

import TMDbExample from '../../../test/TMDb.example'
import { TMDbResponse } from '../../../declarations/TMDb.declaration';

import Button from '../../../components/Button/Button'

function VodHeader() {
   const tmdb: TMDbResponse = TMDbExample[Math.floor(Math.random() * TMDbExample.length)]

   const backdrop = tmdb?.backdrop_path

   console.log(tmdb.video);

   const backStyle = { backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})` }

   const logos = tmdb.production_companies
      .filter(e => e.logo_path)

   return (
      <header>
         <div className="backdrop" style={backStyle}></div>
         <div className="bottom-gradient"></div>
         <div className="info">
            <h1>{tmdb.title}</h1>
            <h3>Sorti le {new Date(tmdb.release_date).toLocaleDateString()}</h3>
            <h2>{tmdb.overview}</h2>
            <h3>{tmdb.genres.map(e => e.name).join(', ')}</h3>
            <div className="companies">
               {logos.map(e => (
                  <img src={`https://image.tmdb.org/t/p/original${e.logo_path}`} alt={e.name}></img>
               ))}
            </div>
            <Button className={['my-4']}>Regarder</Button>
         </div>
      </header>
   );
}

export default VodHeader;
