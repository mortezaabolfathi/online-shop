import React from 'react';
import Footer from '../components/footer/footer';
import Navigation from './../components/Navigation/Navigation';

const LayOut = ({children}) => {
    return ( 
        <>
            <Navigation/>
            <div className='flex justify-center items-center  w-full '>
            {children}
            </div>
            <Footer/>
        </>
     );
}
 
export default LayOut;