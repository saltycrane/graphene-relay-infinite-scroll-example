import { Container, Table } from "reactstrap";

import FishesNavbar from "./FishesNavbar";
import FishesTableBody from "./FishesTableBody";
import FishesTableHead from "./FishesTableHead";
import { withRelayEnvironment } from "./relay-utils";

function FishesPage() {
  return (
    <>
      <FishesNavbar />
      <Container className="py-5">
        <Table>
          <FishesTableHead />
          <FishesTableBody />
        </Table>
      </Container>
    </>
  );
}

export default withRelayEnvironment(FishesPage);
