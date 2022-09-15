import React, { useState, useEffect } from "react";
import styles from "./MapProperties.module.css";
const HangerTypeCard = ({ label, imageSource, isSelected, onClick, value }) => {
  return (
    <div onClick={() => onClick(value)} className='hanger-type-card' style={{ position: "relative" }}>
      <Icon
        className={`${styles.frameColorSelection} ${isSelected === true ? styles.frameCheck : ""}`}
        name='check'
        size='big'
        inverted
      />
      <div className={`py-2 px-1 frame-type-card ${isSelected === true ? styles.activeFrameColor : ""}`}>
        <div className='flex justify-center frame-type-image-wrapper'>
          <Image rounded src={imageSource} size='tiny' bordered />
        </div>
        <div className='text-center mt-2 frame-type-tile text-sm'>{label}</div>
      </div>
    </div>
  );
};

export default HangerTypeCard;
