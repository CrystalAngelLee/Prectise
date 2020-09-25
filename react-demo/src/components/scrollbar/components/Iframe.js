import React, { PureComponent } from "react";
import ScrollBar from "./ScrollBar";
import PropTypes from "prop-types";

const prefixCls = "scroll-bar-iframe";

class IframeScroll extends PureComponent {
  static propTypes = {
    targetDom: PropTypes.string.isRequired,
    scrollWidth: PropTypes.number.isRequired,
    clientWidth: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      clientWidth: props.clientWidth || 0,
      scrollWidth: props.scrollWidth || 0,
    };
    this.window = window;
    this.document = document;
    this.targetElement = null;
    this.scrollBar = React.createRef();
    this.randomId = `scrollIrame_${Math.random().toString().slice(3, 9)}`;
  }

  componentDidMount() {
    this.getTargetDom();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.targetDom === this.props.targetDom && nextProps.scrollWidth !== this.props.scrollWidth) {
      this.calculateScrollWidth(nextProps.scrollWidth);
    }
  }

  // search targetDom in Irame
  getTargetDom = () => {
    const { targetDom, clientWidth, scrollWidth } = this.props;
    const iframe = document.querySelector(`#${this.randomId} > iframe`);
    const win = iframe.contentWindow;
    const doc = win.document;
    this.window = win;
    this.document = doc;

    this.targetElement = this.document.querySelector(targetDom);
    !clientWidth && this.calculateClientWidth();
    !scrollWidth && this.calculateScrollWidth();
  };

  // calculate clientWidth and scrollWidth
  calculateClientWidth = () => {
    this.setState({ clientWidth: this.targetElement.clientWidth });
  };

  calculateScrollWidth = scrollWidth => {
    this.setState({ scrollWidth: scrollWidth || this.targetElement.scrollWidth });
  };

  // bind event listener
  bindElemtListener = () => {
    this.document.removeEventListener && this.document.removeEventListener("scroll", this.onElementScroll);
    this.document.addEventListener("scroll", this.onElementScroll);
  };

  onElementScroll = e => {
    const target = e.target || e.srcElement;
    const scrollingElement = target.scrollingElement;
    this.scrollBar.current.onElementScroll(scrollingElement);
  };

  render() {
    const { children } = this.props;
    const { clientWidth, scrollWidth } = this.state;
    return (
      <div className={prefixCls} id={this.randomId}>
        {children}
        <ScrollBar ref={this.scrollBar} clientWidth={clientWidth} scrollWidth={scrollWidth} scrollDocument={this.document} targetElement={this.targetElement} bindElemtListener={this.bindElemtListener} />
      </div>
    );
  }
}

export default IframeScroll;
