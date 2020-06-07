import React, {Fragment} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import '../App.css';

function PlayAudio(props) {
    

    return (
            <Fragment>
                <ReactAudioPlayer
                    className="btn btn-light"
                    src={props.audio}
                    loop={true}
                    controls
                />
            </Fragment>
        )
}

export default PlayAudio;
