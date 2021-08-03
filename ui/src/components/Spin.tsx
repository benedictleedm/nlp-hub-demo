import { Spin } from "antd";
import styled from "styled-components";
import { COLORS } from "../styles";

const _Spin = styled(Spin)`
  .ant-spin-dot-item {
    background-color: ${COLORS.BR.PRIMARY};
  }
`;

export default _Spin;
