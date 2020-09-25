import React, { Component } from "react";
import { Tabs } from "antd";
import "./index.less";
import ScrollBar from "../../components/scrollbar";
import Iframe from "./Iframe";

const { TabPane } = Tabs;
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

export default class ScrollBarTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollLazy: true,
      scrollWidth: 0,
      tableScrollWidth: 0,
      tableScrollLazy: true,
    };
  }

  onSetScrollWidth = data => {
    this.setState({ scrollWidth: data });
  };

  onLoad = data => {
    this.setState({ scrollLazy: data.loading });
  };

  onSetIframeTableScrollWidth = data => {
    this.setState({ tableScrollWidth: data });
  };

  onTableLoad = data => {
    this.setState({ tableScrollLazy: data.loading });
  };

  render() {
    return (
      <div className="scrolltest">
        <div className="scrolltest-container">
          <Tabs defaultActiveKey="2">
            <TabPane tab="DIV" key="1">
              <div className="div-container">
                <div className="scrollContainer" id="scrollContainer">
                  <div className="article" style={{ width: 400 }}>
                    The indefinite article takes two forms. It’s the word a when it precedes a word that begins with a consonant. It’s the word an when it precedes a word that begins with a vowel. The indefinite article indicates that a noun refers to a general idea rather than a particular thing. For example, you might ask your friend, “Should I bring a gift to the party?” Your friend will understand that you are not asking about a specific type of gift or a specific item. “I am going to bring an apple pie,” your friend tells you. Again, the indefinite article indicates that she is not talking about a specific apple pie. Your friend probably doesn’t even have any pie yet. The indefinite article only appears with singular nouns. Consider the following examples of indefinite articles used
                    in context:
                  </div>
                </div>
                <ScrollBar targetDom={"#scrollContainer"} />
              </div>
            </TabPane>
            <TabPane tab="IframeTable" key="2">
              <div className="iframe-container">
                <ScrollBar.Iframe key="table" targetDom="body" scrollWidth={this.state.tableScrollWidth}>
                  <Iframe onSetScrollWidth={this.onSetIframeTableScrollWidth} onLoad={this.onTableLoad} content={TableContent} />
                </ScrollBar.Iframe>
              </div>
            </TabPane>
            <TabPane tab="IframeContent" key="3">
              <div className="iframe-container">
                <ScrollBar.Iframe key="img" targetDom="body" scrollWidth={this.state.scrollWidth}>
                  <Iframe onSetScrollWidth={this.onSetScrollWidth} onLoad={this.onLoad} content={Content} />
                </ScrollBar.Iframe>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
