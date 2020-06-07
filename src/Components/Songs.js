import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PlayAudio from './PlayAudio';
import Spinner from './Spinner';
import '../App.css';

function Songs({match}) {
  useEffect(() => {
    fetchSongs();
  }, []);

  const [songs, setSongs] = useState([]);
  const fetchSongs = () => { axios({
      "method":"GET",
      "url":"https://deezerdevs-deezer.p.rapidapi.com/search",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key":"68775f28e5msh55f213de9dea00dp133695jsn37f7f2a9bb22",
      "useQueryString":true
      },"params":{
      "q":`${match.params.name}`
      }
      })
      .then((response)=>{
        const songs = response.data.data;
        setSongs(songs);
      })
      .catch((error)=>{
        console.log(error)
      })
  };

  return (
    <Fragment>
      {songs.length === 0 ? (
          <Spinner />
      ) : (
        <Fragment>
          <div className="header">
            <Link to="/" className="btn btn-secondary">
              <i className="fas fa-chevron-left" /> Go Back
            </Link>
            <h1 className="item">
              <span>{songs[0].artist.name}</span>
            </h1>
            <img src={songs[0].artist.picture_big} className="item" />
          </div>
          <div className="song">
            {songs.map(song => (
                <div className="card" key={song.id}>
                  <img className="card-img-top" src={song.album.cover_medium}alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{song.title_short}</h5>
                    <p className="card-text">Durations: {(song.duration / 60).toFixed(2)} minutes</p>
                    <div className="special-div">
                      <PlayAudio audio={song.preview} />
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Songs;
