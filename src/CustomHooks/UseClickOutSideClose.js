import React, { useEffect, useRef } from 'react'

export default function useClickOutSideClose(close) {
    const ref = useRef(null);

    useEffect(()=>{

        const handleClick = (e)=>{
            if( ref.current && !ref.current.contains(e.target))
                close();
        };

        document.addEventListener('mousedown',handleClick);

        return ()=> document.removeEventListener('mousedown',handleClick);

    },[close]);

    return ref;
}
