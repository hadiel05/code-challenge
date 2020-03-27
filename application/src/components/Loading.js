import React from "react";
import { Card } from "antd";

export const Loading = ({ isLoading }) => {
  return (
    <Card
      className="ant-card-1"
      style={{ width: "100%", marginTop: 50, height: "40vh" }}
      loading={!isLoading}
    >
      {" "}
    </Card>
  );
};
