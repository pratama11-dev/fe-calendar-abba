import { useState } from "react";
import { Sessions } from "types/Session";
import BufferstockView from "./bufferstock/BufferstockView";
import ProductionReportSection from "./ProductionReportSection";
import WorkcenterView from "./workcenter/WorkcenterView";

function ProductionReportView({ session }: { session: Sessions }) {
  const [selectedId, setSelected] = useState<number>(0);

  const View = [
    <h1 key={0}>Output Machine</h1>,
    <BufferstockView session={session} key={1} />,
    <WorkcenterView session={session} key={2} />,
    <h1 key={3}>Timeline</h1>,
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <ProductionReportSection
        selectedId={selectedId}
        setSelected={setSelected}
      />
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 360,
          borderRadius: 8,
        }}
      >
        {View[selectedId]}
      </div>
    </div>
  );
}

export default ProductionReportView;
