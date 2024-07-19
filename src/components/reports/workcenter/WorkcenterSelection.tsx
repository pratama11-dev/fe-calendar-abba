import { FilterOutlined } from "@ant-design/icons";
import { Button, Checkbox, Modal, Row } from "antd";
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

function WorkcenterSelection({
  handleSelection,
  data = [],
}: {
  handleSelection: Dispatch<SetStateAction<number[]>>;
  data: string[];
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
    if (data.length === 0) return;
    const initCheckedList = data.map((_label, index) => index);

    const initOptions = data.map((label, index) => ({
      label,
      value: index,
    }));

    setCheckedList(initCheckedList);
    setOptions(initOptions);
  }, [data]);
  useEffect(() => {
    handleSelection(checkedList);
  }, [checkedList]);

  return (
    <>
      <Button
        onClick={() => setModal((prev) => !prev)}
        icon={<FilterOutlined rev="label" />}
        type="primary"
      >
        Filter
      </Button>
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

export default WorkcenterSelection;
