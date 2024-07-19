/* eslint-disable no-underscore-dangle */
import themeColor from "@configs/theme/themeColor";
import useWindowSize from "@utils/helpers/ReactHelper";
import { Card, Row } from "antd";
import { Dispatch, SetStateAction } from "react";
import { ITotalByWorkcenter } from "types/report/workcenter";

const section = [
  {
    name: "All Workcenter",
    key: "all",
  },
  {
    name: "PREPARATION",
    key: "PREPARATION",
  },
  {
    name: "DYE",
    key: "DYE",
  },
  {
    name: "Finish",
    key: "FINISH",
  },
  {
    name: "QC",
    key: "O.QC",
  },
  {
    name: "Red Zone",
    key: "REDZONE",
  },
];

function WorkcenterSection({
  data,
  selectedId = 0,
  setSelected,
}: {
  data: ITotalByWorkcenter;
  selectedId: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) {
  const { width } = useWindowSize();

  return (
    <Row
      gutter={16}
      align="middle"
      style={{
        overflowX: "scroll",
        rowGap: "10px",
        gap: "10xp",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {section.map((item, index) => (
        <Card
          key={item.key}
          className="grid-item"
          onClick={() => setSelected(index)}
          hoverable
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: `${selectedId === index ? 1 : 0}px solid black`,
            boxShadow:
              selectedId === index ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "",
            borderRadius: "10px",
            minHeight: "90px",
            width: (width ?? 0) <= 768 ? "150px" : "180px",
            backgroundColor: "tan",
            textAlign: "center",
          }}
        >
          <h4 style={{ color: themeColor.fontGrayish }}>{item.name}</h4>
          <Row
            align="middle"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <span
              style={{
                fontSize: (width ?? 0) <= 768 ? 15 : "20px",
                color: section.length - 1 === index ? "red" : "default",
              }}
            >
              {parseFloat(data[item.key]?.qty ?? 0).toFixed(2)}
              {' '}
              Qty
            </span>
          </Row>
        </Card>
      ))}
    </Row>
  );
}

export default WorkcenterSection;
