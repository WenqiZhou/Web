import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Image, Row, Col } from '11-common';
import HouseItem from '../../components/HouseItem';
import Style from './index.less';
import { modal } from './Modals';

// 分节标题
export const ActivityTitle = ({ title_single: title = {}, houses = {}, id }) => (
  <div id={id} className={classnames(Style.activity, Style.title)}>
    <span>{houses.title || title.title}</span>
  </div>
);

export const ActivityBanner = ({ image, text }) => (
  <div className={classnames(Style.activity, Style.banner)}>
    <Image src={`${image.url}_1615`} />
    {
      text ?
        <div className={Style.text}>
          <p>{text.content}</p>
        </div> : ''
    }
  </div>
);

export const ActivityHouse = (props) => {
  return (
    <HouseItem
      {...props}
      onClick={({ landlord = {} } = {}) => {
        modal({ landlord });
      }}
    />
  )
};

export const ActivityMoreHouse = ({ disabled }) => (
  <div className={Style.more}>
    <button
      className="page"
      onClick={() => {
        modal({});
      }}
    >查看更多房源</button>
  </div>
);

export class ActivityHouses extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    showMore: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
  };

  static defaultProps = {
    list: [],
    showMore: false
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // 如果给的不是详细列表,需要请求
  }

  getData = () => {

  };

  render() {
    return (
      <div className={classnames(Style.activity, Style.houses)}>
        {
          this.props.list.reduce((total, current, index) => {
            const i = Number.parseInt(index / 3, 10);
            total[i] = total[i] || [];
            total[i].push(current);

            return total;
          }, []).map((group, i) => (
            <Row space={24} key={i} className={Style.list}>
              {
                group.map((item, index) => (
                  <Col span={8} key={index}>
                    <ActivityHouse data={item} ai={this.props.ai} />
                  </Col>
                ))
              }
            </Row>
          ))
        }
        {
          this.props.showMore ? <ActivityMoreHouse /> : ''
        }
      </div>
    )
  }
}
