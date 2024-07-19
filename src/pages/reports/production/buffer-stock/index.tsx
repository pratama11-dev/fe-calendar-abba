import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import handleSessions from "@pages/api/GetSession";
import { Sessions } from "types/Session";

function BufferStockReportPage(session: Sessions) {
  useNavbar(
    ["reports", "reports/buffer-stock"],
    [
      {
        name: "Reports",
        url: "/reports/ibor",
      },
      {
        name: "Buffer Stock",
        url: "/reports/buffer-stock",
      },
    ]
  );

  return (
    <>
      <HeadPage title="Report Buffer Stock" />
      <DashboardLayout session={session}>
        <h1>Buffer Stock Report</h1>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const checkSession = await handleSessions(ctx);
  return checkSession;
}

export default BufferStockReportPage;
