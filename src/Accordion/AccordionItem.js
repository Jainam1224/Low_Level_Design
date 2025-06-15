import React from "react";

const AccordionItem = ({ title, content, isOpen, setOpen }) => {
  return (
    <div style={{ borderStyle: "solid", borderColor: "black", borderWidth: 1 }}>
      <div
        style={{
          fontWeight: "bold",
          padding: 5,
          backgroundColor: "lightgrey",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          cursor: "pointer",
        }}
        onClick={() => {
          setOpen();
        }}
      >
        <span>{title}</span>
        <span>⬇️</span>
      </div>
      {isOpen && <div style={{ padding: 10 }}>{content}</div>}
    </div>
  );
};

export default AccordionItem;
