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

const TableContent = `
<div id="wea_rich_text_default_font" style="font-size:9px;"><table border="1" cellpadding="1" style="height:500px;width:1200px;">
	<caption>哈哈哈</caption>
	<thead>
		<tr>
			<th scope="col">&nbsp;</th>
			<th scope="col">&nbsp;</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="padding: 1px;">&nbsp;</td>
			<td style="padding: 1px;">&nbsp;</td>
		</tr>
		<tr>
			<td style="padding: 1px;">&nbsp;</td>
			<td style="padding: 1px;">&nbsp;</td>
		</tr>
	</tbody>
</table>

<p>222</p>
</div>
`;

export default class IframeComp extends PureComponent {
  constructor(props) {
    super(props);
    this.iframe = React.createRef();
    this.state = {
      width: 0,
      loading: false,
    };
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

    const imgs = doc.getElementsByTagName("img");
    let imgLoaded = 0;
    this.setState({ loading: true });
    this.props.onLoad({ loading: true });
    const onOk = () => {
      imgLoaded++;
      if (imgLoaded === imgs.length || imgs.length === 0) {
        const { scrollWidth = 0, offsetWidth = 0 } = doc.documentElement;
        this.props.onSetScrollWidth(scrollWidth || offsetWidth);
        this.props.onLoad(false);
        this.setState({
          width: scrollWidth || offsetWidth,
          loading: false,
        });
      }
    };

    !imgs || imgs.length === 0
      ? onOk()
      : Array.prototype.forEach.call(imgs, img => {
          const i = img;
          i.onload = () => onOk();
          i.onerror = onOk;
        });
  };

  workSetContent = value => {
    const frame = this.iframe.current;
    const win = frame.contentWindow;
    const doc = win.document;
    if (typeof value === "string") {
      doc.write('<html><head><style>table{border-collapse: collapse;}</style></head><body style="overflow-y:hidden"></body></html>');
      doc.body.innerHTML = value;
    }

    const imgs = doc.getElementsByTagName("img");
    let imgLoaded = 0;
    this.setState({ loading: true });
    const onOk = () => {
      imgLoaded++;
      const { scrollHeight = 0, offsetHeight = 0 } = doc.documentElement;
      // + 20 for overflow-x scrollbar
      this.setState({
        height: (scrollHeight || offsetHeight) + 20,
        loading: false,
      });
    };
    onOk();
    if (imgs && imgs.length > 0) {
      Array.prototype.forEach.call(imgs, img => {
        const i = img;
        i.onload = () => {
          onOk();
        };
        i.onerror = onOk;
      });
    }
  };

  render() {
    return <iframe src="javascript:document.open();document.close();" ref={this.iframe} title="testScroll" height="100%" width="500" />;
  }
}
