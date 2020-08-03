import React, { Component } from 'react'
import './index.css'
import ScrollBar from '../../components/scrollbar'

export default class ScrollBarTest extends Component {
  render() {
    return (
      <div>
        <h3>横向滚动条</h3>
        <div className='container'>
          <div className="scrollContainer" id='scrollContainer'>
            <div className='article' style={{ width: 400 }}>
              The indefinite article takes two forms. It’s the word a when it precedes a word that begins with a consonant. It’s the word an when it precedes a word that begins with a vowel. The indefinite article indicates that a noun refers to a general idea rather than a particular thing. For example, you might ask your friend, “Should I bring a gift to the party?” Your friend will understand that you are not asking about a specific type of gift or a specific item. “I am going to bring an apple pie,” your friend tells you. Again, the indefinite article indicates that she is not talking about a specific apple pie. Your friend probably doesn’t even have any pie yet. The indefinite article only appears with singular nouns. Consider the following examples of indefinite articles used in context:
            </div>
          </div>
          <ScrollBar
            targetDom={'#scrollContainer'}
          />
        </div>
      </div>
    )
  }
}
