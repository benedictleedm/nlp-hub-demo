import * as React from "react";
import DiffBlock from "../../../components/DiffBlock";

const Output = ({ responseData }: any) => {
  return (
    <div>
      <DiffBlock
        oldText={responseData["original_text"]}
        newText={responseData["corrected_text"]}
      />
    </div>
  );
};

export default Output;
