import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import handleSessions from "@pages/api/GetSession";
import { Sessions } from "types/Session";

function PlanningPage(session: Sessions) {
  useNavbar(["planning"], [{ name: "Planning", url: "/planning" }]);
  return (
    <>
      <HeadPage title="Planning" />
      <DashboardLayout session={session}>
        <h1>Planning</h1>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const checkSession = await handleSessions(ctx);
  return checkSession;
}

export default PlanningPage;
