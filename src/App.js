import React, { Component } from 'react';
import { Reset } from 'reset-css';
import { Player } from 'video-react';
import { ScrollingProvider, SectionLink, Section } from 'react-scroll-section';

import Leaf from './icons/Leaf.svg';
import Phone from './icons/Phone.svg';
import Number1 from './icons/Number1.svg';
import Amazon from './icons/Amazon.svg';
import AmazonName from './icons/AmazonName.svg';
import Logo from './icons/Logo.svg';
import LogoBig from './icons/LogoBig.svg';
import LogoWhite from './icons/LogoWhite.svg';
import Play from './icons/Play.svg';
import MenuPlay from './icons/MenuPlay.svg';
import Twitter from './icons/Twitter.svg';
import Facebook from './icons/Facebook.svg';
import Instagram from './icons/Instagram.svg';
import Image from './icons/App.png';
import Dumbbell from './icons/Dumbbell.svg';
import Video from './icons/Video.png';
import PlayVideo from './icons/PlayVideo.svg';
import MenuHero from './icons/MenuHero.png'

import * as S from './style/style.js';

export default class MyComponent extends Component {
  render() {
    return (
      <S.Bg>
        <ScrollingProvider>
          <S.Hero>
            <S.MenuBlockLight></S.MenuBlockLight>
            <S.MenuBlock></S.MenuBlock>
            <S.MenuBlockDark>
              <S.MenuImage src={MenuHero} alt='Man is running' />
            </S.MenuBlockDark>
            <S.Box>
              <S.MobileMenu>
                <img src={LogoWhite} />
                <img src={MenuPlay} />
              </S.MobileMenu>
              <S.NavigationMenu>
                <img src={LogoBig} />
                <S.Menu>
                  <SectionLink section="products">
                    {({ onClick, isSelected }) => (
                      <S.MenuButton onClick={onClick} selected={isSelected}>
                        Products
                      </S.MenuButton>
                    )}
                  </SectionLink>
                  <SectionLink section="app">
                    {({ onClick, isSelected }) => (
                      <S.MenuButton onClick={onClick} selected={isSelected}>
                        App
                      </S.MenuButton>
                    )}
                  </SectionLink>
                  <SectionLink section="benefit">
                    {({ onClick, isSelected }) => (
                      <S.MenuButton onClick={onClick} selected={isSelected}>
                        Benefit
                      </S.MenuButton>
                    )}
                  </SectionLink>
                  <SectionLink section="about us">
                    {({ onClick, isSelected }) => (
                      <S.MenuButton onClick={onClick} selected={isSelected}>
                        About Us
                      </S.MenuButton>
                    )}
                  </SectionLink>
                </S.Menu>
                <S.ButtonDemo href='https://www.amazon.com/'>
                  <img src={Play} style={{ marginRight: '8px'}}/>
                  Watch Demo
                </S.ButtonDemo>
              </S.NavigationMenu>
              <S.HeroCTA>
                <S.HeroHead>The Resistance Workout Revolution</S.HeroHead>
                <S.CaptionText>Resistance bands are cool - but they’re a lot cooler when they’ve been created and designed to allow you to replicate nearly all gym workouts.</S.CaptionText>
                <S.HeroButtons>
                  <S.ButtonPrimary href='https://www.amazon.com/'>Explore More</S.ButtonPrimary>
                  <S.AmazonButton href='https://www.amazon.com/'>
                    <img src={AmazonName} />
                  </S.AmazonButton>
                </S.HeroButtons>
              </S.HeroCTA>
            </S.Box>
          </S.Hero>
          <Section id="benefit">
            <S.Benefits>
              <S.Caption>
                <S.TextHead>Why MyFit?</S.TextHead>
                <S.CaptionText>We are a UK company looking to revolutionise the way we workout! Resistance bands are cool - but they’re a lot cooler when they’ve been created and designed to allow you to replicate nearly all gym workouts. We’ve managed to create resistance from the comfort of your own home without compromising on your workout goals.</S.CaptionText>
              </S.Caption>
              <S.Content>
                <S.CardOne>
                  <img src={Leaf} />
                  <S.CardTextBold>MyFit resistance bands are made from 100% natural latex.</S.CardTextBold>
                  <S.CardText>If you are allergic to latex, we would advise consulting.</S.CardText>
                </S.CardOne>
                <S.CardTwo>
                  <img src={Phone} />
                  <S.CardTextBold>Lorem ipsum dolor sit amet.</S.CardTextBold>
                  <S.CardText>For the 2nd one, can you create a symbol that represents a phone, that box will be used to talk about the app.</S.CardText>
                </S.CardTwo>
                <S.CardThree>
                  <img src={Number1} />
                  <S.CardTextBold>Orci ipsum ultrices massa in sit ac lorem sit.</S.CardTextBold>
                  <S.CardText>the symbol should be related to quality control, - represents ‘number 1’.</S.CardText>
                </S.CardThree>
              </S.Content>
            </S.Benefits>
          </Section>
          <Section id="about us">
            <S.VideoBlock>
              <S.LightBlock></S.LightBlock>
              <S.DarkBlock>
                <S.VideoCTA>
                  <S.VideoHead>Explore</S.VideoHead>
                  <S.VideoText>We’ve managed to create resistance from the comfort of your own home without compromising on your workout goals.</S.VideoText>
                  <S.ButtonPrimary href='https://www.amazon.com/'>Explore More</S.ButtonPrimary>
                </S.VideoCTA>
              </S.DarkBlock>
              <S.VideoStyle src={Video} />
              {/*<Player
                style={{
                          width: '100vw',
                          position: 'absolute',
                          right: '0',
                          objectFit: 'contain', }}
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              />*/}
            </S.VideoBlock>
          </Section>
          <Section id="app">
            <S.App>
              <S.AppImage src={Image} alt='MyFit App'/>
              <S.AppCTA>
                <S.FramedHead>
                  <S.AppHead>MyFit app</S.AppHead>
                  <S.CaptionText>The MyFit app is your go-to for all resistance workouts created by our own experts!</S.CaptionText>
                </S.FramedHead>
                <S.AppBox>
                  <S.WorkoutCard>
                    <img src={Dumbbell} />
                    <S.Framed>
                      <S.AppTextBold>Workout Videos</S.AppTextBold>
                      <S.CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua.</S.CardText>
                    </S.Framed>
                  </S.WorkoutCard>
                  <S.CombosCard>
                    <img src={Dumbbell} />
                    <S.Framed>
                      <S.AppTextBold>Combos Workout</S.AppTextBold>
                      <S.CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua.</S.CardText>
                    </S.Framed>
                  </S.CombosCard>
                </S.AppBox>
                <S.ButtonPrimary href='https://www.amazon.com/'>Go to Application</S.ButtonPrimary>
              </S.AppCTA>
            </S.App>
          </Section>
          <Section id="products">
            <S.Bottom>
              <S.TextHead>Order MyFit Now</S.TextHead>
              <S.BottomText>Join us in the resistance workout revolution.</S.BottomText>
              <S.OrderButton href='https://www.amazon.com/'>Get Started</S.OrderButton>
              <img src={Amazon} />
            </S.Bottom>
          </Section>
          <S.Footer>
            <S.Container>
              <img src={Logo} />
              <S.Socials>
                <a href='https://twitter.com/'>
                  <img src={Twitter} />
                </a>
                <a href='https://www.facebook.com/'>
                  <img src={Facebook} />
                </a>
                <a href='https://www.instagram.com/'>
                  <img src={Instagram} />
                </a>
              </S.Socials>
            </S.Container>
            <S.MenuFooter>
              <SectionLink section="products">
                {({ onClick, isSelected }) => (
                  <S.MenuButton onClick={onClick} selected={isSelected}>
                    Products
                  </S.MenuButton>
                )}
              </SectionLink>
              <SectionLink section="app">
                {({ onClick, isSelected }) => (
                  <S.MenuButton onClick={onClick} selected={isSelected}>
                    App
                  </S.MenuButton>
                )}
              </SectionLink>
              <SectionLink section="benefit">
                {({ onClick, isSelected }) => (
                  <S.MenuButton onClick={onClick} selected={isSelected}>
                    Benefit
                  </S.MenuButton>
                )}
              </SectionLink>
              <SectionLink section="about us">
                {({ onClick, isSelected }) => (
                  <S.MenuButton onClick={onClick} selected={isSelected}>
                    About Us
                  </S.MenuButton>
                )}
              </SectionLink>
            </S.MenuFooter>
            <S.MyFitRight>© 2020 - MyFit, All right are reserved</S.MyFitRight>
          </S.Footer>
        </ScrollingProvider>
      </S.Bg>
    );
  }
}
