import React, { Component } from 'react';
import BackTop from '../../back-to-top';
import './style/index.css';

export default class BackTopDemo extends Component {
  static defaultProps = {
    prefixCls: 'cr-back-top-demo',
  }

  render() {
    const { prefixCls } = this.props;
    return (
      <div style={{position:'fixed', height: '100%', width: '100%'}}>
        <div className={prefixCls}>
          <div className='fixed-box'>我是不滚动的部分</div>
          <div className='scroll-box'>
          <BackTop visibilityHeight='100'>
            <div className='scroll-list'>
              <div className='am-list'>
                <div className='artical'>
                  细看来，不是杨花，点点是离人泪。断送一生憔悴，只消几个黄昏。——赵令峙《清平乐》；<br/>
                  你不过惊艳了我的半载浮生，便自此以后让我求生不得，求死不能。<br/>
                  既不回头，何必不忘。既然无缘，何须誓言。今日种种，似水无痕。明夕何夕，君已陌路<br/>
                  终于为那一身江南烟雨覆了天下，容华谢后，不过一场，山河永寂。——寒呵《南唐旧梦：山河永寂》<br/>
                </div>
                <div className='artical'>
                  细看来，不是杨花，点点是离人泪。断送一生憔悴，只消几个黄昏。——赵令峙《清平乐》；<br/>
                  你不过惊艳了我的半载浮生，便自此以后让我求生不得，求死不能。<br/>
                  既不回头，何必不忘。既然无缘，何须誓言。今日种种，似水无痕。明夕何夕，君已陌路<br/>
                  终于为那一身江南烟雨覆了天下，容华谢后，不过一场，山河永寂。——寒呵《南唐旧梦：山河永寂》<br/>
                </div>
                <div className='artical'>
                  细看来，不是杨花，点点是离人泪。断送一生憔悴，只消几个黄昏。——赵令峙《清平乐》；<br/>
                  你不过惊艳了我的半载浮生，便自此以后让我求生不得，求死不能。<br/>
                  既不回头，何必不忘。既然无缘，何须誓言。今日种种，似水无痕。明夕何夕，君已陌路<br/>
                  终于为那一身江南烟雨覆了天下，容华谢后，不过一场，山河永寂。——寒呵《南唐旧梦：山河永寂》<br/>
                </div>
                <div className='artical'>
                  细看来，不是杨花，点点是离人泪。断送一生憔悴，只消几个黄昏。——赵令峙《清平乐》；<br/>
                  你不过惊艳了我的半载浮生，便自此以后让我求生不得，求死不能。<br/>
                  既不回头，何必不忘。既然无缘，何须誓言。今日种种，似水无痕。明夕何夕，君已陌路<br/>
                  终于为那一身江南烟雨覆了天下，容华谢后，不过一场，山河永寂。——寒呵《南唐旧梦：山河永寂》<br/>
                </div>
                <div className='artical'>
                  细看来，不是杨花，点点是离人泪。断送一生憔悴，只消几个黄昏。——赵令峙《清平乐》；<br/>
                  你不过惊艳了我的半载浮生，便自此以后让我求生不得，求死不能。<br/>
                  既不回头，何必不忘。既然无缘，何须誓言。今日种种，似水无痕。明夕何夕，君已陌路<br/>
                  终于为那一身江南烟雨覆了天下，容华谢后，不过一场，山河永寂。——寒呵《南唐旧梦：山河永寂》<br/>
                </div>
                <div className='artical'>
                  细看来，不是杨花，点点是离人泪。断送一生憔悴，只消几个黄昏。——赵令峙《清平乐》；<br/>
                  你不过惊艳了我的半载浮生，便自此以后让我求生不得，求死不能。<br/>
                  既不回头，何必不忘。既然无缘，何须誓言。今日种种，似水无痕。明夕何夕，君已陌路<br/>
                  终于为那一身江南烟雨覆了天下，容华谢后，不过一场，山河永寂。——寒呵《南唐旧梦：山河永寂》<br/>
                </div>
                <div className='artical'>
                  细看来，不是杨花，点点是离人泪。断送一生憔悴，只消几个黄昏。——赵令峙《清平乐》；<br/>
                  你不过惊艳了我的半载浮生，便自此以后让我求生不得，求死不能。<br/>
                  既不回头，何必不忘。既然无缘，何须誓言。今日种种，似水无痕。明夕何夕，君已陌路<br/>
                  终于为那一身江南烟雨覆了天下，容华谢后，不过一场，山河永寂。——寒呵《南唐旧梦：山河永寂》<br/>
                </div>
                <div className='artical'>
                  细看来，不是杨花，点点是离人泪。断送一生憔悴，只消几个黄昏。——赵令峙《清平乐》；<br/>
                  你不过惊艳了我的半载浮生，便自此以后让我求生不得，求死不能。<br/>
                  既不回头，何必不忘。既然无缘，何须誓言。今日种种，似水无痕。明夕何夕，君已陌路<br/>
                  终于为那一身江南烟雨覆了天下，容华谢后，不过一场，山河永寂。——寒呵《南唐旧梦：山河永寂》<br/>
                </div>
                <div className='artical'>
                  细看来，不是杨花，点点是离人泪。断送一生憔悴，只消几个黄昏。——赵令峙《清平乐》；<br/>
                  你不过惊艳了我的半载浮生，便自此以后让我求生不得，求死不能。<br/>
                  既不回头，何必不忘。既然无缘，何须誓言。今日种种，似水无痕。明夕何夕，君已陌路<br/>
                  终于为那一身江南烟雨覆了天下，容华谢后，不过一场，山河永寂。——寒呵《南唐旧梦：山河永寂》<br/>
                </div>
                <div className='artical'>
                  细看来，不是杨花，点点是离人泪。断送一生憔悴，只消几个黄昏。——赵令峙《清平乐》；<br/>
                  你不过惊艳了我的半载浮生，便自此以后让我求生不得，求死不能。<br/>
                  既不回头，何必不忘。既然无缘，何须誓言。今日种种，似水无痕。明夕何夕，君已陌路<br/>
                  终于为那一身江南烟雨覆了天下，容华谢后，不过一场，山河永寂。——寒呵《南唐旧梦：山河永寂》<br/>
                </div>
                <div className='artical'>
                  细看来，不是杨花，点点是离人泪。断送一生憔悴，只消几个黄昏。——赵令峙《清平乐》；<br/>
                  你不过惊艳了我的半载浮生，便自此以后让我求生不得，求死不能。<br/>
                  既不回头，何必不忘。既然无缘，何须誓言。今日种种，似水无痕。明夕何夕，君已陌路<br/>
                  终于为那一身江南烟雨覆了天下，容华谢后，不过一场，山河永寂。——寒呵《南唐旧梦：山河永寂》<br/>
                </div>
                <div className='artical'>
                  细看来，不是杨花，点点是离人泪。断送一生憔悴，只消几个黄昏。——赵令峙《清平乐》；<br/>
                  你不过惊艳了我的半载浮生，便自此以后让我求生不得，求死不能。<br/>
                  既不回头，何必不忘。既然无缘，何须誓言。今日种种，似水无痕。明夕何夕，君已陌路<br/>
                  终于为那一身江南烟雨覆了天下，容华谢后，不过一场，山河永寂。——寒呵《南唐旧梦：山河永寂》<br/>
                </div>
              </div>
            </div>
          </BackTop>
          </div>
            </div>
      </div>
    )
  }
}