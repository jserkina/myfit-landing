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
  overflow: hidden;
  @media ${device.laptop} {
    height: 1204px;
  }
  @media ${device.mobile} {
    height: 940px;
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
  @media ${device.laptop} {
    transform: rotate(6deg);
    width: 100vw;
    height: 448px;
    top: 45px;
    left: -20px;
  }
  @media ${device.mobile} {
    width: 500px;
    height: 500px;
    opacity: 0.7;
    left: -55px;
    top: 0px;
  }
  @media ${device.mobileM} {
    left: -103px;
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
  @media ${device.laptop} {
    transform: rotate(-6deg);
    height: 611.71px;
    width: 108vw;
    top: -124px;
    left: -16px;
  }
  @media ${device.mobile} {
    transform: rotate(-8deg);
    height: 500px;
    width: 500px;
    top: -23px;
    left: -23px;
  }
`
export const MenuBlockDark = styled.div`
  width: 45vw;
  height: 100%;
  position: absolute;
  right: 0;
  background: ${BLACK};
  display: flex;
  align-items: flex-end;
  @media ${device.laptop} {
    width: 100vw;
    position: static;
  }
`

export const MenuImage = styled.img`
  @media ${device.laptop} {
    position: relative;
    bottom: 20px;
    left: 200px;
  }
  @media ${device.tablet} {
    left: 63px;
  }
  @media ${device.mobile} {
    height: 450px;
    bottom: 0px;
    left: 6px;
  }
  @media ${device.mobileM} {
    left: -20px;
  }
  @media ${device.mobileS} {
    left: -43px;
  }
`

export const Box = styled.div`
  align-self: center;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: start;
`

export const MobileMenu = styled.div`
  @media ${device.desktop} {
    display: none;
  }
  @media ${device.mobile} {
    width: calc(100vw - 40px);
    padding: 12px 20px;
    background: ${BLACK};
    display: flex;
    justify-content: space-between;
  }
`

export const NavigationMenu = styled.div`
  padding: 16px 0px;
  display: flex;
  align-items: center;
  @media ${device.laptop} {
    padding: 16px 0px 0px;
  }
  @media ${device.mobile} {
    display: none;
  }

`

export const Menu = styled.div`
  width: 374px;
  display: flex;
  justify-content: space-between;
  color: ${BLACK};
  margin: 0px 432px 0px 112px;
  @media ${device.laptop} {
    width: 305px;
    margin: 0px 40px 0px 85px;
  }

`

export const MenuButton = styled.a`
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
  @media ${device.mobile} {
    width: 160px;
    height: 48px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
  }
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
  @media ${device.laptop} {
    padding: 14px 16px;
  }
`

export const AmazonButton = styled.a`
  background: rgba(250, 69, 4, 0.2);
  border-radius: 8px;
  text-decoration: none;
  padding: 22px 56px 14px;
  margin-left: 20px;
  @media ${device.mobile} {
    width: 160px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin-left: 16px;
  }
`

export const HeroCTA = styled.div`
  width: 579px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 176px;
  @media ${device.laptop} {
    text-align: center;
    align-items: center;
    margin-top: 80px;
    align-self: center;
  }
  @media ${device.mobile} {
    width: calc(100vw - 40px);
  }
`

export const HeroHead = styled.h1`
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${BLACK};
  @media ${device.mobile} {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0em;
  }
`

export const HeroButtons = styled.div`
  margin-top: 40px;
  display: flex;
  @media ${device.mobileS} {
    width: calc(100vw - 40px);
  }
`


export const Benefits = styled.div`
  padding: 120px 0px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${device.laptop} {
    padding: 80px 40px 64px;
  }
  @media ${device.mobile} {
    padding: 64px 20px 43px;
  }
`

export const Caption = styled.div`
  width: 780px;
  @media ${device.laptop} {
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
  @media ${device.mobile} {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0em;
  }
`

export const CaptionText = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: ${DARK_GREY};
  margin-top: 16px;
  @media ${device.mobile} {
    font-size: 14px;
    line-height: 24px;
    margin-top: 8px;
  }
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  margin-top: 64px;
  @media ${device.laptop} {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media ${device.mobile} {
    margin-top: 48px;
  }
`


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 210px;
  width: 276px;
  padding: 0px 32px;
  @media ${device.laptop} {
    padding: 0px 24px;
  }
  @media ${device.mobile} {
    padding: 0px 32px;
  }
  @media ${device.mobileS} {
    width: calc(100vw - 104px);
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
  @media ${device.laptop} {
    margin-left: 40px;
    margin-right: 0px;
  }
  @media ${device.mobile} {
    margin: 32px 0px;
  }
`

export const CardThree = styled(Card)`
  background: ${SOFT_YELLOW};
  border-radius: 8px;
  @media ${device.laptop} {
    margin-top: 40px;
  }
  @media ${device.mobile} {
    margin-top: 0px;
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
  @media ${device.laptop} {
    padding: 53px 34px;
  }
  @media ${device.mobile} {
    overflow: hidden;
  }
`

export const LightBlock = styled.div`
  width: 61.5vw;;
  height: 720px;
  background: ${SOFT_ORANGE};
  border-radius: 8px;
  transform: rotate(3deg);
  align-self: center;
  @media ${device.laptop} {
    width: 640px;
    height: 1026px;
    transform: rotate(4deg);
  }
  @media ${device.tablet} {
    height: 868px;
  }
  @media ${device.mobile} {
    width: 375px;
    height: 688px;
    transform: rotate(6deg);
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
  @media ${device.laptop} {
    height: 342px;
    width: 640px;
    top: 86px;
    left: 200px;
    border-radius: 8px;
  }
  @media ${device.tablet} {
    left: 64px;
  }
  @media ${device.mobile} {
    width: calc(100vw - 32px);
    height: 384px;
    left: 16px;
  }
`

export const VideoStyle = styled.img`
  width: 61.5vw;
  height: 100%;
  position: absolute;
  right: 0;
  object-fit: contain;
  @media ${device.laptop} {
    width: 100vw;
    bottom: -168px;
  }
  @media ${device.mobile} {
    width: 120vw;
    bottom: -184px;
  }
`

export const VideoCTA = styled.div`
  width: 324px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.laptop} {
    align-items: center;
    width: 482px;
    text-align: center;
  }
  @media ${device.mobile} {
    width: calc(100% - 32px);
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
  @media ${device.laptop} {
    flex-direction: column-reverse;
    padding: 80px 0px 120px;
  }
  @media ${device.mobile} {
    padding: 40px 0px 64px;
  }
`

export const AppImage = styled.img`
  width: calc(50vw - 64px);
  @media ${device.laptop} {
    width: 100%;
    margin-top: 120px;
  }
  @media ${device.mobile} {
    margin-top: 64px;
  }
`

export const AppCTA = styled.div`
  margin-left: 118px;
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.laptop} {
    align-items: center;
    width: 100%;
    margin: 0px;
  }
`

export const FramedHead = styled.div`
  @media ${device.laptop} {
    text-align: center;
    width: 61vw;
  }
  @media ${device.mobile} {
    width: 90vw;
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
  @media ${device.laptop} {
    display: flex;
    margin: 40px 40px 56px;
  }
  @media ${device.mobile} {
    flex-direction: column;
    margin: 40px 20px 48px;
  }
`

export const AppCard = styled.div`
  padding: 20px 24px;
  border-radius: 8px;
  display: flex;
  @media ${device.laptop} {
    padding: 20px 20px 20px 25px;
  }
`

export const WorkoutCard = styled(AppCard)`
  background: ${SOFT_ORANGE};
`

export const CombosCard = styled(AppCard)`
  background: #F8F8F8;
  margin-top: 16px;
  @media ${device.laptop} {
    margin-top: 0px;
    margin-left: 20px;
  }
  @media ${device.mobile} {
    margin-top: 24px;
    margin-left: 0px;
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
  text-align: center;
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
  @media ${device.mobile} {
    padding: 24px 0px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 61.5vw;
  justify-content: space-between;
  position: absolute;
  @media ${device.laptop} {
    margin-bottom: 32px;
    width: calc(100vw - 80px);
    position: static;
  }
  @media ${device.mobile} {
    width: calc(100vw - 40px);
  }
`

export const MenuFooter = styled.div`
  width: 374px;
  display: flex;
  justify-content: space-between;
  color: ${WHITE};
  align-items: center;
  height: 32px;
  margin-bottom: 36px;
  @media ${device.mobile} {
    width: calc(100vw - 40px);
    margin-bottom: 32px;
  }
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
`
