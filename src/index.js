import React from "react";
import ReactDOM from "react-dom";
import Post from "./Post";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div>
      <ApprovalCard>
        <Post name="Hyacinthia" date="Today 3 mei 2021" text="fawaka!!" />
      </ApprovalCard>
      <ApprovalCard>
        <Post name="Hyacinthia" date="Today 3 mei 2021" text="Boeng!!" />
      </ApprovalCard>
      <ApprovalCard>
        <Post name="Hyacinthia" date="Today 3 mei 2021" text="fawaka!!" />
      </ApprovalCard>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
