'use client';

import React from 'react';
import Clock from 'react-live-clock';  

const ClockWrapper: React.FC = () => {
    return (
        <div>
            <span> TRD </span>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Oslo'} />
            </div>
    )
}  
export default ClockWrapper