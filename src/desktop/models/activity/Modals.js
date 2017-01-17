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
    const { landlord, ai } = this.props;
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
    if (landlord) {
      return (
        <Modal visible onClose={this.props.destroy} title="依依短租">
          <div className={Style.modal}>
            <p>
              {`如需预定房源，请拨打${landlord.bigcode400 ? '' : '客服'}电话进行预订`}<br />
              {landlord.bigcode400 ? `${landlord.bigcode400}${landlord.extension ? ` 转 ${landlord.extension}` : ''}` : '400-636-9633'}
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
            我们为您准备了10000+精品民宿，拨打400-636-9633，<br />依依民宿管家就在您的身边
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
