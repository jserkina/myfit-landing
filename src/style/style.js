import styled from 'styled-components';

import {
  BLACK,
  DARK_GREY,
  SOFT_YELLOW,
  GREY,
  PRIMARY,
  WHITE,
  SOFT_PINK,
  SOFT_ORANGE
} from './colors.js'

export const Hero = styled.div``

export const Benefits = styled.div`
  padding: 120px 0px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Caption = styled.div`
  width: 780px;
`

export const TextHead = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${BLACK};
`

export const CaptionText = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: ${DARK_GREY};
  margin-top: 16px;
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  margin-top: 64px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 210px;
  width: 276px;
  padding: 0px 32px;
`
export const CardOne = styled(Card)`
  background: ${SOFT_ORANGE};
  border-radius: 8px;
`

export const CardTwo = styled(Card)`
  background: ${SOFT_PINK};
  border-radius: 8px;
  margin: 0px 80px;
`

export const CardThree = styled(Card)`
  background: ${SOFT_YELLOW};
  border-radius: 8px;
`

export const CardTextBold = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: ${BLACK};
  margin-top: 24px;
  margin-bottom: 8px;
`

export const CardText = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
`

export const VideoBlock = styled.div``

export const App = styled.div`
  padding: 80px 0px 80px 64px;
  display: flex;
  align-items: center;
`

export const GtA = styled.div`
  margin-left: 118px;
`

export const AppHead = styled.h3`
  font-weight: 900;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${BLACK};
`

export const Bottom = styled.div`
  background: ${SOFT_ORANGE};
  width: 100vw;
  padding: 48px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BottomText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${DARK_GREY};
  margin-top: 8px;
`

export const Button = styled.button`
  font-weight: bold;
  font-size: 16px;
  line-height: 134.7%;
  color: ${WHITE};
  text-align: center;
  background: ${PRIMARY};
  border-radius: 8px;
  padding: 17px 24px;
  margin: 32px 0px 16px;
`

export const Footer = styled.div`
  background: ${BLACK};
  width: 100vw;
  padding: 36px 0px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Menu = styled.div`
  width: 374px;
  display: flex;
  justify-content: space-between;
  margin: 0px 275px 0px 375px;
`

export const MenuButton = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${WHITE};
`

export const Socials = styled.div`
  width: 128px;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
`

export const MyFitRight = styled.p`
  font-family: Poppins;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${WHITE};
  opacity: 0.4;
  margin-top: 36px;
`
