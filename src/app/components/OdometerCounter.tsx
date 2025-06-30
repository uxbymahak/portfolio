// components/OdometerCounter.js
'use client'; // For Next.js 13+ with app directory or if needed

import { useEffect, useRef, useState } from 'react';
import Odometer from 'odometer';

const OdometerCounter = ({ value }) => {
    const odometerRef = useRef(null);
    const [od, setOd] = useState(null);

    useEffect(() => {
        if (odometerRef.current && !od) {
            const odInstance = new Odometer({
                el: odometerRef.current,
                value: 0,
                format: '(,ddd)',
                duration: 2000
            });
            setOd(odInstance);
        }
    }, [od]);

    useEffect(() => {
        if (od) {
            od.update(value);
        }
    }, [value, od]);

    return (
        <span ref={odometerRef} className="odometer" />
    );
};

export default OdometerCounter;
