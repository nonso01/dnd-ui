import eruda from "eruda";
import On from "on-dom";

eruda.init();

const log = console.log;

const dragTarget = document.querySelector("[draggable=true]");
const dropTargets = Array.from(document.querySelectorAll(".drop-targets"));

const feedBackImage = new Image();

new On(dragTarget, {
  dragstart(e) {
    log(e);
  },
});
// const
