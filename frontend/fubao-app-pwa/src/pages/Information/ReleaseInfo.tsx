import React, { useEffect, useState } from 'react'
import { releaseFishApi } from "../../store/api";

import axios from 'axios';

const ReleaseInfoPage = () => {
  const [releaseInfo, setReleaseInfo] = useState<any[]>([]); // 이곳에 API로부터 받아온 정보를 저장

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await releaseFishApi(); // releaseFishApi 호출
        setReleaseInfo(apiResponse);
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
      }
    };

    fetchData(); // useEffect가 실행될 때 API 호출
  }, []);

  return (
    <>
      <div style={{ padding: '1rem' }}>방생기준 표</div>
      <div>{releaseInfo}</div>
      <div>
        {releaseInfo.map((info) => (
          <div key={info.id}>
            <div>ID: {info.id}</div>
            <div>한국어 이름: {info.name_kor}</div>
            <div>영어 이름: {info.name_eng}</div>
            <div>방생기준: {info.standard ? info.standard : "잡아도 잡아도 씨가 마르지 않음"}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ReleaseInfoPage