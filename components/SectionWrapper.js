import React from "react";

const SectionWrapper = ({ children }) => {
  return <div className='section-wrapper sm:max-w-[640px] md:px-8 md:max-w-[768px] lg:max-w-[1024px] xl:min-w-[1200px] xl:w-[75vw] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto'>{children}</div>;
};

export default SectionWrapper;
