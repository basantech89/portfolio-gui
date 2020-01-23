import React from "react";

export default function AchivementCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
      <div className="certificate-card">
        <div className="certificate-image-div">
          <img src={cardInfo.image} alt="certificate" className="card-image"/>
        </div>
        <div className="certificate-detail-div">
          <h4 className="cert-card-title">{cardInfo.title}</h4>
          <p className="cert-card-subtitle">{cardInfo.description}</p>
        </div>
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => {
            return <p onClick={() => openUrlInNewTab(v.url)}>{v.name}</p>;
          })}
        </div>
      </div>
  );
}
