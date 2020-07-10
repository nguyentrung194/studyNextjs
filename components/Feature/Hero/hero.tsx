import React from 'react';

export interface Hero {
  title: string;
  details: string;
}

export default (props: Hero) => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.details}</p>
    </>
  );
};
