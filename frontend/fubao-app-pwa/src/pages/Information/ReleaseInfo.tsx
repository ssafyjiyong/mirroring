import React, { useEffect, useState } from 'react';
import { releaseFishApi } from "../../store/api";

// 아니 타입 지정 안되면 다 ^^^^하고 오류뜨네ㅠㅠㅠ
type ReleaseInfo = {
  id: number;
  name_kor: string;
  name_eng: string;
  standard: number | null;
};

const ReleaseInfoPage = () => {
  // https://www.youtube.com/watch?v=8GZTUOAk5i0
  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfo[]>([]); // 이곳에 API로부터 받아온 정보를 저장 (type지정해둔것도 사용!)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token'); // token 가져와서
        const apiResponse = await releaseFishApi(token); // releaseFishApi 호출할 때 토큰 주기
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
      <div>
        {releaseInfo.map((info) => (
          <div key={info.id}>
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