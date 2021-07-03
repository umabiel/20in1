import axios, { AxiosResponse } from "axios";
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

  useEffect(() => {
    axios.get(API_URL).then((res: AxiosResponse<Quote[]>) => {
      setQuotes(res.data);
      console.log(quotes);
    });
    return () => {};
  }, []);

  const getQuoteFromMemory = () => {
    console.log("mas");
    if (quotes.length >= 0) {
      console.log("Antes...", quotes.length);
      const q: Quote = quotes.pop()!;
      setQuotes({
        ...quotes,
      });
      console.log("despues...", quotes.length);
      setQuote({
        ...q,
      });
    }
  };

  return (
    <Fragment>
      <div className="quote-container" id="quote-container">
        {/* Quote */}
        <div className="quote-text">
          <i className="fa fa-quote-left"></i>
          <span id="qoute">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            rerum assumenda iure repellat, dolor impedit atque odit itaque
            adipisci fugit ullam eaque perferendis veniam doloribus ipsa
            sapiente ad nisi dignissimos!
          </span>
          {/* Author */}
          <div className="quote-author">
            <span id="author">DF</span>
          </div>
          {/* Buttons */}
          <div className="button-container">
            <button className="twitter-button" id="twitter" title="Tweet me!">
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
