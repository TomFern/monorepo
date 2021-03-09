# Monorepo Demo

The demo consists of two components:

- `fortune-api`: returns random quotes, written in Go.
- `fortune-server`: a Next.js server that shows the quotes.

The CI pipeline tests both components independently at first, then runs an integration. The pipeline ends with Docker builds.

## Build and test

```bash
$ cd fortune-api
$ go test ./...
$ go build .
```

```bash
$ cd fortune-server
$ yarn dev
```


