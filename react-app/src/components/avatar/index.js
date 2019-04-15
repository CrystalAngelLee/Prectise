import React, { Component } from 'react';
import classnames from 'classnames';
import './index.css';

class Avatar extends Component {
  static displayName = 'Avatar';
  static defaultProps = {
    prefixCls: 'cr-avatar',
  }

  constructor(props) {
    super(props);
    this.type = props.type || 0;
    this.gender = props.gender || 0;
    this.url = props.url || '';
    console.log('props',props, props.type === '1');
  }

  content = () => {
    const { prefixCls, name } = this.props;
    let genderCls = classnames({
      [`${prefixCls}-man`]: this.gender * 1 === 0,
      [`${prefixCls}-woman`]: this.gender * 1 === 1,
    })
    let renderContent;
    if (this.url !== '') {
      renderContent = <img className={`${prefixCls}-img`} src={this.url} alt='' />
    } else {
      if (this.type * 1 === 1) {
        renderContent = <span>{name.substring(0, 1).toUpperCase()}</span>
      } else {
        renderContent = <img className={genderCls} src={this.gender === 0 ? require('./imgs/man.jpg') : require('./imgs/woman.jpg')} alt='' />
      }
    }
    return renderContent;
  }

  render() {
    const { prefixCls, className, style } = this.props;
    let wrapCls = classnames(prefixCls, className);
    return (
      <div className={wrapCls} style={style}>
        {this.content()}
      </div>
    )
  }
}

export default Avatar