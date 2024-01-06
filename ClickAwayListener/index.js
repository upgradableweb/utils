import { useEffect, useRef } from 'react';

export default function ClickAwayListener({ children, className, onClickAway,style, ...props }) {

    const containerRef = useRef(null);
    useEffect(() => {
        const handle = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                onClickAway();
            }
        };

        document.addEventListener('mousedown', handle);

        return () => {
            document.removeEventListener('mousedown', handle);
        };
    }, [onClickAway]);

    return <div ref={containerRef} className={className} style={style} {...props}>{children}</div>;
};
