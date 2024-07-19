import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import handleSessions from "@pages/api/GetSession";
import { Sessions } from "types/Session";

function PdoPage(session: Sessions) {
  useNavbar(
    ["production", "production/production-order"],
    [
      { name: "Production", url: "/production/bill-of-material" },
      { name: "Production Order", url: "/production/production-order" },
    ]
  );
  return (
    <>
      <HeadPage title="Production Order" />
      <DashboardLayout session={session}>
        <h1>PDO</h1>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const checkSession = await handleSessions(ctx);
  return checkSession;
}

export default PdoPage;
