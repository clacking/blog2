import { useAmp } from 'next/amp';
import React from 'react';

export const config = { amp: 'hybrid' }

export default function Iframe (props) {
    const isAmp = useAmp();

    return isAmp ? (
        <>
            <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
            <amp-iframe {...props} />
        </>
    ) : (
        <iframe {...props} />
    )
}
