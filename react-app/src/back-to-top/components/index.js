import React, { Component } from 'react';
import '../style/index.css';

export default class BackTop extends Component {
  static defaultProps = {
    prefixCls: 'cr-back-top',
  }
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  onScroll = (e) => {
    const { visibilityHeight } = this.props;
    let scrollTop = e.target.scrollTop;
    let boxHeight = e.target.offsetHeight;
    if (visibilityHeight && scrollTop * 1 > visibilityHeight * 1) {
      this.setState({visible: true})
    } else if (!visibilityHeight && Math.ceil(boxHeight / scrollTop) === 6) {
      this.setState({visible: true})
    } else {
      this.setState({visible: false})
    }
  }

  backTop = (rate, callback) => {
    const { target } = this.props;
    let doc = target || document.getElementById('onScroll').firstChild;
    let scrollTop = doc.scrollTop;
    let top = () => {
      scrollTop = scrollTop + (0 - scrollTop) / (rate * 1 || 3);
      // 临界判断，终止动画
      if (scrollTop < 1) {
          scrollTop = 0;
          return;
      }
      doc.scrollTop = scrollTop;
      // 动画!
      requestAnimationFrame(top);    
    };
    top();
    if (callback) callback();
  }

  render() {
    const { prefixCls, rate, clickfun } = this.props;
    const { visible } = this.state;
    return (
      <div id='onScroll' style={{height: '100%'}} onScroll={this.onScroll}>
        {this.props.children}
        <div className={prefixCls} style={{ display: visible ? 'block' : 'none' }} onClick={() => this.backTop(rate, clickfun)}>
          <span style={{color: 'red'}}>BackTop</span>
        </div>
      </div>
    )
  }
}