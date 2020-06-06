import React, {Fragment, useEffect} from 'react';
import '../App.css';

function PlayAudio(props) {
    const audioTune = new Audio(props.audio);
    console.log(audioTune);
    

    useEffect(() => {
        audioTune.load();
    }, []);

    const playSound = () => {
        audioTune.play();
    }

    const pauseSound = () => {
        audioTune.pause();
    }

    return (
            <Fragment>
                <input  className="btn btn-outline-warning" type="button" value="Play" onClick={playSound} />
                <input className="btn btn-warning" type="button" value="Pause" onClick={pauseSound} />
            </Fragment>
        )
}

export default PlayAudio;
