import { Drawer } from "antd";
import * as React from "react";
import { MobileView } from "react-device-detect";

const MobileMessage = () => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    let visited = localStorage["visited"];
    if (visited) {
      setVisible(false);
    } else {
      localStorage["visited"] = true;
    }
  }, []);

  return (
    <MobileView>
      <Drawer
        visible={visible}
        placement={"bottom"}
        mask={false}
        onClose={() => setVisible(false)}
        height={"12vh"}
      >
        <div>Contents for this page are best viewed on a desktop.</div>
      </Drawer>
    </MobileView>
  );
};

export default MobileMessage;
