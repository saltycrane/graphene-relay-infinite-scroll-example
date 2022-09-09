/**
 * @generated SignedSource<<a5a93f3db0b4cea7eb3c94c206f2a8ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FishesTableBody_query$data = {
  readonly allFishes: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly description: string;
        readonly iconUrl: string;
        readonly id: string;
        readonly name: string;
        readonly price: number;
      } | null;
    } | null>;
  } | null;
  readonly " $fragmentType": "FishesTableBody_query";
};
export type FishesTableBody_query$key = {
  readonly " $data"?: FishesTableBody_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"FishesTableBody_query">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "allFishes"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./FishesTableBodyPaginationQuery.graphql')
    }
  },
  "name": "FishesTableBody_query",
  "selections": [
    {
      "alias": "allFishes",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": "name"
        }
      ],
      "concreteType": "FishNodeConnection",
      "kind": "LinkedField",
      "name": "__FishesTableBody_query_allFishes_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FishNodeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "FishNode",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "description",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "iconUrl",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "price",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__FishesTableBody_query_allFishes_connection(orderBy:\"name\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "88afa14524a8282dc84ac72b81c2e9ef";

export default node;
