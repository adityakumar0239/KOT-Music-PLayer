import React from "react";
import { recommand, treading } from "../assets/data/data";
import { Card_sm } from "../common/Card_sm";
import { Title } from "../common/Title";

export const Recommand = ({isPlaying, setIsPlaying, currentAudio, setCurrentAudio}) => {

  return (
    <>
      <section className="treading hero mt-7 pb-32">
        <Title title=" Recommended for you" />
        <div className="grid grid-cols-2 gap-5">
          {recommand.map((item, i) => (
            <Card_sm
              key={`audio-recommend-${i}`}
              id={`audio-recommend-${i}`}
              cover={item.cover}
              name={item.name}
              tag={item.tag}
              music={item.music}
              i={i}
              isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentAudio={currentAudio} setCurrentAudio={setCurrentAudio}
            />
          ))}
        </div>
      </section>
    </>
  );
};
