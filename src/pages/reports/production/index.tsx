import HeadPage from "@components/Global/Header/HeadPage";
import ProductionReportView from "@components/reports/ProductionReportView";
import useNavbar from "@layouts/customHooks/useNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import handleSessions from "@pages/api/GetSession";
import { Sessions } from "types/Session";

function ProductionReportPage(session: Sessions) {
  useNavbar(
    ["reports", "reports/production"],
    [
      {
        name: "Reports",
        url: "/reports/ibor",
      },
      {
        name: "Production",
        url: "/reports/production",
      },
    ]
  );

  return (
    <>
      <HeadPage title="Report Buffer Stock" />
      <DashboardLayout session={session} background="transparent">
        <ProductionReportView session={session} />
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const checkSession = await handleSessions(ctx);
  return checkSession;
}

export default ProductionReportPage;
