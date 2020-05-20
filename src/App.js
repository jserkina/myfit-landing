import React from 'react';
import { Reset } from 'reset-css';
import Leaf from './Leaf.svg'


import * as S from './style.js';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <S.Hero></S.Hero>
      <img src={Leaf} />
      <S.Benefits>
        <S.Caption>
          <S.TextBold>Why MyFit?</S.TextBold>
          <S.CaptionText>We are a UK company looking to revolutionise the way we workout! Resistance bands are cool - but they’re a lot cooler when they’ve been created and designed to allow you to replicate nearly all gym workouts. We’ve managed to create resistance from the comfort of your own home without compromising on your workout goals.</S.CaptionText>
        </S.Caption>
        <S.Content>
          <S.Card>
            <S.CardText>If you are allergic to latex, we would advise consulting.</S.CardText>
          </S.Card>
          <S.Card>
            <S.CardText>For the 2nd one, can you create a symbol that represents a phone, that box will be used to talk about the app.</S.CardText>
          </S.Card>
          <S.Card>
            <S.CardText>the symbol should be related to quality control, - represents ‘number 1’.</S.CardText>
          </S.Card>
        </S.Content>
      </S.Benefits>
      <S.VideoBlock></S.VideoBlock>
      <S.App></S.App>
      <S.Bottom></S.Bottom>
      <S.Footer></S.Footer>
    </div>
  );
}

export default App;
