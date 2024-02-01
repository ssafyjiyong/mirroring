import React from 'react'
import styled from 'styled-components';
import { WhiteBox } from './styles';

type Point1Props = {
  id?: string; // id 프로퍼티는 선택적(optional)입니다
};

const Point1 = ({ id }: Point1Props) => {
  return (
    <WhiteBox id={id}>방파제</WhiteBox>
  )
}

export default Point1