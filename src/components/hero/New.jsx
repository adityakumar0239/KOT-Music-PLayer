import React from "react"
import { news } from "../assets/data/data"
import { Card_lg } from "../common/Card_lg"
import { Title } from "../common/Title"

export const New = ({isPlaying, setIsPlaying, currentAudio, setCurrentAudio}) => {
  const handlePlay = (id) => {
    const audio = document.getElementById(id);
    if (isPlaying) {
      const currentAudioPlaying = document.getElementById(currentAudio);
      if (currentAudioPlaying === audio) {
        currentAudioPlaying.pause();
        setIsPlaying(false);
        return;
      }
      currentAudioPlaying.pause();
      currentAudioPlaying.currentTime = 0;
      audio.play();
      setIsPlaying(true);
      setCurrentAudio(id);
    }
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
      setCurrentAudio(id);
    }
  };
  return (
    <>
      <section className='treading hero'>
        <Title title='New' />
        <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1  gap-5'>
          {news.map((item, i) => (
            <div className='box card hero' key={i} onClick={()=>handlePlay(`audio-new-${i}`)}>
              <Card_lg cover={item.cover} name={item.name} tag={item.tag} music={item.music} id={`audio-new-${i}`}/>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
