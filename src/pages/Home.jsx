import React, { useEffect, useState } from "react"
import { Hero, LayoutSidebar, New, Recommand, Recommended, Treading } from "../router"
export const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState("");
  return (
    <>
      <Hero isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentAudio={currentAudio} setCurrentAudio={setCurrentAudio}/>
      <LayoutSidebar isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentAudio={currentAudio} setCurrentAudio={setCurrentAudio}>

        <Treading isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentAudio={currentAudio} setCurrentAudio={setCurrentAudio}/>
        <New isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentAudio={currentAudio} setCurrentAudio={setCurrentAudio}/>
        <Recommand isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentAudio={currentAudio} setCurrentAudio={setCurrentAudio}/>
      </LayoutSidebar>
    </>
  )
}
