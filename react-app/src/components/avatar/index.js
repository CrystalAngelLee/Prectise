import React, { Component } from 'react';
import classnames from 'classnames';

class Avatar extends Component {
  static displayName = 'Avatar';
  static defaultProps = {
    prefixCls: 'cr-avatar',
  }

  render() {
    const { prefixCls, url, name, className, style, type, gender } = this.props;
    let wrapCls = classnames(prefixCls, className);
    let genderCls = classnames({
      [`${prefixCls}-man`]: gender && gender === '0',
      [`${prefixCls}-woman`]: gender && gender === '1',
    })
    let defaultName = (
      <span>{name.substring(0, 1).toUpperCase()}</span>
    );
    let defaultGender = (
      <img className={genderCls} src=''/>
    )
    return (
      <div className={wrapCls} style={style}>
        
      </div>
    )
  }
}

export default Avatar