import React from 'react'

const title = ["낚시 에티켓"];
const subTitle = ["오늘 처음이더라도 꼭 알아야할 에티켓"];
const content = [
  "낚시를 할 때는 환경과 타인을 배려하는 마음이 필요해요. 잡은 물고기는 기준에 따라 방생하고, 남은 쓰레기는 꼭 치워요. 또한, 낚시터에서 큰 소리를 내거나 남을 방해하는 행동은 안돼요. 에티켓 지키고, 대어도 낚길 바라요!",
];

const EtiquettePage = () => {
  return (
    <div style={{ padding: "1rem" }}>      
    {title}
    {subTitle}
    {content}
    </div>
  )
}

export default EtiquettePage