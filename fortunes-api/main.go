package main

import (
	"flag"

	"github.com/reddragon/elixir"
)

func main() {
	listenPort := flag.Int("port", 8000,
		"The HTTP port to listen on (default: 80)")
	flag.Parse()
	elixir.Start(*listenPort)
}
