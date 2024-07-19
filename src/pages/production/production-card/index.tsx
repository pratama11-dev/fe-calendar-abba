import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import handleSessions from "@pages/api/GetSession";
import { Sessions } from "types/Session";

function ProductionCardPage(session: Sessions) {
  useNavbar(
    ["production", "production/production-card"],
    [
      { name: "Production", url: "/production/bill-of-material" },
      { name: "Production Card", url: "/production/production-card" },
    ]
  );

  return (
    <>
      <HeadPage title="Production Card" />
      <DashboardLayout session={session}>
        <h1>Production Card</h1>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const checkSession = await handleSessions(ctx);
  return checkSession;
}

export default ProductionCardPage;
