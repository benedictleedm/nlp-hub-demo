import * as React from "react";
import { Table } from "antd";
import { Highlight } from "../../../components/output/highlight/Highlight";
import NestedHighlight, {
  getHighlightColor,
  withHighlightClickHandling,
} from "../../../components/output/highlight/NestedHighlight";

const output = (props: any) => {
  const {
    responseData,
    activeIds,
    activeDepths,
    isClicking,
    selectedId,
    onMouseDown,
    onMouseOut,
    onMouseOver,
    onMouseUp,
  } = props;
  const { document, clusters, relations } = responseData;

  // Sort relations by score
  const scoreCompareDescending = (
    a: { score: number },
    b: { score: number }
  ) => {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    return 0;
  };
  relations.sort(scoreCompareDescending);

  // Model output cluster spans' end idx is exclusive, but NestedHighlight considers the end idx as inclusive,
  // so adjust it by minusing the end idx by 1
  const adjustedClusters = clusters.map((cluster: number[][]) => {
    return cluster.map((span) => {
      return [span[0], span[1] - 1];
    });
  });

  const getIndicativeEntityFromCluster = (clusterIdx: number) => {
    const span = clusters[clusterIdx][0]; // Arbitrarily choose first one
    return document.slice(span[0], span[1]).join(" ");
  };

  const tableEntityCluster = (clusterIdx: number) => (
    <Highlight
      style={{ width: "fit-content" }}
      activeDepths={activeDepths}
      activeIds={activeIds}
      color={getHighlightColor(clusterIdx)}
      depth={0}
      id={clusterIdx.toString()}
      isClickable
      isClicking={isClicking}
      key={clusterIdx.toString()}
      label={clusterIdx.toString()}
      labelPosition={"left"}
      onMouseDown={onMouseDown}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      selectedId={selectedId}
    >
      {getIndicativeEntityFromCluster(clusterIdx)}
    </Highlight>
  );

  const columns = [
    {
      title: "Object Entity Cluster",
      dataIndex: "object",
      key: "object",
      render: tableEntityCluster,
    },
    {
      title: "Relation",
      dataIndex: "relation",
      key: "relation",
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: "Subject Entity Cluster",
      dataIndex: "subject",
      key: "subject",
      render: tableEntityCluster,
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
      render: (score: number) => <span>{score.toFixed(2)}</span>,
    },
  ];

  const data = relations.map((relation: any, index: number) => {
    return {
      key: index,
      object: relation.object_idx,
      relation: relation.relation,
      subject: relation.subject_idx,
      score: relation.score,
    };
  });
  return (
    <div>
      <h2>Coreferenced Named Entities</h2>
      <NestedHighlight
        activeDepths={activeDepths}
        activeIds={activeIds}
        clusters={adjustedClusters}
        tokens={document}
        isClickable
        isClicking={isClicking}
        labelPosition="left"
        onMouseDown={onMouseDown}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onMouseUp={onMouseUp}
        selectedId={selectedId}
      />
      <h2 style={{ marginTop: "32px" }}>Extracted Relations</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

const Output = withHighlightClickHandling(output);

export default Output;
