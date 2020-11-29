import styled from 'styled-components';
import { device } from './device.js';


import {
  BLACK,
  WHITE,
  DARK_GREY,
  SOFT_ORANGE
} from './colors.js'

export const Bg = styled.div`
  width: 948px;
  height: 529px;
  background: ${WHITE};
  position: fixed;
  border: ${DARK_GREY} 9px solid;
  display: flex;
  font-family: 'MadeSans';

`

export const Image = styled.img`
  width: 382px;
  height: 100%;
`

export const Block = styled.div`
  width: 560px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`

export const Head = styled.h1`
  font-size: 42px;
`

export const Text = styled.p`
  line-height: 30px;
  font-size: 24px;
  width: 77%;
`

export const EmailBlock = styled.input`
  width: 330px;
  height: 50px;
  background: ${WHITE};
  font-size: 22px;
  line-height: 20px;
  border: 3px ${BLACK} solid;
  width: 70%;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: ${BLACK};

  ::placeholder,
  ::-webkit-input-placeholder {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    color: ${BLACK};
  }
`

export const Policy = styled.div``

export const Checkbox = styled.input``

export const PolicyText = styled.label``

export const SignUp = styled.button`
  width: 245px;
  height: 40px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 22px;
  line-height: 24px;
  color: ${WHITE};
  text-align: center;
  background: ${BLACK};
  border: none;
  padding: 0px 16px;
  cursor: pointer;
`
