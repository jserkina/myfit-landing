import React, { Component } from 'react';
import { Reset } from 'reset-css';

import Picture from '../icons/banner.png';

import * as S from '../style/banner.js';

function Banner() {
  return (
    <div>
      <S.Bg>
        <S.Image src={Picture} />
        <S.Block>
          <S.Head>get 20% off</S.Head>
          <S.Text>we are currently out of stock! sign up to our newsletter and receive 20% off your first order when we are re-stock</S.Text>
          <S.EmailBlock
            type='email'
            id="email"
            name="email"
            placeholder='email address'
          />
          <S.Policy>
            <S.Checkbox
              type="checkbox"
              id="policy"
              name="policy"
            />
            <S.PolicyText for="policy">i accept the private policy</S.PolicyText>
          </S.Policy>
          <S.SignUp>sign up</S.SignUp>
        </S.Block>
      </S.Bg>
    </div>
  );
}

export default Banner;
