import React, { useRef } from 'react';
import styles from './MainVideoPlayer.module.css';

const MainVideoPlayer = () => {
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
                ref={videoRef}
                autoPlay
                muted
                loop
                controls
                controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                className={styles.video}
                onClick={handleVideoClick} // 添加点击事件
                onContextMenu={handleContextMenu}
                disablePictureInPicture  
            >
                <source
                    src="https://dpv.videocc.net/d309ba6b1c/4/d309ba6b1ca45781f605dca2431887b4_2.mp4?pid=1727313420263X1199484"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default MainVideoPlayer;
