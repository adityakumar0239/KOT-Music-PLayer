import React from "react";
import { news, treading } from "../assets/data/data";
import { Card_lg } from "../common/Card_lg";
import { Title } from "../common/Title";
import Slider from "react-slick";

export const Treading = ({
  isPlaying,
  setIsPlaying,
  currentAudio,
  setCurrentAudio,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePlay = (id) => {
    const audio = document.getElementById(id);
    console.log(audio);
    if (isPlaying) {
      console.log("Arya");
      const currentAudioPlaying = document.getElementById(currentAudio);
      console.log(currentAudioPlaying);
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
      console.log("Arya3");
      audio.play();
      setIsPlaying(true);
      setCurrentAudio(id);
    }
  };
  return (
    <section className="treading hero">
      <Title title="Trending" />
      <Slider {...settings}>
        {treading.map((item, i) => (
          <div className="box card hero m-5" key={i} onClick={()=>handlePlay(`audio-trending-${i}`)}>
            <div className="mr-5">
              <Card_lg
              id={`audio-trending-${i}`}
                cover={item.cover}
                name={item.name}
                tag={item.tag}
                music={item.music}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
