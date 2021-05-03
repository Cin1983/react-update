import React from "react";

const ApprovalCard = props=> {
  return (
    <div className="uiCard">
      <div className="uiCard">
        <div className="content">{props.children}</div>
        <div className="extraContent">
          <div className="uiTwoButons">
            <div className="greenbutton">Approve</div>
            <div className="redbutton">Reject</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApprovalCard;
