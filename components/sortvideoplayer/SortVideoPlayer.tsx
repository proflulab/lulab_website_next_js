import React, { useRef } from 'react';
import styles from "./SortVideoPlayer.module.css";

interface SortVideoPlayerProps {
    isMobile: boolean;
}



const SortVideoPlayer: React.FC<SortVideoPlayerProps> = ({ isMobile }) => {

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleContextMenu = (event: React.MouseEvent<HTMLVideoElement>) => {
        event.preventDefault(); // 阻止右键菜单显示
    };

    // 切换播放和暂停状态
    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play(); // 播放视频
            } else {
                videoRef.current.pause(); // 暂停视频
            }
        }
    };
    return (
        <div className={styles.videoContainer}>
            <video
                width={isMobile ? "60%" : "260px"}
                ref={videoRef}
                height="auto"
                muted
                loop
                preload="metadata"
                controls
                controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                className={styles.video}
                onClick={handleVideoClick} // 添加点击事件
                onContextMenu={handleContextMenu}
                disablePictureInPicture
            >
                <source
                    src="https://dpv.videocc.net/d309ba6b1c/0/d309ba6b1cda2ecfc8934ec686bf78d0_1.mp4?pid=1727242537389X1944690"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default SortVideoPlayer;
