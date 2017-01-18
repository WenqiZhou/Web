import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import { Modal } from '11-desktop';
import Style from './index.less';

class ModalContact extends Component {
  static propTypes = {
    landlord: PropTypes.object // 房东联系方式
  };

  static defaultProps = {
    landlord: {}
  };

  render() {
    const { landlord } = this.props;
    const ai = parseInt(location.pathname.substring(location.pathname.lastIndexOf('/') + 1), 10);
    if (ai && ai === 20170107) {
      return (
        <Modal visible onClose={this.props.destroy} title="依依短租">
          <div className={Style.modal}>
            <p>
              聚会轰趴房还有2000套，拨打电话为您私人订制<br />400-636-9633
            </p>
            <button onClick={this.props.destroy} className="button">确定</button>
          </div>
        </Modal>
      )
    }
    if (landlord && landlord.bigcode400) {
      return (
        <Modal visible onClose={this.props.destroy} title="依依短租">
          <div className={Style.modal}>
            <p>
              同类精美民宿还有10000家，拨打电话为您私人订制，<br />
              <span style={{ color: '#ffa900' }}>{landlord.bigcode400} 转 {landlord.extension}</span>
            </p>
            <button onClick={this.props.destroy} className="button">确定</button>
          </div>
        </Modal>
      )
    }
    return (
      <Modal visible onClose={this.props.destroy} title="依依短租">
        <div className={Style.modal}>
          <p>
            同类精美民宿还有10000家，拨打电话为您私人订制，<br />
            <span style={{ color: '#ffa900' }}>400-636-9633</span>
          </p>
          <button onClick={this.props.destroy} className="button">确定</button>
        </div>
      </Modal>
    )
  }
}

const initial = () => {
  if (typeof window !== 'object') return {};

  const div = window.document.createElement('div');
  window.document.body.appendChild(div);

  const destroy = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    ReactDom.unmountComponentAtNode(div);
  };

  const modal = (props) => {
    ReactDom.render(<ModalContact {...props} destroy={destroy} />, div);
  };

  return {
    modal,
    destroy
  }
};

export default initial();
