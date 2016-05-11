import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox';
import List from '../list';
function noop() {}

export default class CheckboxItem extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-checkbox',
    listPrefixCls: 'am-list',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
  };

  render() {
    const { prefixCls, listPrefixCls, style, name, checked, disabled, children, className, onChange, value, ...others } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [className]: className
    });

    return (<List.Item
      prefixCls={listPrefixCls}
      {...others}
      style={style}
      className={wrapCls}
      thumb={<Checkbox
        defaultChecked={checked}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />}
    >{children}</List.Item>);
  }
}