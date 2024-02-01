import React from 'react'
import styled from 'styled-components';
import { WhiteBox } from './styles';

type Point1Props = {
  id: string;
};

const Point = ({ id }: Point1Props) => {
  return (
    <WhiteBox id={id}>방파제낚시</WhiteBox>
  )
}

export default Point