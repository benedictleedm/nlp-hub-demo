import * as React from "react";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import DependencyParseTree from "../../../components/output/tree/DependencyParseTree";

interface HierplaneTree {
  tree: any,
  sentence: string
}

interface OutputProps {
  responseData: HierplaneTree[];
}

interface HierplaneState {
  selectedIdx: number;
}

interface HierplaneProps extends React.ComponentProps<any> {
  trees: any;
}


class HierplaneVisualization extends React.Component<HierplaneProps, HierplaneState> {
  constructor(props: HierplaneProps) {
    super(props);
    this.state = { selectedIdx: 0 };

    this.selectNextTree = this.selectNextTree.bind(this);
    this.selectPrevTree = this.selectPrevTree.bind(this);
  }
  selectPrevTree() {
    const nextIdx =
      this.state.selectedIdx === 0 ? this.props.trees.length - 1 : this.state.selectedIdx - 1;
    this.setState({ selectedIdx: nextIdx });
  }
  selectNextTree() {
    const nextIdx =
      this.state.selectedIdx === this.props.trees.length - 1 ? 0 : this.state.selectedIdx + 1;
    this.setState({ selectedIdx: nextIdx });
  }

  render() {
    if (this.props.trees) {
      const totalSentenceCount = this.props.trees.length;
      const selectedSentenceIdxLabel = this.state.selectedIdx + 1;

      return (
        <div className="hierplane__visualization">
          <div className="hierplane__visualization-verbs">
            <LeftOutlined onClick={this.selectPrevTree} />
            <RightOutlined onClick={this.selectNextTree} />
            <span className="hierplane__visualization-verbs__label">
              Sentence {selectedSentenceIdxLabel} of {totalSentenceCount}
            </span>
          </div>
          <DependencyParseTree tree={this.props.trees[this.state.selectedIdx]["tree"]} theme="light" />
        </div>
      )
    } else {
      return null;
    }
  }
}

const Output = ({ responseData }: OutputProps) => (
  <HierplaneVisualization trees={responseData} />
)

export default Output;
