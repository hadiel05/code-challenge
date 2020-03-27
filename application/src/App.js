import React, { useState } from "react";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";

import axios from "axios";
import { Button } from "antd";
import { Row, Col } from "antd";
import { CustomCard } from "./components/CustomCard";

export const App = ({ url }) => {
  const [posts, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios(url);
    if (response.status !== 200) return null;
    setData(response.data.posts);
    setIsLoading(false);
  };

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Header title="Welcome To My CNN App" />
          {!isLoading ? (
            posts.map(({ _id, title, content }) => {
              return (
                <CustomCard
                  id={_id}
                  title={title}
                  content={content}
                  isLoading={isLoading}
                />
              );
            })
          ) : (
            <Loading isLoadig={!isLoading} />
          )}
          <Row>
            <Col span={8} />
            <Col span={8}>
              <Button
                block
                onClick={fetchData}
                disabled={!isLoading}
                data-testid="fetch-data"
              >
                Load Data
              </Button>
            </Col>
            <Col span={8} />
          </Row>
        </Col>
      </Row>
    </>
  );
};
