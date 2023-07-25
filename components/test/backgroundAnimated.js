import React, { useEffect, useState } from 'react';
import { mapIcon } from '@lib/mapIcon';

const MyComponent = () => {
  const [icons, setIcons] = useState([]);
  const iconSize = 120; // Increase the icon size
  const spacing = 28; // Increase the spacing between icons
  const iconNames = ['forest', 'leaf', 'bamboo', 'chemical', 'nuclear', 'trash', 'eolic'];
  let numCols = 0;
  let numRows = 0;

  useEffect(() => {
    const calculateNumIcons = () => {
      if (typeof window !== 'undefined') {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        numCols = Math.floor(screenWidth / (iconSize + spacing));
        numRows = Math.floor(screenHeight / (iconSize + spacing));

        return numCols * numRows;
      }
      return 0;
    };

    const numIcons = calculateNumIcons();
    const maxNumIcons = 60; // Set the maximum number of icons to display

    const newIcons = [];

    const availablePositions = [];
    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows; row++) {
        const x = col * (iconSize + spacing);
        const y = row * (iconSize + spacing);
        availablePositions.push({ x, y });
      }
    }

    for (let i = 0; i < Math.min(numIcons, maxNumIcons); i++) {
      const randomIndex = Math.floor(Math.random() * availablePositions.length);
      const position = availablePositions.splice(randomIndex, 1)[0];

      const iconName = iconNames[i % iconNames.length];
      const iconColor = '#588157';

      const movementX = Math.random() * 2 - 1; // Generate a random value between -1 and 1 for movementX
      const movementY = Math.random() * 2 - 1; // Generate a random value between -1 and 1 for movementY

      const icon = mapIcon(iconName, iconSize, iconColor);

      newIcons.push({ x: position.x, y: position.y, delay: 1000, icon, movementX, movementY });
    }

    setIcons(newIcons);

    const interval = setInterval(() => {
      setIcons(prevIcons => {
        const updatedIcons = prevIcons.map(icon => {
          let newX = icon.x + icon.movementX * 5;
          let newY = icon.y + icon.movementY * 5;

          if (typeof window !== 'undefined') {
            if (newX > window.innerWidth - iconSize) {
              newX = 0;
            }
            if (newY > window.innerHeight - iconSize) {
              newY = 0;
            }
          }

          return { x: newX, y: newY, delay: icon.delay, icon: icon.icon, movementX: icon.movementX, movementY: icon.movementY };
        });
        return updatedIcons;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
  };

  const iconStyle = {
    position: 'absolute',
    width: `${iconSize}px`,
    height: `${iconSize}px`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <div style={containerStyle}>
      {icons.map((icon, index) => (
        <div
          key={index}
          style={{
            ...iconStyle,
            top: `${icon.y}px`,
            left: `${icon.x}px`,
            transitionDelay: `${icon.delay}ms`,
            transform: `translate(${icon.x}px, ${icon.y}px)`,
          }}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  );
};

export default MyComponent;