import MouseTracker from "./RecordXDistance/RecordXDistanceIndex";
import ExpandableRowIndex from "./ExpandableRow/ExpandableRowIndex";
import VirtualListIndex from "./VirtualList/VirtualListIndex";
import ContextIndex from "./Context/ContextIndex";
import ContextRef from "./Context/ContextRef";
import Father from "./Context/FatherUseChildrenMethod";
import {Table} from "antd";
import Test from "./Context/Test";
import UseCbAndMemo from "./UseCallbackAndMemo/UseCBAndMemo";

const KeyMapComponent = {
  "mouseTracker": <MouseTracker />,
  "expandableRow": <ExpandableRowIndex />,
  "VirtualListIndex": <VirtualListIndex />,
  "useChildrenMethod": <ContextRef />,
  "classFatherUseChildrenMethod": <Father />,
  "ceshi": <Test />,
  "useCallback&memo": <UseCbAndMemo />,
}

export default KeyMapComponent;