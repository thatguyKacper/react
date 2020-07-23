import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { listData, settings } from '../../data/dataStore';

const FAQ = () => {
  const { title, image } = listData;
  const { siteTitle, description } = settings.faq;
  return (
    <Container>
      <Hero titleText={title} image={image} />
      <h2>{siteTitle}</h2>
      <p>{description}</p>
    </Container>
  );
};

export default FAQ; 