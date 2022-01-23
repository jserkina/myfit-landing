import React, { useState } from 'react';
import { Reset } from 'reset-css';
import { Link } from "react-router-dom";

import Twitter from '../icons/Twitter.svg';
import Facebook from '../icons/Facebook.svg';
import Instagram from '../icons/Instagram.svg';
import FullKit from '../icons/FullKit.jpg';

import * as S from '../style/contact.js';

function ContactUs() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thanks for your question ' + inputs.name + ', we will answer you to ' + inputs.email );
  }

    return (
    <S.Bg>
      <S.Main>
        <S.FullKitStyle src={FullKit} alt='MYFIT Full Kit' />
        <S.ContactBox>
          <S.Header>Question still not answered?</S.Header>
          <S.HeadText>We love to hear from our customers about anything! Want to become an ambassador, a MYFIT retailer or a question about our app get in touch below.</S.HeadText>
          <S.ContactForm onSubmit={handleSubmit}>
            <S.Input
              type='text'
              name='name'
              placeholder='Name'
              value={inputs.name}
              onChange={handleChange}
            />
            <S.Input
              type='text'
              name='number'
              placeholder='Order number'
              value={inputs.number}
              onChange={handleChange}
            />
            <S.Input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              value={inputs.email}
              onChange={handleChange}
            />
            <S.Input
              type='tel'
              name='phone'
              placeholder='Phone'
              value={inputs.phone}
              onChange={handleChange}
            />
            <S.Select
              value={inputs.select}
              onChange={handleChange}>
              <option disabled>Type of Questions</option>
              <option value='MYFIT PRODUCTS'>MYFIT PRODUCTS</option>
              <option value='MYFIT APP'>MYFIT APP</option>
              <option value='WHOLESALE'>WHOLESALE</option>
              <option value='AMAZON ORDER'>AMAZON ORDER</option>
              <option value='MYFIT E-COMMERCE'>MYFIT E-COMMERCE</option>
              <option value='AFFILIATE PROGRAMME'>AFFILIATE PROGRAMME</option>
            </S.Select>
            <S.TextArea
              rows='5'
              name='text'
              placeholder='Your Question'
              value={inputs.text}
              onChange={handleChange}
            />
            <S.FormButton type='submit' value="Submit" />
          </S.ContactForm>
        </S.ContactBox>
        <S.HeadText><Link style={{ color: 'black', textDecoration: 'none'}} to="/">Come back</Link></S.HeadText>
      </S.Main>
    </S.Bg>
  );

}

export default ContactUs;
