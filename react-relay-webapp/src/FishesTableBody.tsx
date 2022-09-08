import { graphql, useLazyLoadQuery } from "react-relay";

import { FishesTableBodyQuery } from "./__generated__/FishesTableBodyQuery.graphql";
import { connToArray } from "./relay-utils";

export default function FishesTableBody() {
  const data = useLazyLoadQuery<FishesTableBodyQuery>(
    graphql`
      query FishesTableBodyQuery {
        allFishes {
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
    {},
  );

  const fishes = connToArray(data.allFishes);

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
    </tbody>
  );
}
