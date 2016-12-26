import React from 'react';
import { Image } from '11-common';
import './index.less';

const ACTIVITYNEWTYPEItem = ({ data }) => {
  const { activity_new: activity } = data;
  return (
    <section className="activity" id={activity.activity_id}>
      <div className="image">
        <Image src={`${activity.images[0].image_url}_750`} alt={activity.title} />
      </div>
      <div className="contents">
        <div className="title">{activity.title}</div>
        <div className="subtitle">{activity.sub_title}</div>
      </div>
    </section>
  )
};

export default ACTIVITYNEWTYPEItem;
