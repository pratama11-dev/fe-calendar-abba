import HeadPage from "@components/Global/Header/HeadPage";
import WorkcenterView from "@components/reports/workcenter/WorkcenterView";
import useNavbar from "@layouts/customHooks/useNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import handleSessions from "@pages/api/GetSession";
import { Sessions } from "types/Session";

function WorkcenterReportPage(session: Sessions) {
  useNavbar(
    ["reports", "reports/workcenter"],
    [
      {
        name: "Reports",
        url: "/reports/ibor",
      },
      {
        name: "Workcenter",
        url: "/reports/workcenter",
      },
    ]
  );

  return (
    <>
      <HeadPage title="Report Workcenter" />
      <DashboardLayout session={session}>
        <WorkcenterView session={session} />
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const checkSession = await handleSessions(ctx);
  return checkSession;
}

export default WorkcenterReportPage;
