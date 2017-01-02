import React from 'react';
import Style from './index.less';

const SectionTitle = ({ children }) => (
  <div className={Style.title}>
    {children}
  </div>
);

export default SectionTitle;
