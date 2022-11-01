import React from 'react';
import Gallery from '../../components/Gallery/Gallery';

const Videos = () => {
  return (
    <Gallery>
      <iframe
        src="https://www.youtube.com/embed/GjKtseWkcAQ"
        title="Hartyán Donát Üzenete az r/FarkasAdriaFanClub Irányába"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/uP2hQgEvyEk"
        title="Adrian Wolfgang Eating Shit"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/3Lns2m4fOps"
        title="Adrian Wolfgang Beszéde, Brutális Bukása Előtt"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/jAVIRpa6Z8M"
        title="Adrian Wolfgang Vallomása, Brutális Bukása Után"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Gallery>
  );
};

export default Videos;
