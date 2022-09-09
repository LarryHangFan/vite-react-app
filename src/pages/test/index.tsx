import { Transfer } from 'antd';
import React, { useEffect, useState } from 'react';

const Test = () => {
  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);

  const getMock = () => {
    const tempTargetKeys: any = [];
    const tempMockData: any = [];

    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };

      if (data?.chosen) {
        tempTargetKeys.push(data?.key);
      }

      tempMockData.push(data);
    }

    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };

  useEffect(() => {
    getMock();
  }, []);

  const filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

  const handleChange = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
  };

  const handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };

  return (
    <Transfer
      dataSource={mockData}
      showSearch
      filterOption={filterOption}
      targetKeys={targetKeys}
      onChange={handleChange}
      onSearch={handleSearch}
      render={(item) => item.title}
    />
  );
};

export default Test;