import * as React from "react";

export interface ModelUsageInfo {
  prediction?: string;
  evaluation?: string;
  training?: string;
  fromBackend?: Boolean;
}

export interface ModelConfig {
  id: string;
  desc: string | React.ReactNode;
  displayName: string;
  apiEndpoint?: string; // api end point defaults to "/api/<taskId>/<modelId>/predict"
  usage?: ModelUsageInfo;
}
