import React from 'react';
import Loader from '../Loader/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { genOffSet, getColor, fetchQuote } from '../../utils';

import './QuoteBox.scss';

class QuoteBox extends React.Component {
  state = {
    message: null,
    author: null,
  };

  componentDidMount() {
    this.getNewMessage();
  }

  resetState = () => {
    this.setState({ message: null, author: null });
  };

  getNewMessage = async () => {
    const { message, author } = await fetchQuote(genOffSet());
    this.setState({
      message: `"${message}"`,
      author,
    });
  };

  handleColor = () => {
    this.props.handleColor(getColor());
  };

  handleQuote = () => {
    this.resetState();
    this.getNewMessage();
    this.handleColor();
  };

  render() {
    return (
      <div className="QuoteBox" style={{ background: getColor() }}>
        <div className="message">{this.state.message || <Loader />}</div>
        <div className="author">{this.state.author}</div>
        <div className="icons-bar">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?text=${this.state.message}, ${this.state.author}`}
          >
            <FontAwesomeIcon className="icon" icon={faTwitter} />
          </a>

          <button className="btn btn-primary btn-sm" onClick={this.handleQuote}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}
export default QuoteBox;
