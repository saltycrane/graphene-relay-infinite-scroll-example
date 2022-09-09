# Graphene Relay Infinite Scroll Example

A basic GraphQL infinite scroll example using a [React](https://reactjs.org/) + [Relay](https://relay.dev/) client and a [Django](https://www.djangoproject.com/) + [Graphene](https://graphene-python.org/) server.

### Discretely paged Graphene Relay example

For a pagination API designed for Amazon-style, discrete-paged UIs, designed by Artsy Engineering, see my [artsy pagination example](https://github.com/saltycrane/graphene-relay-pagination-example/tree/artsy-example).

## Graphene GraphQL API server

Data is stored in a PostgreSQL database running in Docker. It is seeded with fish fixture data from [ACNHAPI](https://github.com/alexislours/ACNHAPI). Django is configured to log SQL queries to the console and show that SQL queries use `COUNT`, `LIMIT`, and `OFFSET`. Example:

``` sql
SELECT COUNT(*) AS "__count" FROM "fishes_fish";
SELECT "fishes_fish"."id", "fishes_fish"."description", "fishes_fish"."icon_url", "fishes_fish"."name", "fishes_fish"."price" FROM "fishes_fish" ORDER BY "fishes_fish"."name" ASC LIMIT 5 OFFSET 5;
```

### Usage

- Install Python 3.8
- Install packages, set up database, and run dev server
    ``` sh
    $ cd graphene-api
    $ python3 -m venv venv
    $ source venv/bin/activate
    $ pip install -r requirements.txt
    $ docker-compose up -d
    $ ./bin/resetdb
    $ ./manage.py migrate
    $ ./manage.py loaddata fishes
    $ ./manage.py runserver
    ```

- Go to http://127.0.0.1:8000/graphql/ in the browser

- Run the following query:
    ``` graphql
    {
      allFishes(first: 5) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            id
            description
            iconUrl
            name
            price
          }
        }
      }
    }
    ```

#### Generate GraphQL schema

``` sh
$ ./manage.py graphql_schema --schema pagination_ex_api.schema.schema --out ../schema.graphql
```

## React Relay Next.js web app

The frontend UI uses TypeScript, React, Relay, [Next.js](https://nextjs.org/), and [reactstrap](https://reactstrap.github.io/). It uses the [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) web API and [`usePaginationFragment`](https://relay.dev/docs/api-reference/use-pagination-fragment/) Relay API.

### Usage

- Install Node.js 16
- Install packages and run dev server
  ``` sh
  $ cd react-relay-webapp
  $ npm install
  $ npm run devserver
  ```
  (If you are editing graphql queries, ensure [Watchman](https://facebook.github.io/watchman/) is installed, and use `npm run dev` instead of `npm run devserver`.)

- Go to http://127.0.0.1:3000 in the browser

## Interesting code in this repo

- [/graphene-api/fishes/schema.py](/graphene-api/fishes/schema.py)
- [/react-relay-webapp/src/FishesTableBody.tsx](/react-relay-webapp/src/FishesTableBody.tsx)
- [/react-relay-webapp/src/useInfiniteScroll.tsx](/react-relay-webapp/src/useInfiniteScroll.tsx)
