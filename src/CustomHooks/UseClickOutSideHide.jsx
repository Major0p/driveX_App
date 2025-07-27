import React, { useRef, useEffect } from 'react'

export default function UseClickOutSideHide(callback) {
    const domNodeRef = useRef(null);

    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (domNodeRef.current && domNodeRef.current.contains(event.target))
                callback();
        }

        document.addEventListener("mousedown", handleOutSideClick);

        return () => document.removeEventListener('mousedown', handleOutSideClick)

    }, [callback]);

    return domNodeRef;
}
