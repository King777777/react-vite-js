import MouseTracker from "./RecordXDistance/RecordXDistanceIndex";
import ExpandableRowIndex from "./ExpandableRow/ExpandableRowIndex";
import VirtualListIndex from "./VirtualList/VirtualListIndex";
import ContextIndex from "./Context/ContextIndex";
import ContextRef from "./Context/ContextRef";
import Father from "./Context/FatherUseChildrenMethod";
import {Table} from "antd";
import Test from "./Context/Test";
import UseCbAndMemo from "./UseCallbackAndMemo/UseCBAndMemo";
import BpmnTest from "./BpmnDemo/bpmnDemo";
import G6DemoIndex from "./G6demo/G6DemoIndex";

const KeyMapComponent = {
  "mouseTracker": <MouseTracker />,
  "expandableRow": <ExpandableRowIndex />,
  "VirtualListIndex": <VirtualListIndex />,
  "useChildrenMethod": <ContextRef />,
  "classFatherUseChildrenMethod": <Father />,
  "ceshi": <Test>suibianxieidan{1+2}<span>ttttt</span><span>IIIIII</span></Test>,
  "useCallback&memo": <UseCbAndMemo />,
  "bpmndemo": <BpmnTest />,
  "G6Demo": <G6DemoIndex />,
}

export default KeyMapComponent;
