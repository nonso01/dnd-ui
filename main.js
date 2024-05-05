import eruda from "eruda";
import On from "on-dom";
import "./style.css";

eruda.init();

const log = console.log;

const targetBox = document.querySelector(".target-box");
const dragTarget = document.querySelector("[draggable=true]");
const dropTargets = document.querySelectorAll(".drop-targets");

dropTargets[Math.floor(Math.random() * (dropTargets.length - 1))].classList.add(
  "win",
);
// const feedBackImage = new Image();
const dataType = "text/plain";

const dragTargetEvents = new On(dragTarget, {
  dragstart(e) {
    e.dataTransfer.setData(dataType, this.id); // set the data as an ID
    e.dataTransfer.effectAllowed = "copyMove";
    log("dragStart");
  },
});

const dropTargetsEvent = new On(dropTargets, {
  dragover(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";

    log("dragOver");
    this.classList.add("over");
    targetBox.classList.add("over");
  },
  dragenter(e) {
    e.preventDefault();
    log("dragEnter");
  },
  drop(e) {
    e.preventDefault();
    log("dropped");

    const data = e.dataTransfer.getData("text/plain"); // reference the ID
    this.appendChild(document.getElementById(data)); // copy or move the element

    this.classList.contains("win")
      ? targetBox.classList.add("win")
      : targetBox.classList.add("lose");
  },
  dragleave() {
    this.classList.remove("over");
    targetBox.classList.remove("over");
    log("dragLeave");
  },
  dragend() {
    log("dragEnd");
  },
});
