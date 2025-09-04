import './Videoplay.css';
import video from '../../assets/college-video-6XtGR-D3.mp4';
import { useRef } from 'react';

const Videoplay=({playState,setPlayState})=>{
    const play=useRef(null);
    const closeplay=(e)=>{
        if(e.target==play.current){
          setPlayState(false);
        }
       
    }
    return(
        <>
    <div className={`video-play ${playState ? '' : 'hide'}`} ref={play} onClick={closeplay}>
            <video src= {video} autoPlay muted controls></video>
        </div>
        </>
    )
}
export default  Videoplay;