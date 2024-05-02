import React from 'react'
import { BsPlayCircle, BsThreeDots } from "react-icons/bs"

const PlayComp = ({i, item, AiFillPlayCircle, id}) => {
   
     
  return (
    <>
    <div className='overlay icon absolute top-1/2 left-[40%] text-white aaaaa'>
        <audio id={id} src={item.music}></audio>
                <BsPlayCircle size={45} className='show' />
                <AiFillPlayCircle size={50} className='hide absolute -top-1 -left-1' />
              </div>
    
    </>
  )
}

export default PlayComp
