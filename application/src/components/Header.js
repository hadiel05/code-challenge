import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;
export const Header = ({ title }) => {
  return (
    <Card style={{ height: "100px" }} type="inner">
      <Title>{title}</Title>
    </Card>
  );
};
