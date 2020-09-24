import React, { PureComponent } from "react";
import ScrollBar from "./ScrollBar";
import PropTypes from "prop-types";

const prefixCls = "scroll-bar-iframe";
const randomId = `scrollIrame_${Math.random().toString().slice(3, 9)}`;

class IframeScroll extends PureComponent {
  static propTypes = {
    targetDom: PropTypes.string.isRequired,
    scrollWidth: PropTypes.number.isRequired,
    clientWidth: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      clientWidth: props.clientWidth || 0,
      scrollWidth: props.scrollWidth || 0,
    };
    this.document = document;
    this.targetElement = null;
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
    const iframe = document.querySelector(`#${randomId} > iframe`);
    const win = iframe.contentWindow;
    const doc = win.document;
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

  render() {
    const { children } = this.props;
    const { visible, clientWidth, scrollWidth } = this.state;
    return (
      <div className={prefixCls} id={randomId}>
        {children}
        <ScrollBar visible={visible} clientWidth={clientWidth} scrollWidth={scrollWidth} scrollDocument={this.document} targetElement={this.targetElement} />
      </div>
    );
  }
}

export default IframeScroll;
