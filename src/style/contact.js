import styled from 'styled-components';
import { device } from './device.js';

import {
  BLACK,
  DARK_GREY,
  GREY,
  PRIMARY,
  WHITE,
  LIGHT_DARK,
} from './colors.js'

export const Bg = styled.div`
  height: 100vh;
  margin-left: 50px;
  @media ${device.tablet} {
    margin-left: 20px;
  }
`

export const Main = styled.main`
  overflow: hidden;
  position: relative;
  height: 970px
`

export const ContactBox = styled.div`
  width: 40%;
  position: absolute;
  margin-top: 60px;
  margin-left: 200px;
  @media ${device.laptop} {
    width:auto;
    margin-left: 110px;
  }
  @media ${device.mobile} {
    margin-left: 0px;
    width: 100vw;
  }
`

export const Header = styled.h1`
  font-family: 'FuturaHeavy';
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.05em;
  color: ${BLACK};
  @media ${device.laptop} {
    font-size: 36px;
    line-height: 48px;
  }
`
export const HeadText = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: ${BLACK};
  margin-top: 24px;
  margin-bottom: 42px;
  @media ${device.laptop} {
    width:82%;
  }
`
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const Input = styled.input`
  background: #F8F8F8;
  font-size: 18px;
  line-height: 24px;
  border: none;
  border-radius: 2px;
  height: 60px;
  padding-left: 16px;
  margin-bottom: 18px;
  font-family: "FuturaMedium";
`
export const Select = styled.select`
  background: #F8F8F8;
  font-size: 18px;
  line-height: 24px;
  border: none;
  border-radius: 2px;
  height: 60px;
  padding-left: 16px;
  margin-bottom: 18px;
  color: #7d7d7d;
  font-family: "FuturaMedium";
`

export const TextArea = styled.textarea`
  background: #F8F8F8;
  font-size: 18px;
  line-height: 24px;
  border: none;
  border-radius: 2px;
  height: 60px;
  padding-left: 16px;
  margin-bottom: 32px;
  font-family: "FuturaMedium";
`

export const FormButton = styled.input`
  background: ${PRIMARY};
  color: ${WHITE};
  font-weight: bold;
  font-size: 16px;
  line-height: 134.7%;
  font-family: "FuturaHeavy";
  border: none;
  width: min-content;
  border-radius: 8px;
  padding: 17px 24px;
  cursor: pointer;
`

export const FullKitStyle = styled.img`
  width: 100%;
  transform: rotate(-46deg);
  position: absolute;
  right: -415px;
  top: 278px;
  @media ${device.laptop} {
    display: none;
  }
`
