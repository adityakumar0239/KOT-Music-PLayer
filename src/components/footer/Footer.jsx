import React, { useEffect, useState } from "react";
import img from "../assets/images/b3.jpg";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import { MdRepeat } from "react-icons/md";
import { TbArrowsShuffle } from "react-icons/tb";
import { HiVolumeUp } from "react-icons/hi";

export const Footer = ({
  isPlaying,
  setIsPlaying,
  currentAudio,
  setCurrentAudio,
}) => {
  const [currentTime, setCurrentTime] = useState("00:00");
  const [audioTime, setAudioTime] = useState("00:00");
  const [audioName, setAudioName] = useState("No Queue");
  useEffect(() => {
    const audio = document.getElementById(currentAudio);

    if (isPlaying) {
      const updateAudioTime = () => {
        setAudioName(audio.currentSrc.split("/").pop().replace(/%20/g, " ").replace(".mp3", ""))
        setCurrentTime(formatTime(audio.currentTime));
        setAudioTime(formatTime(audio.duration));
      };

      audio.addEventListener("timeupdate", updateAudioTime);

      return () => {
        audio.removeEventListener("timeupdate", updateAudioTime);
      };
    }
  },[currentAudio, decreaseTime, increaseTime]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };
  function muteAudio() {
    const audio = document.getElementById(currentAudio);
    if (audio.muted) {
      audio.muted = false;
    } else {
      audio.muted = true;
    }
  }

  function playAudio() {
    const audio = document.getElementById(currentAudio);
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  }
  function decreaseTime(){
    console.log("Arya")
    const audio = document.getElementById(currentAudio);
    console.log(audio.currentTime);
    if(audio.currentTime - 5 > 0){
      audio.currentTime -= 5;
    }else{
      audio.currentTime = 0;
    }
  }
  function increaseTime(){
    console.log("Arya")
    const audio = document.getElementById(currentAudio);
    console.log(audio.currentTime);
    if(audio.currentTime +5 < audio.duration){
      audio.currentTime += 5;
    }else{
      audio.currentTime = audio.duration;
    }
  }
  return (
    <>
      <footer className="bg-gray-700 fixed bottom-0 w-full text-white">
        <div className="flex justify-center md:justify-between items-center h-16">
          <div className="img md:flex items-center md:visible hidden">
            <img src={img} alt="img" className="w-16 h-16 object-cover mr-5" />
            <h3>{audioName}</h3>

          </div>
          <div className="flex items-center">
            
            <div className="backward-btn" onClick={decreaseTime} style={{ cursor: "pointer" }}>
            <BiSkipPrevious size={30} />
            </div>
            <div
              className="play-btn"
              onClick={playAudio}
              style={{ cursor: "pointer" }}
            >
              {
                isPlaying ? (<BsPauseCircleFill size={40} className="text-primary mx-5" />) : (<BsPlayCircleFill size={40} className="text-red-500 mx-5" />)
              }
            </div>
            <div className="forward-btn" onClick={increaseTime} style={{ cursor: "pointer" }}>
            <BiSkipNext size={30} />
            </div>
            
          </div>
          <div className="md:flex items-center mx-5 md:visible hidden">
            <p className="text-gray-400 text-sm">
              {currentTime} / {audioTime}
            </p>
            <div className="mute-btn" onClick={muteAudio}>
              <HiVolumeUp className="mx-8" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
