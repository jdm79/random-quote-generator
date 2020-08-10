import React from 'react'
import {quotes} from './Quotes'

class Quote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'quote',
      author: 'author',
      quote: quotes[Math.floor(Math.random() * quotes.length)]
  }
  this.newQuote = this.newQuote.bind(this)
}
// quotes[Math.floor(Math.random() * quotes.length)]



newQuote(){
 
  this.setState({
    quote: quotes[Math.floor(Math.random() * quotes.length)],
    text: this.state.quote.text,
    author: this.state.quote.author
  })
  console.log(this.state.quote)
}



  render(){
    return(
      <div id="quote-box">
        <p id="text">{this.state.text}</p>
        <p id="author">{this.state.author}</p>
        <button id="new-quote" onClick={this.newQuote}>New Quote</button>
    </div>
    )
  }
}

export default Quote
