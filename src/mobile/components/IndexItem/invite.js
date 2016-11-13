import React from 'react';
import './index.less';

const INVITETYPEItem = ({ data }) => {
  const { invite } = data;
  return (
    <section className="activity invite">
      <div className="image">
        <img src={`${invite.thumbImage}_750`} alt={invite.title} />
      </div>
      <div className="contents">
        <div className="title">{invite.title}</div>
        <div className="subtitle">{invite.content}</div>
      </div>
    </section>
  )
};

export default INVITETYPEItem;
