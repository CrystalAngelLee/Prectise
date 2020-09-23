import React, { PureComponent } from "react";

const image = require("./大图_.jpg");

const Content = `
  <div id="wea_rich_text_default_font" style="font-size:12px;">
    <p>
      &nbsp;
      <img alt="" src="${image}" class="formImgPlay" />
      &nbsp;
    </p>
  </div>`;

export default class IframeComp extends PureComponent {
  constructor(props) {
    super(props);
    this.iframe = React.createRef();
  }

  componentDidMount() {
    this.setContent(Content);
  }

  setContent = value => {
    const frame = this.iframe.current;
    const win = frame.contentWindow;
    const doc = win.document;
    if (typeof value === "string") {
      doc.write('<html><head><style>table{border-collapse: collapse;}</style></head><body style="overflow-y:hidden"></body></html>');
      doc.body.innerHTML = value;
    }
  };

  render() {
    return <iframe src="javascript:document.open();document.close();" ref={this.iframe} title="testScroll" height="100%" width="500" />;
  }
}
