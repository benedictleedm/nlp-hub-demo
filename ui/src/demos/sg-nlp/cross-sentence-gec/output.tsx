import { Table } from "antd";
import * as React from "react";

const Output = ({ responseData }: any) => {

    // Create dataSource for table
    const dataSource = responseData["output"].map((pair: any) => ({
          "original_sentence": pair[0],
          "corrected_sentence": pair[1],
      }));
  
    const columns = [
      {
          title: "Original Sentences",
          dataIndex: "original_sentence",
          key: "original_sentence",
        },
        {
          title: "Corrected Sentences",
          dataIndex: "corrected_sentence",
          key: "corrected_sentence",
        },
    
    ];
  
    return (
      <div>
          <div>
            <Table dataSource={dataSource} columns={columns} />
          </div>
      </div>
    );
  };

  export default Output;
