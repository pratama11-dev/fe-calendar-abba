import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import DashboardLayout from "@layouts/DashboardLayout";
import handleSessions from "@pages/api/GetSession";
import { Sessions } from "types/Session";

function BomPage(session: Sessions) {
  useNavbar(
    ["/production", "production/bill-of-material"],
    [
      { name: "Production", url: "/production/bill-of-material" },
      { name: "Bill of Material", url: "/production/bill-of-material" },
    ]
  );

  return (
    <>
      <HeadPage title="Bill of Material" />
      <DashboardLayout session={session}>
        <h1>Bill of Material</h1>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const checkSessions = await handleSessions(context);
  return checkSessions;
}

export default BomPage;
