import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const prefixCls = "scroll-bar";

class ScrollBar extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    clientWidth: PropTypes.number.isRequired,
    scrollWidth: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: props.clientWidth < props.scrollWidth,
      clientWidth: props.clientWidth,
      scrollWidth: props.scrollWidth,
      slider: 0,
    };
    this.scrollDocument = props.scrollDocument || document;
    this.sliderX = React.createRef();
    this.sliderXbar = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    this.setVisible(nextProps);
  }

  setVisible = (props, bool) => {
    const { clientWidth, scrollWidth } = props || this.props;
    let visible = clientWidth < scrollWidth;

    this.setState({ visible: bool || visible, clientWidth, scrollWidth });
  };

  initailSilder = () => {
    this.props.targetElement.addEventListener("scroll", this.handleScroll);
    this.sliderX.current.addEventListener("mouseover", this.hoverSrollXBar);
  };

  handleScroll = el => {
    console.log("handleScroll");
    // const e = el;
    // const target = e.target || e.srcElement;
    // // 主要是为了区分是垂直滚动还是横向滚动
    // const scrollAreaValue = this._targetElem.scrollWidth;
    // const clientAreaValue = this._targetElem.clientWidth;
    // const scrollValue = this._targetElem.scrollLeft;
    // this.calcSize(); // 每次滚动的时候重新计算滚动条尺寸，以免容器内容发生变化后，滚动条尺寸不匹配变化后的容器宽高
    // const distance = (scrollValue * clientAreaValue) / scrollAreaValue; // 根据公式二计算滚动条浮标应该移动距离
    // this.scrollXBar.style.transform = `translateX(${distance}px)`;
    // this.setState({ scrollLeft: target.scrollLeft });
  };

  hoverSrollXBar = () => {
    console.log("hoverSrollXBar");
    // const sA = this._targetElem.scrollWidth;
    // const cA = this._targetElem.clientWidth;
    // // 达到展示滚动条条件时
    // if (sA > cA) {
    //   //     this.scrollXBar.style[style] = cA * cA / sA + 'px'; // 设置滚动条长度
    //   //     // this.scrollXBar.className += ' is-show';
    //   this.scrollXBar.addEventListener("mousedown", this.clickStart);
    //   this.scrollX.addEventListener("mouseout", this.hoverOutSroll);
    // }
  };

  calculateSilder = () => {
    const { clientWidth, scrollWidth } = this.state;
    let slider = (clientWidth * clientWidth) / scrollWidth;
    this.setState({ slider });
  };

  render() {
    const { visible } = this.state;
    const { clientWidth, scrollWidth } = this.props;
    if (clientWidth >= scrollWidth) return null;

    return (
      <div className={classnames({ [`${prefixCls}-slider`]: visible })}>
        <div className={`${prefixCls}-slider-outer`} ref={this.sliderX}>
          <div className={`${prefixCls}-slider-inner`} ref={this.sliderXbar} />
        </div>
      </div>
    );
  }
}

export default ScrollBar;
