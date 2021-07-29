import { Table } from "antd";
import * as React from "react";

const Output = ({ responseData }: any) => {
  
    return (
      <div>
          <div>
            The model thinks that the original tweet is {responseData.predicted_y} with a probability of {responseData.predicted_prob}%.
          </div>
      </div>
    );
  };

  export default Output;
