import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;
export const CustomCard = ({ title, isLoading, _id, content }) => {
  return (
    <Card loading={isLoading} className="ant-card-1">
      <div key={_id}>
        <Title>{title}</Title>
        <Card>{content}</Card>
        <hr />
      </div>
    </Card>
  );
};
