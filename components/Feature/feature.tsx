import React from 'react';
import Hero from './Hero/hero';

export default () => {
  return (
    <div>
      <Hero
        title='Premium Materials'
        details='Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.'
      />
      <Hero
        title='Fast Shipping'
        details='We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.'
      />
      <Hero
        title='Quality Assurance'
        details='For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.'
      />
    </div>
  );
};
