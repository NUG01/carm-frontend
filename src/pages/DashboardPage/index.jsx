import checkAuth from "../../guards/checkAuth";
import BasicAxios from "../../services/axios/BasicAxios";

function DashboardPage({ logoutEmit }) {
  async function logoutHandler() {
    await BasicAxios.post("logout");
    logoutEmit();
  }
  return <div onClick={() => logoutHandler()}>DashboardPage</div>;
}

export default checkAuth(DashboardPage);
