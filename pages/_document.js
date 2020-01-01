// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import React from "react";
// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = 
    (Document.getInitialProps
          ? await Document.getInitialProps(ctx)
          : null) || {}
    ;

    if (initialProps.statusCode && ctx.res) {
        ctx.res.statusCode = initialProps.statusCode
      }
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
        <style jsx>
      
      {`
       
      Html {
        overflow: scroll;
        overflow-x: hidden;
    }
    ::-webkit-scrollbar {
        width: 0px;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }
    /* Optional: show position indicator in red */
    ::-webkit-scrollbar-thumb {
        background: #FF0000;
    }
  `}
      </style>
      </Html>
     
    );
  }
}
export default MyDocument;
