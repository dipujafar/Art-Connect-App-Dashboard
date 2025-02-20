import { Table } from "antd";

// @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
const DataTable = ({ columns, data, pageSize }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: pageSize }}
      scroll={{ x: "max-content" }}
    ></Table>
  );
};

export default DataTable;
