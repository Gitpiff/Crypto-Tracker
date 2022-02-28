import React from 'react'
import "./index.css"
import Nav from './Nav';
import YoutubeEmbed from './YoutubeCard';

function Learn() {


return (
    <div>
            <Nav />
            <br /><br /><br />
    <div className="youtube-card">
      <h1 className='youtube-card-h1'>Bitcoin: How Cryptocurrencies Work</h1>
      <YoutubeEmbed embedId="kubGCSj5y3k" />

    </div>
    <div className="youtube-card">
    <h1 className='youtube-card-h1'>How Does Bitcoin Work?</h1>
      <YoutubeEmbed embedId="L-Qhv8kLESY" />
    </div>
    </div>
  );
}

export default Learn
