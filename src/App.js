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
import MenuHero from './icons/MenuHero.png';
import MainPhoto from './icons/MainPhoto.jpeg';
import ProductPhoto from './icons/ProductPhoto.jpeg'

import * as S from './style/style.js';

export default class MyComponent extends Component {
  render() {
    return (
      <S.Bg>
        <ScrollingProvider>
          <S.Main>
            <S.MenuImage src={MainPhoto} />
            <S.MenuBlock></S.MenuBlock>
            <S.Box>
              <S.MobileMenu>
                <img src={LogoWhite} />
                <S.ButtonPrimaryMobile href='https://www.amazon.com/'>
                  Buy Now
                </S.ButtonPrimaryMobile>
              </S.MobileMenu>
              <S.NavigationMenu>
                <img src={LogoBig} />
                <S.Menu>
                  <SectionLink section="why">
                    {({ onClick, isSelected }) => (
                      <S.MenuButton onClick={onClick} selected={isSelected}>
                        Why
                      </S.MenuButton>
                    )}
                  </SectionLink>
                  <SectionLink section="product">
                    {({ onClick, isSelected }) => (
                      <S.MenuButton onClick={onClick} selected={isSelected}>
                        Product
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
                  <SectionLink section="contact">
                    {({ onClick, isSelected }) => (
                      <S.MenuButton onClick={onClick} selected={isSelected}>
                        Contact
                      </S.MenuButton>
                    )}
                  </SectionLink>
                </S.Menu>
                <S.ButtonPrimary href='https://www.amazon.com/'>
                  Buy Now
                </S.ButtonPrimary>
              </S.NavigationMenu>
              <S.MainCTA>
                <S.MainHead>The Resistance Workout Revolution</S.MainHead>
                <S.CaptionText>Designed with personality and produced to the highest standards - MYFIT bands allows you to train your way, wherever you are.</S.CaptionText>
                <S.MainButtons>
                  <S.ButtonPrimary href='https://www.amazon.com/'>Explore More</S.ButtonPrimary>
                  <S.AmazonButton href='https://www.amazon.com/'>
                    <img src={AmazonName} />
                  </S.AmazonButton>
                </S.MainButtons>
              </S.MainCTA>
            </S.Box>
          </S.Main>
          <Section id="why">
            <S.Benefits>
              <S.Caption>
                <S.TextHead>Why MyFit?</S.TextHead>
                <S.CaptionText>MyFit are a UK brand providing unparalleled quality latex resistance bands allowing you to shred body fat and increase isolated muscle strength. Alongside the premium bands, we’ve created an app to provide exclusive curated content by industry professionals. This combination provides you with the ultimate solution to achieving your goals, wherever you are.</S.CaptionText>
              </S.Caption>
              <S.Content>
                <S.CardOne>
                  <img src={Leaf} />
                  <S.CardTextBold>Build muscle and shred fat from the comfort of your own home.</S.CardTextBold>
                  <S.CardText>The MYFIT resistance bands target isolated muscle groups to nurture growth whilst burning body fats. At your convenience.</S.CardText>
                </S.CardOne>
                <S.CardTwo>
                  <img src={Phone} />
                  <S.CardTextBold>Exclusive app to help you achieve your goals. whatever they may be.</S.CardTextBold>
                  <S.CardText>The MyFit app has exercises curated by industry professionals for all muscle groups. Regularly updated by experts.</S.CardText>
                </S.CardTwo>
                <S.CardThree>
                  <img src={Leaf} />
                  <S.CardTextBold>MyFit resistance bands are made from 100% natural latex. Naturally sourced.</S.CardTextBold>
                  <S.CardText>Our latex has origins from the highest quality source, the hevea brasiliensis tree. This ensures durability in strength, as well as flexibility.</S.CardText>
                </S.CardThree>
              </S.Content>
            </S.Benefits>
          </Section>
          <Section id="product">
            <S.ProductBlock>
              <S.LightBlock></S.LightBlock>
              <S.DarkBlock>
                <S.ProductCTA>
                  <S.ProductHead>No Breakage. No Excuses.</S.ProductHead>
                  <S.ProductText>These 11 piece set will enable you to replicate your favourite gym workouts without compromising on the resistance. You’ve got all you need to achieve your fitness goals.</S.ProductText>
                  <S.ButtonPrimary href='https://www.amazon.com/'>Shop Now</S.ButtonPrimary>
                </S.ProductCTA>
              </S.DarkBlock>
              <S.ProductStyle src={ProductPhoto} alt='Shavron Massage Gun' />
            </S.ProductBlock>
          </Section>
          <Section id="app">
            <S.App>
              <S.AppImage src={Image} alt='MyFit App'/>
              <S.AppCTA>
                <S.FramedHead>
                  <S.AppHead>Your MyFit App</S.AppHead>
                  <S.CaptionText>The MyFit is your go-to for all resistance workouts created by qualified UK personal trainers. The app is regularly updated with new exercises to keep you on your toes.</S.CaptionText>
                </S.FramedHead>
                <S.AppBox>
                  <S.WorkoutCard>
                    <img src={Dumbbell} />
                    <S.Framed>
                      <S.AppTextBold>Workout Videos</S.AppTextBold>
                      <S.CardText>Our personal trainers showcase an array of exercises that are catered to fulfill muscle growth, toning and weight-loss.</S.CardText>
                    </S.Framed>
                  </S.WorkoutCard>
                  <S.CombosCard>
                    <img src={Dumbbell} />
                    <S.Framed>
                      <S.AppTextBold>Combos</S.AppTextBold>
                      <S.CardText>Whatever you’re working on, we’ve curated combo videos which puts together a set of workout plans for specific muscle groups.</S.CardText>
                    </S.Framed>
                  </S.CombosCard>
                  <S.FavouritesCard>
                    <img src={Dumbbell} />
                    <S.Framed>
                      <S.AppTextBold>Favourites</S.AppTextBold>
                      <S.CardText>Want to curate your own workout plans? You can favourite your preferred workouts and collate a playlist of workouts for yourself.</S.CardText>
                    </S.Framed>
                  </S.FavouritesCard>
                </S.AppBox>
                <S.ButtonPrimary href='https://www.amazon.com/'>Go to Application</S.ButtonPrimary>
              </S.AppCTA>
            </S.App>
          </Section>
          <S.Bottom>
            <S.TextHead>Order your MyFit bands now.</S.TextHead>
            <S.BottomText>Join us in the resistance workout revolution.</S.BottomText>
            <S.OrderButton href='https://www.amazon.com/'>Get Started</S.OrderButton>
            <img src={Amazon} />
          </S.Bottom>
          <Section id="contact">
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
                <SectionLink section="why">
                  {({ onClick, isSelected }) => (
                    <S.MenuButton onClick={onClick} selected={isSelected}>
                      Why
                    </S.MenuButton>
                  )}
                </SectionLink>
                <SectionLink section="product">
                  {({ onClick, isSelected }) => (
                    <S.MenuButton onClick={onClick} selected={isSelected}>
                      Product
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
                <SectionLink section="contact">
                  {({ onClick, isSelected }) => (
                    <S.MenuButton onClick={onClick} selected={isSelected}>
                      Contact
                    </S.MenuButton>
                  )}
                </SectionLink>
              </S.MenuFooter>
              <S.EmailHead>SIGN UP TO OUR NEWSLETTER</S.EmailHead>
              <S.Email
                type='email'
                id="email"
                name="email"
                placeholder='Enter your email'
              />
              <S.EmailButton onClick={alert}>Sign Up</S.EmailButton>
              <S.MyFitRight>© 2020 - MyFit, All right are reserved</S.MyFitRight>
            </S.Footer>
          </Section>
        </ScrollingProvider>
      </S.Bg>
    );
  }
}
