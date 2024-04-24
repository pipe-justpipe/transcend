import React, { useState, useEffect } from 'react';

function Heading({ children, speed, txt }) {
  const [displayedText, setDisplayedText] = useState([]);
  const [index, setIndex] = useState(0);

  // Flatten children to handle text and elements separately
  const flattenChildren = (child) => {
    if (typeof child === 'string') {
      return child.split('').map((char) => ({ type: 'text', content: char }));
    } else if (React.isValidElement(child)) {
      return [{ type: 'element', content: child }];
    } else {
      return [];
    }
  };

  useEffect(() => {
    const allChildren = React.Children.toArray(children).flatMap(flattenChildren);
    if (index < allChildren.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => [...prev, allChildren[index]]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setDisplayedText([]);
        setIndex(0);
      }, 3000); 
    }
  }, [index, children, speed]);

  const renderContent = () => {
    return displayedText.map((item, idx) =>
      item.type === 'text' ? item.content : React.cloneElement(item.content, { key: idx })
    );
  };

  return (
    <h1 className="lg:text-[64px] font-medium lg:leading-[96px] md:leading-[96px] leading-[56px] lg:w-[488px] md:w-[390px] md:text-[48px] text-[27px] w-[210px] text-[#491d8b]" id="demo">
    <span>{txt}</span>{renderContent()}
  </h1>
  );
}

export default Heading;