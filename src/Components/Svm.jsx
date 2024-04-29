import React, { useEffect, useState } from 'react';

const Svm = ({ imgSrc, head, paragraph, widt }) => {
  // State to store the computed styles
  const [pStyle, setPStyle] = useState({ width: widt, fontSize: '12px', lineHeight: '40px' });

  // Function to update styles based on the screen size
  const updateStyles = () => {
    const screenWidth = window.innerWidth;
    let newFontSize = '12px';
    let newWidth = widt;

    if (screenWidth >= 280 && screenWidth < 1024) {
      newFontSize = '16px';
      newWidth = '75%'; // Example value
    } else if (screenWidth >= 1024) {
      newFontSize = '20px';
      newWidth = widt; 
    }

    setPStyle({ width: newWidth, });
  };

  // Set up an event listener to watch for window resizing
  useEffect(() => {
    updateStyles(); // Set styles initially
    window.addEventListener('resize', updateStyles); // Add event listener

    return () => window.removeEventListener('resize', updateStyles); // Clean up listener
  }, []);

  return (
    <div>
      <div className='flex items-center pb-[5px] border border-b-[3px] mt-[20px] border-t-0 border-l-0 border-r-0 border-[#A56EFF] w-fit'>
        <img src={imgSrc} alt={head} className='lg:w-[37.19px] md:w-[30.19px] md:h-[30.19px] lg:h-[37.19px] w-[24px] h-[24px]' />
        <h1 className='text-[20px] lg:text-[32px] md:text-[26px] leading-[40px] font-[400] text-[#491D8B]'>{head}</h1>
      </div>
      <p style={pStyle} className='lg:text-[20px] md:text-[16px] text-[12px] leading-[40px] '>{paragraph}</p>
    </div>
  );
}

export default Svm;
