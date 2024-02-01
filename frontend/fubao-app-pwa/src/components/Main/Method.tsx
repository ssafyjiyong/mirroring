import React from 'react'
import styled from 'styled-components';
import { WhiteBox } from './styles';

type Method1Props = {
  id: string;
};

const Information = ({ id }: Method1Props) => {
  return (
    <WhiteBox id={id}>찌낚시</WhiteBox>
  )
}

export default Information