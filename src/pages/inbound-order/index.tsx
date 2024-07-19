import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import handleSessions from "@pages/api/GetSession";
import { Sessions } from "types/Session";

function Ibor(session: Sessions) {
  useNavbar(
    ["inbound-order"],
    [{ name: "IBOR Greige Plan", url: "/inbound-order" }]
  );

  return (
    <>
      <HeadPage title="IBOR Greige Plan" />
      <DashboardLayout session={session}>
        <h1>IBOR Greige Plan</h1>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const checkSession = await handleSessions(ctx);
  return checkSession;
}

export default Ibor;
