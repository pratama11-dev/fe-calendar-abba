import { Sessions } from "types/Session";
import handleSessions from "@pages/api/GetSession";
import { useRouter } from "next/router";
import { Row, Space, Spin } from "antd";
import useNavbar from "@layouts/customHooks/useNavbar";
import { useEffect } from "react";
import HeadPage from "@components/Global/Header/HeadPage";
import DashboardLayout from "@layouts/DashboardLayout";

function ProductionPage(session: Sessions) {
  useNavbar(
    ["production", "production/bill-of-material"],
    [
      {
        name: "Production",
        url: "/production/bill-of-material",
      },
    ]
  );
  const { push } = useRouter();

  useEffect(() => {
    push("/production/bill-of-material");
  }, [push]);

  return (
    <>
      <HeadPage title="Production" />
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

export default ProductionPage;
