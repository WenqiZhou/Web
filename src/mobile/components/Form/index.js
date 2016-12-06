// 移动端表单组件 具体表现形式为输入框连在一起 中间用divid分割 用于登录页以及个人资料修改
import React, { Component, PropTypes, cloneElement, createElement } from 'react';
import classnames from 'classnames';
import './index.less';

export default class MobileForm extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  constructor(props) {
    super(props);

    const { fields, children } = this.getFieldsList(props.children);

    this.children = children;

    this.state = {
      fields
    };
  }

  onChildrenInput = (key, callback) => (e) => {
    const cb = (value) => {
      this.setState({
        fields: {
          ...this.state.fields,
          [key]: {
            ...(this.state.fields[key] || {}),
            value
          }
        }
      });
    };

    if (typeof callback !== 'function') {
      callback = (event) => cb(event.target.value);
    }

    callback(e, cb);
  };

  setValues = (obj) => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...obj
      }
    });
  };

  getValues = (name = this.getAllKeys()) => {
    if (typeof name !== 'object') {
      name = [name];
    }

    return name.reduce((total, key) => {
      total[key] = this.state.fields[key].value;

      return total;
    }, {});
  };

  getAllKeys = () => {
    return Object.keys(this.state.fields).filter(key => typeof key === 'string' && !key.match('Symbol'));
  };

  getFieldsList = (items) => {
    if (!(items instanceof Array)) {
      items = [items];
    }

    return items.reduce((total, current) => {
      const key = current.key || Symbol(current.value).toString();

      total.fields[key] = {
        value: current.props.value,
        readOnly: current.props.readOnly,
        disabled: current.props.disabled
      };

      total.children.push(cloneElement(current, {
        key
      }));

      return total;
    }, { fields: {}, children: [] });
  };

  handleClear = (key) => () => {
    this.setState({
      fields: {
        ...this.state.fields,
        [key]: {
          ...this.state.fields[key],
          value: null
        }
      }
    })
  };

  form = {
    setValues: this.setValues,
    getValues: this.getValues,
    getAllKeys: this.getAllKeys
  };

  // 提取出children中的信息写入
  renderChildren = (items = this.props.children) => {
    // console.log(children);

    return items.reduce((total, element) => {
      const { key, props, ref, type } = element;
      const { readOnly, disabled, onChange, initialValue, value } = props;

      const inputAble = !readOnly && !disabled;

      let val = value || this.state.fields[key].value;

      if (readOnly) {
        val = initialValue;
      }

      total.push(cloneElement(element, {
        key,
        readOnly,
        disabled,
        value: val || '',
        handleClear: this.handleClear(key),
        ...props,
        ...inputAble ? { onChange: this.onChildrenInput(key, onChange) } : {}
      }));

      return total;
    }, [])
  };

  render() {
    return createElement('form', {
      className: classnames({
        mobile: true,
        form: true,
        [this.props.className]: true
      }),
      children: this.renderChildren(this.children)
    });
  }
}
