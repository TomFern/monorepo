package main

import (
	"io/ioutil"
	"log"
	"net/http"
	"strings"
	"testing"
)

func TestQuote(t *testing.T) {
	resp, err := http.Get("http://localhost:8000/test")

	if err != nil {
		t.Fail()
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)

	if err != nil {

		log.Fatal(err)
	}
	if strings.TrimRight(string(body), "\n") != "Highly organized research is guaranteed to produce nothing new." {
		t.Fail()
	}
}
