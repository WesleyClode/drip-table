# pagination

- 描述：是否展示分页以及配置
- 类型：

  ```typescript
  type Pagination = false | {
    size?: 'small' | 'default';
    pageSize: number;
    position?: 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    showLessItems?: boolean;
    showQuickJumper?: boolean;
    showSizeChanger?: boolean;
    hideOnSinglePage?: boolean;
  };
  ```

- 默认值：

  ```javascript
  {
    size: 'small',
    pageSize: undefined,
    position: 'bottomRight',
    showLessItems: undefined,
    showQuickJumper: undefined,
    showSizeChanger: undefined,
    hideOnSinglePage: undefined,
  }
  ```

```jsx
/**
 * transform: true
 * defaultShowCode: false
 * hideActions: ["CSB"]
 */
import React from "react";
import DripTable from "drip-table";
import DripTableDriverAntDesign from "drip-table-driver-antd";
import "antd/dist/antd.css";
import "drip-table/dist/index.css";

const schema = {
  pagination: {
    size: 'small',
    pageSize: 10,
    position: 'bottomLeft',
    showLessItems: true,
    showQuickJumper: true,
    showSizeChanger: true,
    hideOnSinglePage: true,
  },
  columns: [
    {
      key: "mock_1",
      title: "商品名称",
      dataIndex: "name",
      component: "text",
      options: { mode: "single", maxRow: 1 },
    },
    {
      key: "mock_2",
      title: "商品详情",
      align: "center",
      dataIndex: "description",
      component: "text",
      options: { mode: "single", ellipsis: true, maxRow: 1 },
    },
  ],
};

const dataSource = Array(200).fill(0).map((_, i) => ({
  id: i,
  name: "商品" + i,
  price: 7999,
  status: "onSale",
  description: "商品是为了出售而生产的劳动成果，是人类社会生产力发展到一定历史阶段的产物，是用于交换的劳动产品。",
}));

const Demo = () => {
  return (
    <DripTable
      driver={DripTableDriverAntDesign}
      schema={schema}
      dataSource={dataSource}
    />
  );
};

export default Demo;
```
