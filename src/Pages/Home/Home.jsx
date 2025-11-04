import React from 'react';
import Section from './Section';
import Section1 from './Section1';
import Section2 from './Section2';

import '../../Style.css/HomeStyle.css';
import '../../Style.css/Header.css';
import '../../Style.css/Footer.css';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Cart from './Cart';

function Home() {
  return (
    <main>
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Cart />
    </main>
  );
}

export default Home;
