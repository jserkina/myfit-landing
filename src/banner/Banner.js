import React, { Component } from 'react';
import { Reset } from 'reset-css';
import { render } from 'react-dom'
import Checkbox from './Checkbox.js'

import Picture from '../icons/banner.png';
import Close from '../icons/Close.png';


import * as S from './style.js';


class Banner extends React.Component {
  state = { checked: false }

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
  }

  render() {
    return (
    <div>
      <S.Bg>
        <S.Image src={Picture} />
        <S.Block>
          <S.Box src={Close} />
          <S.Head>get 20% off</S.Head>
          <S.Text>we are currently out of stock!<br /> sign up to our newsletter<br /> and receive 20% off your first order when we are re-stock</S.Text>
          <S.EmailBlock
            type='email'
            id="email"
            name="email"
            placeholder='email address'
          />
          <S.Policy>
            <label>
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              <S.PolicyText>i accept the private policy</S.PolicyText>
            </label>
          </S.Policy>
          <S.SignUp>sign up</S.SignUp>
        </S.Block>
      </S.Bg>
    </div>
  );
  }
}

export default Banner;
