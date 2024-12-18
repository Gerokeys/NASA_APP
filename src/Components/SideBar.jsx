import React from "react";

export default function SideBar(props) {
    const {handleToggleModal, data} = props
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bg-overlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="d-container">
          <p className="d_title">{data?.date}</p>
          <p className="descriptionContent">
            {data?.explanation}
          </p>
        </div>
        <button onClick={handleToggleModal}>
            <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
