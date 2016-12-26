import React from 'react';
import ReactDom from 'react-dom';
import './index.less';

const Toast = ({ message }) => (
  <div className="toast">
    <div className="content">
      {message}
    </div>
  </div>
);

const initial = () => {
  const div = window.document.createElement('div');
  window.document.body.appendChild(div);

  const destroy = () => {
    ReactDom.unmountComponentAtNode(div);
  };

  const toast = (message, duration = 2) => {
    ReactDom.render(<Toast message={message} />, div);

    setTimeout(destroy, duration * 1000);
  };

  return {
    destroy,
    toast
  }
};

export default initial();