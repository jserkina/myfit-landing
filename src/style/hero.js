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

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 720px;
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
`

export const Box = styled.div`
  align-self: center;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: start;
`

export const NavigationMenu = styled.div`
  padding: 28px 0px;
  display: flex;
  align-items: center;
`

export const Menu = styled.div`
  width: 374px;
  display: flex;
  justify-content: space-between;
  color: ${BLACK};
  margin: 0px 432px 0px 112px;
`

export const MenuButton = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
`

export const HeroButtons = styled.div`
  margin-top: 40px;
  display: flex;
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
`

export const HeroHead = styled.h1`
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${BLACK};
`
