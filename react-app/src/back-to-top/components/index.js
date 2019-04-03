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

  BackTop = () => {
    console.log('AAA', document.getElementsByClassName('am-list')[0].offsetTop)
  }

  render() {
    const { prefixCls } = this.props;
    const { visible } = this.state;
    return (
      <div id='onScroll' style={{height: '100%'}} onScroll={this.onScroll}>
        {this.props.children}
        <div className={prefixCls} style={{ display: visible ? 'block' : 'none' }} onClick={this.BackTop}>
          <span style={{color: 'red'}}>BackTop</span>
        </div>
      </div>
    )
  }
}