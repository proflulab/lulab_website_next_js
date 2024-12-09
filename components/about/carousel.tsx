"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

interface CarouselItem {
    type: "image" | "video";
    src: string;
    alt?: string;
}

const carouselItems: CarouselItem[] = [
    {
        type: "video",
        src: "/videos/about/promo.mp4"
    },
    {
        type: "image",
        src: "/images/about/slide1.jpg",
        alt: "Lu Lab Overview"
    },
];

export function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const currentItem = carouselItems[currentIndex];

    // 处理视频播放
    useEffect(() => {
        if (currentItem.type === "video" && videoRef.current) {
            videoRef.current.play().catch(console.log);
        }
    }, [currentIndex, currentItem.type]);

    // 统一处理幻灯片切换
    const handleSlideChange = (newIndex: number) => {
        if (videoRef.current && currentItem.type === "video") {
            videoRef.current.pause();
        }
        setCurrentIndex((newIndex + carouselItems.length) % carouselItems.length);
    };

    // 处理静音切换
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="relative w-full h-[30vh] md:h-[calc(100vh-64px)] overflow-hidden">
            {/* 导航按钮 - 在移动端调整大小和位置 */}
            <div className="absolute inset-0 flex items-center justify-between p-2 md:p-4 z-50">
                <Button
                    isIconOnly
                    variant="flat"
                    className="w-8 h-8 md:w-10 md:h-10 bg-white/30 backdrop-blur-md hover:bg-white/50"
                    onClick={() => handleSlideChange(currentIndex - 1)}
                >
                    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                </Button>
                <Button
                    isIconOnly
                    variant="flat"
                    className="w-8 h-8 md:w-10 md:h-10 bg-white/30 backdrop-blur-md hover:bg-white/50"
                    onClick={() => handleSlideChange(currentIndex + 1)}
                >
                    <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                </Button>
            </div>

            {/* 音量控制按钮 - 调整移动端大小 */}
            {currentItem.type === "video" && (
                <Button
                    isIconOnly
                    variant="flat"
                    className="absolute bottom-4 right-4 z-[60] w-8 h-8 md:w-10 md:h-10 bg-white/30 backdrop-blur-md hover:bg-white/50"
                    onClick={toggleMute}
                >
                    {isMuted ?
                        <VolumeX className="w-4 h-4 md:w-6 md:h-6" /> :
                        <Volume2 className="w-4 h-4 md:w-6 md:h-6" />
                    }
                </Button>
            )}

            {/* 轮播内容容器 */}
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {carouselItems.map((item, index) => (
                    <div key={index} className="min-w-full h-full relative">
                        {item.type === "image" ? (
                            <Image
                                src={item.src}
                                alt={item.alt || ""}
                                fill
                                className="object-cover"
                                priority
                                sizes="100vw"
                            />
                        ) : (
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                autoPlay
                                muted={isMuted}
                                loop
                                playsInline
                            >
                                <source src={item.src} type="video/mp4" />
                            </video>
                        )}
                    </div>
                ))}
            </div>

            {/* 指示器 - 调整移动端大小和间距 */}
            <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 md:gap-2 z-50">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"
                            } hover:bg-white`}
                        onClick={() => handleSlideChange(index)}
                    />
                ))}
            </div>
        </div>
    );
} 