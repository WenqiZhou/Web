import React, { Component } from 'react';

export default class IndexActivityItems extends Component {
  parseData = (data, type) => {
    console.log(data, type, typeof type)
    switch (type) {
      case 6: {
        return data.activity_new;
      }
      default: {
        return data.activity;
      }
    }
  };

  render() {
    const data = this.parseData(this.props.data, this.props.type);
    return (
      <div className="activity item">
        <div>
          {data ? <img src={`${data.images[0].image_url}_750`} alt={data.title} /> : '' }
        </div>
      </div>
    );
  }
}
