import React, { useEffect, useState } from "react";
import { Table, TableProps } from "antd";
import { IWorkcenterReport } from "types/report/workcenter";
import { IPagination } from "types/api/params";
import { ColumnsType } from "antd/lib/table";
import { v4 as uuid4 } from "uuid";

const columns: ColumnsType<IWorkcenterReport> = [
  {
    title: "Customer",
    dataIndex: "CUST",
    key: uuid4(),
    render: (val) => <span style={{ whiteSpace: "nowrap" }}>{val ?? "-"}</span>,
  },
  {
    title: "PDO Dye",
    dataIndex: "PDO_DYE",
    key: uuid4(),
    render: (val) => <span style={{ whiteSpace: "nowrap" }}>{val ?? "-"}</span>,
  },
  {
    title: "SO Reff",
    dataIndex: "SO_REF",
    key: uuid4(),
    render: (val) => <span style={{ whiteSpace: "nowrap" }}>{val ?? "-"}</span>,
  },
  {
    title: "Item Name",
    dataIndex: "ITEM_NAME",
    key: uuid4(),
    render: (val) => <span style={{ whiteSpace: "nowrap" }}>{val ?? "-"}</span>,
  },
  {
    title: "Item Color",
    dataIndex: "ITEM_COLOR",
    key: uuid4(),
    render: (val) => <span style={{ whiteSpace: "nowrap" }}>{val ?? "-"}</span>,
  },
  {
    title: "Lot",
    dataIndex: "LOT",
    key: uuid4(),
    render: (val) => (
      <span style={{ whiteSpace: "nowrap" }}>
        {val !== "" ? val ?? "-" : "-"}
      </span>
    ),
  },
  {
    title: "Container",
    dataIndex: "CONTAINER",
    key: uuid4(),
    render: (val) => <span style={{ whiteSpace: "nowrap" }}>{val ?? "-"}</span>,
  },
  {
    title: "Machine",
    dataIndex: "MACHINE",
    key: uuid4(),
    render: (val) => <span style={{ whiteSpace: "nowrap" }}>{val ?? "-"}</span>,
  },
  {
    title: "Workcenter",
    dataIndex: "WORKCENTER",
    key: uuid4(),
    render: (val) => <span style={{ whiteSpace: "nowrap" }}>{val ?? "-"}</span>,
  },
  {
    title: "Time Process",
    dataIndex: "TIME_PROCESS",
    key: uuid4(),
    render: (val) => <span style={{ whiteSpace: "nowrap" }}>{val ?? "-"}</span>,
  },
  {
    title: "Qty Roll",
    dataIndex: "TOTAL_ROLL",
    key: uuid4(),
    render: (val) => <span style={{ whiteSpace: "nowrap" }}>{val ?? "-"}</span>,
  },
  {
    title: "Qty",
    dataIndex: "TOTAL_QTY",
    key: uuid4(),
    render: (val) => (
      <span style={{ whiteSpace: "nowrap" }}>
        {parseFloat(val).toFixed(2) ?? "-"}
      </span>
    ),
  },
];

function customFooter({
  pagination,
}: // dataLenght,
{
  pagination: IPagination;
  // dataLenght: number;
}) {
  const footer = () => (
    <div className="footer-text">
      {(pagination?.current ?? 0) * (pagination?.pageSize ?? 0)
      > (pagination.total ?? 0)
        ? `Showing ${pagination.total ?? 0} of ${pagination.total ?? 0} entries`
        : `Showing ${
          (pagination?.current ?? 0) * (pagination?.pageSize ?? 0)
        } of ${pagination.total ?? 0} entries`}
      {" "}
    </div>
  );

  return footer;
}

function WorkcenterTable({
  data,
  handlePaginationChange,
  pagination,
  isLoading,
  rowTablesSelected = [],
}: {
  data: IWorkcenterReport[];
  rowTablesSelected: number[];
  handlePaginationChange: TableProps<IWorkcenterReport>["onChange"];
  pagination: IPagination;
  isLoading: boolean;
}) {
  const [col, setCol] = useState(columns);

  useEffect(() => {
    const current = [...columns].filter((_, index) => rowTablesSelected.includes(index));

    setCol([
      {
        title: "No",
        dataIndex: "index",
        width: "5%",
        render: (_value, _item, index) => `${(pagination.current - 1) * pagination.pageSize + index + 1}`,
      },
      ...current,
    ]);
  }, [pagination, rowTablesSelected]);

  return (
    <Table
      columns={col}
      dataSource={data}
      onChange={handlePaginationChange}
      pagination={pagination}
      scroll={{ x: "100%" }}
      loading={isLoading}
      key={uuid4()}
      rowKey={uuid4()}
      footer={customFooter({ pagination })}
    />
  );
}

export default WorkcenterTable;
