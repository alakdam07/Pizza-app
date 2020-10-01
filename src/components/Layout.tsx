import React from 'react';
import { Link } from 'gatsby'
import Nav from './Nav';
import Footer from './Footer';

interface Props {
  children: JSX.Element[];
}

const Layout = ({ children }: Props) => {

  return (
    <div>
      <Nav />
      { children}
      <Footer />
    </div>
  )
}

export default Layout;
