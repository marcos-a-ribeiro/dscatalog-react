import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader = () => (
  <div className='card-loader-container'>
    <ContentLoader
      speed={2}
      width={320}
      height={460}
      viewBox="0 0 320 460"
      backgroundColor="#fff"
      foregroundColor="#acabab"
    >
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="-2" y="57" rx="3" ry="3" width="300" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    </ContentLoader>
  </div>
);

export default CardLoader;
