import { Sessions } from "types/Session";
import DashboardLayout from "@layouts/DashboardLayout";
import handleSessions from "@pages/api/GetSession";
import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";

function OutputMachineReportPage(session: Sessions) {
  useNavbar(
    ["reports", "reports/output-machine"],
    [
      {
        name: "Reports",
        url: "/reports/ibor",
      },
      {
        name: "Inbound Order",
        url: "/reports/output-machine",
      },
    ]
  );

  return (
    <>
      <HeadPage title="Report Output Machine" />
      <DashboardLayout session={session}>
        <p>Output Machine Report Page...</p>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const checkSessions = await handleSessions(context);
  return checkSessions;
}

export default OutputMachineReportPage;
