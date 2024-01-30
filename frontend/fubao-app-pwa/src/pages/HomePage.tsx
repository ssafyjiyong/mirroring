import React, { useState, useEffect } from 'react';
import Initial from "../components/Initial/Initial";
import EntryLoading from "../components/Entry/EntryLoading";

function HomePage() {
  const isLoggedIn = true; // 로그인 상태를 확인하는 로직 (가정)
  const [showLoading, setShowLoading] = useState(true); // EntryLoading 컴포넌트를 보여줄지 결정하는 상태

  useEffect(() => {
    // 2초 후에 EntryLoading 컴포넌트를 숨김
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p style={{ alignSelf: "center" }}>테스트</p>
      {isLoggedIn && <Initial />}
      {showLoading && <EntryLoading />} {/* showLoading 상태에 따라 EntryLoading 표시 */}
    </div>
  );
}

export default HomePage;
