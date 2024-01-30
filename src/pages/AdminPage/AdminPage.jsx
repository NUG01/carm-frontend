import checkAdmin from "../../guards/checkAdmin";

function AdminPage() {
  return <div>admin</div>;
}

export default checkAdmin(AdminPage);
