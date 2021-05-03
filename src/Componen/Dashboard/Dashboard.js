import React from "react";

function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
      <div
        className="p-4 mt-2"
        style={{ backgroundColor: "rebeccapurple", color: "#ffff" }}
      >
        <h2
          style={{
            borderRadius: "30px",
            backgroundColor: "salmon",
            color: "#ffff",
          }}
          className="py-2 text-center"
        >
          Add New Items
        </h2>
      </div>

      {/* ************************* New Section ******************* */}

      <div
        className="p-4 mt-2"
        style={{ backgroundColor: "salmon", color: "#ffff" }}
      >
        <h2
          style={{
            borderRadius: "30px",
            backgroundColor: "rebeccapurple",
            color: "#ffff",
          }}
          className="py-2 text-center"
        >
          Add New Items
        </h2>
      </div>

      {/* ************************* New Section ******************* */}

      <div
        className="p-4 mt-2"
        style={{ backgroundColor: "rebeccapurple", color: "#ffff" }}
      >
        <h2
          style={{
            borderRadius: "30px",
            backgroundColor: "salmon",
            color: "#ffff",
          }}
          className="py-2 text-center"
        >
          Add New Items
        </h2>
      </div>

      {/* ************************* New Section ******************* */}
    </div>
  );
}

export default Dashboard;
