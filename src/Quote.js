import React from 'react'
import {quotes} from './Quotes'

class Quote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      author: '',
      quote: quotes[Math.floor(Math.random() * quotes.length)]
  }
  this.newQuote = this.newQuote.bind(this)
}
// quotes[Math.floor(Math.random() * quotes.length)]
componentDidMount() {
  this.newQuote()

  this.intervalID = setInterval(this.newQuote.bind(this), 60000);
}

componentWillUnmount() {

  clearInterval(this.intervalID);
}


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
        <h1>BLM quotes</h1>
        <button id="new-quote" onClick={this.newQuote}>New Quote</button>
        <p id="text">{this.state.text}</p>
        <p id="author">{this.state.author}</p>
    </div>
    )
  }
}

export default Quote
