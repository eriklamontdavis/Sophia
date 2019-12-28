import React from "react";

export default ({ children, maxWidth = 760 }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        max-width: ${maxWidth}px;
        margin: 0px auto;
      }
      @media (min-width: 960px) {
        div {
          max-width: ${maxWidth}px;
          margin: 0;
        }
      }
    `}</style>
  </div>
);
