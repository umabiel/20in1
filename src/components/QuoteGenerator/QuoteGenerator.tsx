import axios, { AxiosResponse } from "axios";
import classNames from "classnames";
import React, { Fragment, useEffect, useState } from "react";

import "../../App.scss";
import "./style.scss";

interface Quote {
  text: string;
  author: string;
}

export const QuoteGenerator = () => {
  const API_URL = "https://type.fit/api/quotes";

  const initialState: any[] = [];

  const [quotes, setQuotes] = useState<Quote[]>(initialState);
  const [quote, setQuote] = useState<Quote>({} as Quote);
  const [loading, setLoading] = useState(true);

  const classes = classNames({
    loader: true,
    show: loading,
  });
  const classesText = classNames("quote-text", { "quote-text-show": !loading });

  useEffect(() => {
    axios.get(API_URL).then((res: AxiosResponse<Quote[]>) => {
      setQuote(res.data.pop()!);
      setQuotes(res.data);
      setLoading(false);
    });
    return () => {};
  }, []);

  const getQuoteFromMemory = () => {
    if (quotes.length >= 0) {
      const q: Quote = quotes.pop()!;
      setQuotes(quotes);
      setQuote({
        ...q,
      });
    }
  };

  const tweetQuote = () => {
    const tq = quote;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tq.text} - ${tq.author}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <Fragment>
      <div className="quote-container" id="quote-container">
        <div className={classes} id="loader"></div>
        {/* Quote */}
        <div className={classesText}>
          <i className="fa fa-quote-left"></i>
          <span id="qoute">{quote.text}</span>
          {/* Author */}
          <div className="quote-author">
            <span id="author">{quote.author}</span>
          </div>
          {/* Buttons */}
          <div className="button-container">
            <button
              className="twitter-button"
              onClick={tweetQuote}
              id="twitter"
              title="Tweet me!"
            >
              <i className="fa fa-twitter"></i>
            </button>
            <button id="new-qoute" onClick={getQuoteFromMemory}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
