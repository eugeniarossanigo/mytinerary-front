import { useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
// import {Link as LinkRouter} from 'react-router-dom'

function ScrollToTop() {
    const { pathname } = useLocation()

    window.scrollTo(0,0)
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])
    
    return (
        <>
        </>
    );
}

export default ScrollToTop;
