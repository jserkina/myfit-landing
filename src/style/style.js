import styled from 'styled-components';
import { device } from './device.js';


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


export const Bg = styled.div`
  height: 100vh;
  width: 100vw;
`

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 720px;
  @media ${device.tablet} {
    background: ${BLACK};
    height: 1204px;
  }
`

export const MenuBlockLight = styled.div`
  width: 81vw;;
  height: 720px;
  background: ${SOFT_ORANGE};
  opacity: 0.5;
  border-radius: 8px;
  transform: rotate(3deg);
  align-self: start;
  position: absolute;
  top: -70px;
  left: 63.68px;
  @media ${device.tablet} {
    transform: rotate(6deg);
    width: 768px;
    height: 448px;
    top: 45px;
    left: -36px;
  }
`

export const MenuBlock = styled.div`
  width: 81vw;;
  height: 740px;
  background: ${SOFT_ORANGE};
  border-radius: 8px;
  transform: rotate(-3deg);
  align-self: center;
  position: absolute;
  top: -60px;
  @media ${device.tablet} {
    transform: rotate(-6deg);
    height: 611.71px;
    width: 824.02px;
    top: -124px;
    left: -16px;
  }
`

export const MenuImage = styled.img`
  width: 45vw;
  position: absolute;
  right: 0;
  @media ${device.tablet} {
    width: 684px;
    top: 531px;
  }
`

export const Box = styled.div`
  align-self: center;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: start;
`

export const NavigationMenu = styled.div`
  padding: 16px 0px;
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    padding: 16px 0px 0px;
  }
`

export const Menu = styled.div`
  width: 374px;
  display: flex;
  justify-content: space-between;
  color: ${BLACK};
  margin: 0px 432px 0px 112px;
  @media ${device.tablet} {
    width: 305px;
    margin: 0px 40px 0px 85px;
  }

`

export const MenuButton = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
`

export const ButtonPrimary = styled.a`
  font-weight: bold;
  font-size: 16px;
  line-height: 134.7%;
  color: ${WHITE};
  text-align: center;
  background: ${PRIMARY};
  border-radius: 8px;
  text-decoration: none;
  padding: 17px 24px;
`

export const ButtonDemo = styled.a`
  font-weight: bold;
  font-size: 14px;
  line-height: 143%;
  color: ${PRIMARY};
  display: flex;
  align-items: center;
  background: rgba(250, 69, 4, 0.2);
  border-radius: 8px;
  text-decoration: none;
  padding: 17px 24px;
  @media ${device.tablet} {
    padding: 14px 16px;
  }
`

export const AmazonButton = styled.a`
  background: rgba(250, 69, 4, 0.2);
  border-radius: 8px;
  text-decoration: none;
  padding: 22px 56px 14px;
  margin-left: 20px;
`

export const HeroCTA = styled.div`
  width: 579px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 176px;
  @media ${device.tablet} {
    text-align: center;
    align-items: center;
    margin-top: 80px;
    align-self: center;
  }
`

export const HeroHead = styled.h1`
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${BLACK};
`

export const HeroButtons = styled.div`
  margin-top: 40px;
  display: flex;
`


export const Benefits = styled.div`
  margin: 120px 0px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${device.tablet} {
    margin: 80px 40px 64px;
  }
`

export const Caption = styled.div`
  width: 780px;
  @media ${device.tablet} {
    width: 100%;
  }
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
  @media ${device.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 210px;
  width: 276px;
  padding: 0px 32px;
  @media ${device.tablet} {
    padding: 0px 24px;
  }
`

export const CardOne = styled(Card)`
  background: ${SOFT_ORANGE};
  border-radius: 8px;
`

export const CardTwo = styled(Card)`
  background: ${SOFT_PINK};
  border-radius: 8px;
  margin: 0px 80px;
  @media ${device.tablet} {
    margin-left: 40px;
    margin-right: 0px;
  }
`

export const CardThree = styled(Card)`
  background: ${SOFT_YELLOW};
  border-radius: 8px;
  @media ${device.tablet} {
    margin-top: 40px;
  }
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


export const VideoBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media ${device.tablet} {
    padding: 53px 34px;
  }
`

export const LightBlock = styled.div`
  width: 61.5vw;;
  height: 720px;
  background: ${SOFT_ORANGE};
  border-radius: 8px;
  transform: rotate(3deg);
  align-self: center;
  @media ${device.tablet} {
    width: 640px;
    height: 868px;
    transform: rotate(4deg);
  }
`

export const DarkBlock = styled.div`
  width: 55vw;
  height: 598px;
  background: ${BLACK};
  position: absolute;
  bottom: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    height: 342px;
    width: 640px;
    top: 86px;
    left: 64px;
    border-radius: 8px;
  }
`

export const VideoStyle = styled.img`
  width: 61.5vw;
  height: 100%;
  position: absolute;
  right: 0;
  object-fit: contain;
  @media ${device.tablet} {
    width: 100vw;
    bottom: -168px;
  }
`

export const VideoCTA = styled.div`
  width: 324px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.tablet} {
    align-items: center;
    width: 482px;
    text-align: center;
  }
`

export const VideoHead = styled.h2`
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${WHITE};
`

export const VideoText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${GREY};
  margin: 12px 0px 48px;
`

export const App = styled.div`
  padding: 80px 0px 80px 64px;
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: column-reverse;
    padding: 80px 0px 120px;
  }
`

export const AppImage = styled.img`
  width: calc(50vw - 64px);
  @media ${device.tablet} {
    width: 100%;
    margin-top: 120px;
  }
`

export const AppCTA = styled.div`
  margin-left: 118px;
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.tablet} {
    align-items: center;
    width: 100%;
    margin: 0px;
  }
`

export const FramedHead = styled.div`
  @media ${device.tablet} {
    text-align: center;
    width: 61vw;
  }
`

export const AppHead = styled.h3`
  font-weight: 900;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${BLACK};
`
export const AppBox = styled.div`
  margin: 40px 0px 48px;
  @media ${device.tablet} {
    display: flex;
    margin: 40px 40px 56px;
  }
`

export const AppCard = styled.div`
  padding: 20px 24px;
  border-radius: 8px;
  display: flex;
  @media ${device.tablet} {
    padding: 20px 20px 20px 25px;
  }
`

export const WorkoutCard = styled(AppCard)`
  background: ${SOFT_ORANGE};
`

export const CombosCard = styled(AppCard)`
  background: #F8F8F8;
  margin-top: 16px;
  @media ${device.tablet} {
    margin-top: 0px;
    margin-left: 20px;
  }
`

export const Framed = styled.div`
  margin-left: 24px;
`

export const AppTextBold = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: ${BLACK};
  margin-bottom: 4px;
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

export const OrderButton = styled(ButtonPrimary)`
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
  width: 61.5vw;
  justify-content: space-between;
  position: absolute;
  @media ${device.tablet} {
    margin-bottom: 32px;
    width: calc(100vw - 80px);
    position: static;
  }
`

export const MenuFooter = styled.div`
  width: 374px;
  display: flex;
  justify-content: space-between;
  color: ${WHITE};
  align-items: center;
  height: 32px;
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
