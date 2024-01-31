import React, { useState, useEffect } from "react";
import EntryLoading from "../components/Entry/EntryLoading";
import Information from "../components/Main/Information";
// import styled from "styled-components";

// const TopBox = styled.div`
//   border: 1px solid black;
//   background-color: white;
//   border-radius: 15%;
// `;

function HomePage() {
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
    <div
      style={{
        height: "auto",
        padding: "1em",
        paddingBottom: "2em",
        backgroundColor: "#E3F2FD",
      }}
    >
      <p 
      style={{ 
        fontWeight: 600, 
        fontSize: '1.5em',
        margin: '1em 0.5em 0.5em',
        }}
        >
          피드
          </p>
        <Information />
        <Information />
        <Information />
      {showLoading && <EntryLoading />}{" "}
      {/* showLoading 상태에 따라 EntryLoading 표시 */}
    </div>
  );
}

export default HomePage;
