import { Sessions } from "types/Session";
import DashboardLayout from "@layouts/DashboardLayout";
import handleSessions from "@pages/api/GetSession";
import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";

function IborReportsPage(session: Sessions) {
  useNavbar(
    ["reports", "reports/ibor"],
    [
      {
        name: "Reports",
        url: "/reports/ibor",
      },
      {
        name: "Inbound Order",
        url: "/reports/ibor",
      },
    ]
  );

  return (
    <>
      <HeadPage title="Report IBOR" />
      <DashboardLayout session={session}>
        <p>IBOR Report Page...</p>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const checkSessions = await handleSessions(context);
  return checkSessions;
}

export default IborReportsPage;
