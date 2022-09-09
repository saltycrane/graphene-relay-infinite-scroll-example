import { useCallback, useRef } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import { Spinner } from "reactstrap";

import { FishesTableBody_query$key } from "./__generated__/FishesTableBody_query.graphql";
import { PAGE_SIZE } from "./constants";
import { connectionToArray } from "./relay-utils";
import useInfiniteScroll from "./useInfiniteScroll";

type TProps = {
  queryRef: FishesTableBody_query$key;
};

export default function FishesTableBody({ queryRef }: TProps) {
  const { data, hasNext, isLoadingNext, loadNext } = usePaginationFragment(
    graphql`
      fragment FishesTableBody_query on Query
      @argumentDefinitions(count: { type: "Int" }, cursor: { type: "String" })
      @refetchable(queryName: "FishesTableBodyPaginationQuery") {
        allFishes(after: $cursor, first: $count, orderBy: "name")
          @connection(key: "FishesTableBody_query_allFishes") {
          edges {
            node {
              description
              iconUrl
              id
              name
              price
            }
          }
        }
      }
    `,
    queryRef,
  );

  const fishes = connectionToArray(data.allFishes);

  const lastRowRef = useRef<HTMLTableRowElement>();

  const handleScrollIntoView = useCallback(() => {
    if (hasNext) {
      loadNext(PAGE_SIZE);
    }
  }, [hasNext, loadNext]);

  useInfiniteScroll({
    elementRef: lastRowRef,
    onScrollIntoView: handleScrollIntoView,
  });

  return (
    <tbody>
      {fishes.map((fish) => {
        return (
          <tr key={fish.id}>
            <td className="p-0">
              {/* eslint-disable-next-line */}
              <img src={fish.iconUrl} />
            </td>
            <td>{fish.name}</td>
            <td>{fish.description}</td>
            <td>{fish.price}</td>
          </tr>
        );
      })}
      <tr ref={lastRowRef}>
        {isLoadingNext && (
          <td className="border-0 text-center text-muted" colSpan={99}>
            <Spinner size="sm" /> Loading...
          </td>
        )}
      </tr>
    </tbody>
  );
}
