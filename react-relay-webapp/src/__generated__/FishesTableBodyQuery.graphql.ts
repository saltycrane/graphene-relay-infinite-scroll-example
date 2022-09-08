/**
 * @generated SignedSource<<043133b4caea9c00cc82286762b7242d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FishesTableBodyQuery$variables = {};
export type FishesTableBodyQuery$data = {
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
};
export type FishesTableBodyQuery = {
  response: FishesTableBodyQuery$data;
  variables: FishesTableBodyQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "FishNodeConnection",
    "kind": "LinkedField",
    "name": "allFishes",
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FishesTableBodyQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FishesTableBodyQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f7364c6e97ed5431b6c9ad0111001a31",
    "id": null,
    "metadata": {},
    "name": "FishesTableBodyQuery",
    "operationKind": "query",
    "text": "query FishesTableBodyQuery {\n  allFishes {\n    edges {\n      node {\n        description\n        iconUrl\n        id\n        name\n        price\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d16c85ec628cde961fc04a0e056949a5";

export default node;
