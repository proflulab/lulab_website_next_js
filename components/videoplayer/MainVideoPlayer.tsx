import React, { useRef } from 'react';
import styles from './MainVideoPlayer.module.css';

interface MainVideoPlayerProps {
    isMobile: boolean;
}
const MainVideoPlayer: React.FC<MainVideoPlayerProps> = ({ isMobile }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const imageUrl = "/images/main_video_img.jpg";
    const videoUrl = "https://dpv.videocc.net/d309ba6b1c/4/d309ba6b1ca45781f605dca2431887b4_2.mp4?pid=1727313420263X1199484";

    const handleContextMenu = (event: React.MouseEvent<HTMLVideoElement>) => {
        event.preventDefault(); // 阻止右键菜单显示（用于PC端）
    };

    return (
        <div className={styles.videoContainer}>
            {isMobile ? (
                <video
                    ref={videoRef}
                    preload="auto"
                    poster={imageUrl}
                    playsInline
                    webkit-playsInline
                    x5-video-player-type="h5"
                    x5-playsinline
                    x-webkit-airplay="allow"
                    muted
                    controls
                    className={styles.video}
                    disablePictureInPicture
                >
                    <source
                        src={videoUrl}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    controls
                    controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                    className={styles.video}
                    onContextMenu={handleContextMenu}
                    disablePictureInPicture
                >
                    <source
                        src={videoUrl}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );

};

export default MainVideoPlayer;
