import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Modal, Row } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox/Checkbox";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const table = [
  "Customer",
  "PDO Dye",
  "SO Reff",
  "Item Name",
  "Item Color",
  "Lot",
  "Container",
  "Machine",
  "Workcenter",
  "Time Process",
  "Qty Roll",
  "Qty",
];
const defaultCheckedList = table.map((_label, index) => index);

const defaultOptions = table.map((label, index) => ({
  label,
  value: index,
}));

function SearchAndSelection({
  handleSelection,
  handleSearch,
  dataRows = [],
  placeholder = "Search",
  ButtonExport,
}: {
  handleSelection: Dispatch<SetStateAction<number[]>>;
  handleSearch: Dispatch<SetStateAction<string>>;
  dataRows: string[];
  placeholder?: string;
  ButtonExport?: JSX.Element;
}) {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [options, setOptions] = useState(defaultOptions);
  const [isModal, setModal] = useState(false);
  const checkAll = options.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < options.length;
  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list as number[]);
  };
  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? defaultCheckedList : []);
  };

  useEffect(() => {
    if (dataRows.length === 0) return;
    const initCheckedList = dataRows.map((_label, index) => index);

    const initOptions = dataRows.map((label, index) => ({
      label,
      value: index,
    }));

    setCheckedList(initCheckedList);
    setOptions(initOptions);
  }, [dataRows]);
  useEffect(() => {
    handleSelection(checkedList);
  }, [checkedList]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginBottom: 20,
        }}
      >
        <Input
          allowClear
          placeholder={placeholder}
          prefix={(
            <SearchOutlined
              style={{ color: "rgba(0, 0, 0, 0.25)" }}
              rev="label"
            />
          )}
          onChange={(e) => handleSearch(e.target.value ?? "")}
        />

        <div style={{ display: "flex", gap: 10 }}>
          <Button
            onClick={() => setModal((prev) => !prev)}
            icon={<FilterOutlined rev="label" />}
          >
            Filter
          </Button>
          {ButtonExport}
        </div>
      </div>
      <Modal
        footer={false}
        title={(
          <Row style={{ display: "flex", gap: 20 }}>
            <h3>Filter Column By</h3>
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
            >
              Check all
            </Checkbox>
          </Row>
        )}
        visible={isModal}
        onCancel={() => setModal(false)}
      >
        <Checkbox.Group
          options={options}
          value={checkedList}
          onChange={onChange}
          style={{
            display: "grid",
            whiteSpace: "nowrap",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 4,
          }}
        />
      </Modal>
    </>
  );
}

export default SearchAndSelection;
