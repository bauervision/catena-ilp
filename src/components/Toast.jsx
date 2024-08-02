import React from "react";

const Toast = ({ message, showToast }) => (
  <div
    className={`Toast ${
      showToast && "ShowToast"
    } PinkFill RoundBorder Padding `}
  >
    <div className="Flex JustifyCenter AlignItems Col">
      <div className="CursiveFont LargeFont">{message}</div>
    </div>
  </div>
);
export default Toast;
