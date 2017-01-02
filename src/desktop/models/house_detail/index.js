import React, { Component } from 'react';
import classnames from 'classnames';
import { Image, Row, Col, Stars, Input } from '11-common';
import { Nav } from '11-desktop';
import { redirect } from '11-utils';
import Style from './index.less';

export default class DesktopHousesDetail extends Component {
  goBook = () => {
    redirect.go(`/book/${this.props.id}?start=${new Date().getTime()}&end=${new Date().getTime()}&people=2`);
  };

  render() {
    const { data } = this.props;
    const { images = [] } = data;
    return (
      <div className={classnames('lg-only', Style.detail)}>
        <Nav search black className={classnames(Nav.Style.index, 'dashboard')} />
        <div className={Style.banner}>
          <Image src={`${(images[0] || {}).image_url}_1615`} />
          <div className={classnames(Style.container, Style['price-wrapper'])}>
            <div className={Style.price}>
              {data.price}元／<span>晚</span>
            </div>
          </div>
        </div>
        <div className="white">
          <div className={Style.container}>
            <Row>
              <Col className={Style.left}>
                <div className={classnames(Style.info, Style.basic)}>
                  <div className={Style.brand}>
                    <a>依依短租</a>
                    {
                      [data.baidu_city, data.baidu_district].map((name, i) => (
                        <a key={i} disabled={i === 1}>{name}短租房</a>
                      ))
                    }
                  </div>
                  <p title={data.title} className={Style.title}>
                    {data.title}
                  </p>
                  <div className={Style.extra}>
                    <p><span>{data.baidu_city},{data.baidu_district}</span></p>
                    <p><Stars stars={data.score} /></p>
                    <p>
                      <a
                        className={
                          classnames({
                            icon: true,
                            like: !data.is_liked,
                            liked: data.is_liked
                          })
                        }
                      />
                      {data.like_count}
                    </p>
                  </div>
                  <ul className={Style.type}>
                    <li>
                      <span className="icon type house" />
                      整套房间
                    </li>
                    <li>
                      <span className="icon devices people" />
                      4位房客
                    </li>
                    <li>
                      <span className="icon devices bedroom" />
                      2间卧室
                    </li>
                    <li>
                      <span className="icon devices bed" />
                      2个床位
                    </li>
                  </ul>
                </div>
              </Col>
              <Col className={Style.right}>
                <aside className={classnames(Style.side, Style.book)}>
                  <ul className={Style.times}>
                    <li>
                      <div className="title">
                        入住
                      </div>
                      <Input />
                    </li>
                    <li>
                      <div className="title">
                        退房
                      </div>
                      <Input />
                    </li>
                    <li>
                      <div className="title">
                        房客
                      </div>
                      <Input />
                    </li>
                  </ul>
                  <button onClick={this.goBook} className={classnames('button', Style['book-btn'])}>
                    申请预定
                  </button>
                  <button className={classnames('button page', Style['status-btn'])}>
                    查看可租状态
                  </button>
                </aside>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
