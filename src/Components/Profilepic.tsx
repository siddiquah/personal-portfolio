import React, { useEffect, useState } from 'react';

function Profilepic() {
    const [style, setStyle] = useState<React.CSSProperties>({});

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const container = document.getElementById('image-container');
            if (!container) return;

            const { width, height, top, left } = container.getBoundingClientRect();

            // Calculate cursor's position relative to the center of the container
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const posX = clientX - centerX;
            const posY = clientY - centerY;

            // Increased multipliers for a more noticeable effect
            const rotateX = (posY / height) * 10; // Adjust multiplier for vertical tilt
            const rotateY = (-posX / width) * 10; // Adjust multiplier for horizontal tilt

            // Update the transformation style with a faster transition
            setStyle({
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.3s ease-out' // Faster transition for quicker tilting
            });
        };

        // Add event listener to the window
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div id='image-container' className='fixed w-full h-full overflow-hidden'>
            {/* Background image */}
            <img src="/bg.png"
                className='mt-[90px] w-fit h-full object-cover z-0'
                alt="Background" />

            {/* Overlay image */}
            <img src='/girl.png'
                className='absolute top-[25px] left-0 w-fit h-full object-cover z-10'
                style={style}
                alt="Girl" />
        </div>
    );
}

export default Profilepic;
