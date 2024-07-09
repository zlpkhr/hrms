package main

import (
	"encoding/json"
	"net/http"
)

type Data struct {
	Name string `json:"name"`
}

func main() {
	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Content-Type", "application/json")

		json.NewEncoder(w).Encode(Data{
			Name: "John Doe",
		})
	})

	http.ListenAndServe("localhost:3000", nil)
}
