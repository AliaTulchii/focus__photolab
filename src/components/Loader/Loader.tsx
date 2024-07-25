import React from 'react'
import "../../sass/components/_loader.scss";

interface LoaderProps {
    loaderStyle: string;
}

const Loader: React.FC<LoaderProps> = ({loaderStyle}) => {
  return (
    <div className={loaderStyle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
  )
}

export default Loader
