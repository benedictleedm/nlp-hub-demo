import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import makeServer from "./mirage/mock_server";
import TagManager from "react-gtm-module";
import { GTM_ID } from "./constants";

if (process.env.NODE_ENV === "development") makeServer();

if (GTM_ID) {
  const tagManagerArgs: any = {
    gtmId: GTM_ID,
    events: {
      modelRunApi: "Model Run API",
    },
  };
  TagManager.initialize(tagManagerArgs);
}

ReactDOM.render(<App />, document.getElementById("root"));
