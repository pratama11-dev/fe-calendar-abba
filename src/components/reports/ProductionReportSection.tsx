import themeColor from "@configs/theme/themeColor";
import useWindowSize from "@utils/helpers/ReactHelper";
import { Card, Row } from "antd";
import { Dispatch, SetStateAction } from "react";

const section = ["Output Machine", "Buffer", "Workcenter", "Timeline"];

interface props {
  selectedId: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

function ProductionReportSection({ setSelected, selectedId }: props) {
  const { width } = useWindowSize();

  return (
    <Row
      align="middle"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      {section.map((item, index) => (
        <Card
          key={item}
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
            height: "fit-content",
            width: (width ?? 0) <= 768 ? "150px" : "180px",
            textAlign: "center",
          }}
        >
          <h4 style={{ color: themeColor.fontGrayish, margin: 0, padding: 0 }}>
            {item}
          </h4>
        </Card>
      ))}
    </Row>
  );
}

export default ProductionReportSection;
