/**
 * @generated SignedSource<<f05d3c96d981d995113e25938ba1d954>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FishesTableBody_fishConnection$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly description: string;
      readonly iconUrl: string;
      readonly id: string;
      readonly name: string;
      readonly price: number;
    } | null;
  } | null>;
  readonly pageInfo: {
    readonly " $fragmentSpreads": FragmentRefs<"useInfiniteScroll_pageInfo">;
  };
  readonly " $fragmentType": "FishesTableBody_fishConnection";
};
export type FishesTableBody_fishConnection$key = {
  readonly " $data"?: FishesTableBody_fishConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"FishesTableBody_fishConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FishesTableBody_fishConnection",
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
            }
          ],
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "useInfiniteScroll_pageInfo"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "FishNodeConnection",
  "abstractKey": null
};

(node as any).hash = "5c646f721e9211f22e949c2ce12d0818";

export default node;
