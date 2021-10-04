import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'GK-App | Sportsperson Personal and Professional Development',
  description: 'To help and inspire athletes to reach their full potential',
  keywords:
    'soccer, goalkeeper training, inspire athletes, help athletes, full potential, mental training, physical training, soccer training, goalkeeper, fitness, mental training, soccer tactical, soccer technical, soccer fitness, soccer mental',
};

export default Meta;
