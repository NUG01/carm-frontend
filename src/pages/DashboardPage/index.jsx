import BasicHeader from '../../components/Header';
import checkAuth from '../../guards/checkAuth';
import BasicAxios from '../../services/axios/BasicAxios';

function DashboardPage({ logoutEmit }) {
  async function logoutHandler() {
    await BasicAxios.post('logout');
    logoutEmit();
  }

  return (
    <div>
      <BasicHeader></BasicHeader>
    </div>
  );
}

export default checkAuth(DashboardPage);
