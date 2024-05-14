

# Minimal EVM squid



## Quickstart

```bash


# 1. Install dependencies
npm ci

# 3. Start a Postgres database container and detach
sqd up

# 4. Build the squid
sqd build

# 5. Start both the squid processor and the GraphQL server
sqd run .
```
A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).

You can also start squid services one by one:
```bash
sqd process
sqd serve
```

## Customize Flow

### 1. Change database schema and Generate TypeORM classed

Change graph query schema on `schema.graphql` by referring following repository.
https://github.com/subsquid/astar-erc-tokens/

Create necessary entity classes under src/model/generated folder by running `sqd codegen` command.

### 2. Import ABI contract and generate interfaces to decode events

Place erc721 and erc1155 ABI definition taken from astar-erc-tokens repository into ./abi folder.
Generate a type-safe facade class to decode EVM log under ./src/abi folder by executing `sqd typegen` command

### 3. Change processor and main script

Change network configration to Polygon in .env and processor.js


### 4. Copy mapping logic from exising repository

### 5 regenerate db schema migration files
```bash
rm -r db/migrations
npx squid-typeorm-migration generate
```

## Reference 
https://docs.subsquid.io/sdk/how-to-start/squid-development/
