import React, { useRef } from 'react';
import styles from "./SortVideoPlayer.module.css";

interface SortVideoPlayerProps {
    isMobile: boolean;
}

const SortVideoPlayer: React.FC<SortVideoPlayerProps> = ({ isMobile }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const imageUrl = "/images/sort_video_img.jpg";
    const videoUrl = "https://dpv.videocc.net/d309ba6b1c/0/d309ba6b1cda2ecfc8934ec686bf78d0_1.mp4?pid=1727242537389X1944690";
    const handleContextMenu = (event: React.MouseEvent<HTMLVideoElement>) => {
        event.preventDefault(); // 阻止右键菜单显示
    };

    return (
        <div className={styles.videoContainer}>
            {isMobile ? (
                <video
                    ref={videoRef}
                    width="100%"
                    height="auto"
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
                    width="260px"
                    height="auto"
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

export default SortVideoPlayer;
