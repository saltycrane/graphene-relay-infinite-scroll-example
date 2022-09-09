import { graphql, useLazyLoadQuery } from "react-relay";
import { Container, Table } from "reactstrap";

import FishesNavbar from "./FishesNavbar";
import FishesTableBody from "./FishesTableBody";
import FishesTableHead from "./FishesTableHead";
import { FishesPageQuery } from "./__generated__/FishesPageQuery.graphql";
import { withRelayEnvironment } from "./relay-utils";
import { PAGE_SIZE } from "./constants";

function FishesPage() {
  const data = useLazyLoadQuery<FishesPageQuery>(
    graphql`
      query FishesPageQuery($count: Int) {
        ...FishesTableBody_query @arguments(count: $count)
      }
    `,
    { count: PAGE_SIZE },
  );

  return (
    <>
      <FishesNavbar />
      <Container className="py-5">
        <Table>
          <FishesTableHead />
          <FishesTableBody queryRef={data} />
        </Table>
      </Container>
    </>
  );
}

export default withRelayEnvironment(FishesPage);
