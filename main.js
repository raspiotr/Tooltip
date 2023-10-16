const boxes = document.querySelectorAll(".boxes div");

const createTooltip = (event) => {
  const tooltipParent = event.target;
  const tooltipText = event.target.dataset.tooltip;
  const tooltipPosition = event.target.dataset.tooltipPosition;

  const newTooltip = document.createElement("span");
  newTooltip.textContent = tooltipText;
  newTooltip.className = `tooltip ${tooltipPosition || "top"}`;

  tooltipParent.append(newTooltip);
};

const removeTooltip = (event) => {
  const tooltipParent = event.target;
  tooltipParent.innerHTML = "";
};

boxes.forEach((box) => box.addEventListener("mouseover", createTooltip));
boxes.forEach((box) => box.addEventListener("mouseleave", removeTooltip));
