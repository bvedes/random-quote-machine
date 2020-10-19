import React from "react";
import Loader from "../Loader/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { genOffSet, getColor, fetchQuote } from "../../utils";

import "./QuoteBox.scss";

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
      <div
        className="QuoteBox"
        id="quote-box"
        style={{ background: getColor() }}
      >
        <div className="message" id="text">
          {this.state.message || <Loader />}
        </div>
        <div className="author" id="author">
          {this.state.author}
        </div>
        <div className="icons-bar">
          <a
            target="_blank"
            id="tweet-quote"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?text=${this.state.message}, ${this.state.author}`}
          >
            <FontAwesomeIcon className="icon" icon={faTwitter} />
          </a>

          <button
            className="btn btn-primary btn-sm"
            id="new-quote"
            onClick={this.handleQuote}
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}
export default QuoteBox;
