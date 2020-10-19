import React, { Component } from 'react';
import './index.css';

export default class TestDemo extends Component {
  static defaultProps = {
    prefixCls: 'cr-test'
  }
  render() {
    const { prefixCls } = this.props
    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-example`}>
          <h3 className='title'>示例部分:</h3>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{width: 200, border: '1px solid red', borderRadius: 5, height: 300}}>
              <p>卡片内容</p>
            </div>
            <div style={{width: 200, border: '1px solid red', borderRadius: 5, height: 300}}>
              <p>卡片内容</p>
            </div>
            <div style={{width: 200, border: '1px solid red', borderRadius: 5, height: 300}}>
              <p>卡片内容</p>
            </div>
          </div>
        </div>
        <div className={`${prefixCls}-description`}>
          <h3 className='title'>说明部分</h3>
        </div>
        <div style={{textAlign: 'center'}}>点击进入下一步</div>
      </div>
    )
  }
}
