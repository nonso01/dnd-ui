import eruda from "eruda";
import On from "on-dom";
import "./style.css";

eruda.init();

const log = console.log;

const dragTarget = document.querySelector("[draggable=true]");
const dropTargets = document.querySelectorAll(".drop-targets");

const feedBackImage = new Image();
const dataType = "text/plain";

const dragTargetEvents = new On(dragTarget, {
  dragstart(e) {
    const dT = e.dataTransfer;
    dT.setData(dataType, "this may be dragged");
    dT.effectAllowed = "copyMove";
    log(e);
  },
});

const dropTargetsEvent = new On(dropTargets, {
  dragover(e) {
    log(e);
  },
  dragenter() {},
  dragleave() {},
});
// const
