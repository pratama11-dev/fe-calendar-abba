import { Sessions } from "types/Session";
import DashboardLayout from "@layouts/DashboardLayout";
import HeadPage from "@components/Global/Header/HeadPage";
import useNavbar from "@layouts/customHooks/useNavbar";
import handleSessions from "./api/GetSession";

function Home(session: Sessions) {
  useNavbar(["home"], [{ name: "Home", url: "/" }]);

  return (
    <>
      <HeadPage title="Home Page" />
      <DashboardLayout session={session}>
        <p>Home...</p>
      </DashboardLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const checkSessions = await handleSessions(context);
  return checkSessions;
}

export default Home;
