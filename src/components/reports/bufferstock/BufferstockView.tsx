import ButtonExport from "@components/Button/ButtonExport";
import useBufferstockQuery from "@services/reactQuery/report/BufferstockReportQuery";
import { Divider } from "antd";
import { Sessions } from "types/Session";
import BuffersockTable from "./BufferstockTable";

function BufferstockView({ session }: { session: Sessions }) {
  const BufferstockQuery = useBufferstockQuery({ session, enabled: true });

  const BufferstockData = BufferstockQuery.data?.data?.data ?? [];

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Buffer stock Total</h1>
        <ButtonExport
          session={session}
          pdfApi=""
          excelAPI="/api/report/buffer-export"
          method="GET"
        />
      </div>
      <Divider />
      <BuffersockTable dataSource={BufferstockData} />
    </>
  );
}

export default BufferstockView;
