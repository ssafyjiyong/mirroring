import React, { useEffect, useState } from 'react';
import { prohibitFishApi } from "../../store/api";

type ProhibitInfo = {
  id: number;
  name_kor: string;
  name_eng: string;
  standard_start: Date | null;
  standard_end: Date | null;
};

const ProhibitionInfoPage = () => {
  const [prohibitInfo, setProhibitInfo] = useState<ProhibitInfo[]>([]); // 이곳에 API로부터 받아온 정보를 저장 (type지정해둔것도 사용!)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token'); // token 가져와서
        const apiResponse = await prohibitFishApi(token); // prohibitFishApi 호출할 때 토큰 주기
        setProhibitInfo(apiResponse);
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
      }
    };

    fetchData(); // useEffect가 실행될 때 API 호출
  }, []);
  return (
    <>
      <div style={{ padding: '1rem' }}>금어기 표</div>
      {/* <div>
        {prohibitInfo.map((info) => (
          <div key={info.id}>
            <div>한국어 이름: {info.name_kor}</div>
            <div>영어 이름: {info.name_eng}</div>
            <div>금지 시작일: {info.standard_start ? info.standard_start : "금어기 기준이"}</div>
            <div>금지 종료일: {info.standard_end ? info.standard_end : "없어요"}</div>
          </div>
        ))}
      </div> */}
    </>
  )
}

export default ProhibitionInfoPage