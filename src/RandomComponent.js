import React, { useState } from 'react';

export default function RandomComponent() {
    const [text, setText] = useState('lel');

    return (
        <div>
            {text}
        </div>
    );
}