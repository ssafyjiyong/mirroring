import React, { useEffect, useState } from 'react';
import { releaseFishApi } from "../../store/api";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// https://www.youtube.com/watch?v=qk2oY7W3fuY

// 아니 타입 지정 안되면 다 ^^^^하고 오류뜨네ㅠㅠㅠ
type ReleaseInfo = {
  id: number;
  name_kor: string;
  name_eng: string;
  standard: number | null;
};

// 물고기 images
const fishImages = [
  { name: '참돔', image: '/imgs/fish/chamdom.png', link: '/detail/참돔'}, // 1. 참돔
  { name: '농어', image: '/imgs/fish/nonguh.png', link: '/detail/농어'}, // 2. 농어
  { name: '전갱이', image: '/imgs/fish/jeongang.png', link: '/detail/전갱이'}, // 3. 전갱이
  { name: '숭어', image: '/imgs/fish/sunguh.png', link: '/detail/숭어'}, // 4. 숭어
  { name: '고등어', image: '/imgs/fish/godeunguh.png', link: '/detail/고등어'}, // 5. 고등어
  { name: '광어', image: '/imgs/fish/kwanguh.png', link: '/detail/광어'}, // 6. 광어
  { name: '우럭', image: '/imgs/fish/wuroek.png', link: '/detail/우럭'}, // 7. 우럭
  { name: '감성돔', image: '/imgs/fish/gamsungdom.png', link: '/detail/감성돔'}, // 8. 감성돔
  { name: '돌돔', image: '/imgs/fish/doldom.png', link: '/detail/돌돔'}, // 9. 돌돔
  { name: '쥐노래미', image: '/imgs/fish/gnoraemi.png', link: '/detail/쥐노래미'}, // 10. 쥐노래미
];

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
      <TableContainer component={Paper} style={{ padding: '1rem', paddingBottom: '3rem' }}>
        <Table aria-label='release_standards'>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Document</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {releaseInfo.map((info) => (
              <TableRow key={info.id} style={{ borderBottom: 'none' }}>
                <TableCell>
                  <img src={fishImages[info.id - 1]?.image} alt={info.name_kor} style={{ width: '3rem', borderRadius: '5px' }} />
                </TableCell>
                <TableCell>
                  <div>한국어 이름: {info.name_kor}</div>
                  <div>영어 이름: {info.name_eng}</div>
                  <div>방생기준: {info.standard ? info.standard : "잡아도 잡아도 씨가 마르지 않음"}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ReleaseInfoPage