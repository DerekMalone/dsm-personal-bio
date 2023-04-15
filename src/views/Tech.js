import React from 'react';
import TechDetails from '../components/TechDetails';

// const Techbox = styled.div`
//  .title-style {
//    justify-content: center;
//    margin 10px 40%;
//    color: #F2CC8F;
//  }
// `;

export default function Tech() {
  return (
    <article className="main-content">
      <h1 className="title-style">Tech Stacks</h1>
      <TechDetails />
    </article>
  );
}
