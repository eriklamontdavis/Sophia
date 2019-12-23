import React from "react";
import "./TextInfoBlock.scss";
import { Consumer } from "../Context";

const TextInfoBlock = props => (
  <Consumer>
        {({ data }) => (
          <div className="textInfoWrapper">
          <p>
            {data.description}
          </p>
        </div>
        )}
      </Consumer>
);

export default TextInfoBlock;
