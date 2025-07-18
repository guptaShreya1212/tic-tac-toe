import React from 'react'
import Icon from '../icon/Icon'

export default function Card({player,onPlay,index}) {
  console.log("palyer",onPlay)
   let icon=<Icon/>
   if(player == "X"){
    icon=<Icon name={"cross"}/>
   }else if(player == "O"){
    icon=<Icon name={"circle"}/>
   }


  return (
    <div className='flex justify-center items-center rounded bg-[var(--yellow)] h-[120px] w-[120px]' onClick={()=>onPlay(index)}>
   {icon}
    </div>
  )
}
