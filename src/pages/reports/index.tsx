import { Sessions } from "types/Session";
import handleSessions from "@pages/api/GetSession";
import { useRouter } from "next/router";
import { Row, Space, Spin } from "antd";
import useNavbar from "@layouts/customHooks/useNavbar";
import { useEffect } from "react";
import HeadPage from "@components/Global/Header/HeadPage";
import DashboardLayout from "@layouts/DashboardLayout";

function ReportsPage(session: Sessions) {
  useNavbar(
    ["reports", "reports/ibor"],
    [
      {
        name: "Reports",
        url: "/reports/ibor",
      },
    ]
  );
  const { push } = useRouter();

  useEffect(() => {
    push("/reports/ibor");
  }, [push]);

  return (
    <>
      <HeadPage title="Reports IBOR" />
      <DashboardLayout session={session}>
        <Row align="middle" justify="center" style={{ minHeight: "400px" }}>
          <Space size="large">
            <Spin size="large" />
          </Space>
        </Row>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const checkSessions = await handleSessions(context);
  return checkSessions;
}

export default ReportsPage;
