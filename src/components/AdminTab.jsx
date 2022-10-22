import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AdminPrograms from "./AdminPrograms";
import AdminFundraisers from "./AdminFundraisers";
import DataTable from "./DataTable";

function AdminTab() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Donations">
              <DataTable />
            </Tab>
            <Tab eventKey="profile" title="Fundraisers">
              <AdminFundraisers />
            </Tab>
            <Tab eventKey="longer-tab" title="Programs">
              <AdminPrograms />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AdminTab;
