import React from 'react'
import { useLocation } from 'react-router-dom';
import News from './components/News';

const NewsRouter = () => {
    let location = useLocation();
    let pathname = location.pathname.slice(1);
    
    return <News key={pathname} />;
  }

export default NewsRouter