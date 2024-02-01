import React from 'react'
import styled from 'styled-components';
import { WhiteBox } from './styles';

type Method1Props = {
  id?: string; // id 프로퍼티는 선택적(optional)입니다
};

const Method1 = ({ id }: Method1Props) => {
  return (
    <WhiteBox id={id}>찌낚시</WhiteBox>
  )
}

export default Method1