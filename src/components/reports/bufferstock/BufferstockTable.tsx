import { Table, TableColumnsType } from "antd";
import { IBufferstock } from "types/report/bufferstock";

const columns: TableColumnsType<IBufferstock> = [
  {
    title: "Buffer",
    dataIndex: "BUFFER",
    key: "BUFFER",
  },
  {
    title: "Seq",
    dataIndex: "SEQ",
    key: "SEQ",
  },
  {
    title: "PDO Master",
    dataIndex: "TOTAL_PDO_MASTER",
    key: "TOTAL_PDO_MASTER",
  },
  {
    title: "PDO Detail",
    dataIndex: "TOTAL_PDO_DETAIL",
    key: "TOTAL_PDO_DETAIL",
  },
  {
    title: "SO PIL",
    dataIndex: "TOTAL_SO_PIL",
    key: "TOTAL_SO_PIL",
  },
  {
    title: "SO SAP",
    dataIndex: "TOTAL_SO_SAP",
    key: "TOTAL_SO_SAP",
  },
  {
    title: "Container",
    dataIndex: "TOTAL_CONTAINER",
    key: "TOTAL_CONTAINER",
  },
  {
    title: "Roll",
    dataIndex: "TOTAL_ROLL",
    key: "TOTAL_ROLL",
  },
  {
    title: "Qty",
    dataIndex: "TOTAL_QTY",
    key: "TOTAL_QTY",
    render: (val) => parseFloat(val).toFixed(2),
  },
];

function BuffersockTable({ dataSource }: { dataSource: IBufferstock[] }) {
  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
}

export default BuffersockTable;
