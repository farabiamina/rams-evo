import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

const Circle = ({letter}) => {
    return (
        <Controller>
            <Scene duration={400} triggerHook="onEnter">
                {(progress) => {
                    const opacity = progress; // Invert the progress value
                    const scale = progress; // Scale from 0.5 to 1 based on progress

                    return (
                        <div
                            className={`circle ${letter}`}
                            style={{
                                opacity,
                                transform: `scale(${scale})`,
                            }}
                        >
                            {letter}
                        </div>
                    );
                }}
            </Scene>
        </Controller>
    )
}

export default Circle