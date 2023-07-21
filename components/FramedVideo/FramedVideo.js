
import React from 'react'


const FramedVideo = (props)=> {
    const {} = props

    return (
        <div className={"framed_video_wrapper"}>
            <img className={"frame_iphone"} src="/iphone.png" alt="frame"/>
            <video preload="auto" autoPlay muted loop>
                <source src="https://www.oneclickdrive.com/application/views/images/about-video.mp4?clr=20.1"
                        type="video/mp4"/>
            </video>
        </div>
    )
}


export  default FramedVideo