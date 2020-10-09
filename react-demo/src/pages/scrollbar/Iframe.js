import React, { PureComponent } from "react";

const f = v => {
  // 判断内容中是否有图片
  let imgReg = /<img.*?(?:>|\/>)/gi;
  let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/gi;
  if (imgReg.test(v)) {
    v = v.replace(srcReg, m => `data-src${m.slice(3)}`)
  }

  return v.replace(
    /<a[^>]*[^>]*>(.*?)<\/a>/g,
    m => `<a target="_blank" ${m.slice(3)}`,
  );
}
 

export default class IframeComp extends PureComponent {
  constructor(props) {
    super(props);
    this.iframe = React.createRef();
    this.state = {
      width: 0,
      height: 0,
      loading: false,
    };
  }

  componentDidMount() {
    const { content } = this.props;
    this.setContent(content);
  }

  setContent = value => {
    const frame = this.iframe.current;
    const win = frame.contentWindow;
    const doc = win.document;
    if (typeof value === "string") {
      doc.write(`
        <html>
          <head>
            <style>
              table {border-collapse: collapse;}
              body::-webkit-scrollbar {width: 0; height: 0;}
            </style>
          </head>
          <body style="overflow-y:hidden"></body>
        </html>
      `);
      doc.body.innerHTML = f(value);
    }

    const imgs = doc.getElementsByTagName("img");
    let imgLoaded = 0;
    this.setState({ loading: true });
    this.props.onLoad({ loading: true });
    const onOk = () => {
      imgLoaded++;
      if (imgLoaded === imgs.length || imgs.length === 0) {
        const { scrollWidth = 0, offsetWidth = 0, scrollHeight = 0, offsetHeight = 0 } = doc.documentElement;
        this.props.onSetScrollWidth(scrollWidth || offsetWidth);
        this.props.onLoad(false);
        this.setState({
          width: scrollWidth || offsetWidth,
          height: (scrollHeight || offsetHeight) + 20,
          loading: false,
        });
      }
    };

    !imgs || imgs.length === 0
      ? onOk()
      : Array.prototype.forEach.call(imgs, img => {
          img.src = img.getAttribute('data-src')
          const i = img;
          i.onload = onOk;
          i.onerror = onOk;
        });
  };

  render() {
    const { height } = this.state;
    return <iframe src="javascript:document.open();document.close();" ref={this.iframe} title="testScroll" height={height} width="100%" />;
  }
}
