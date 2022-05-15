---
title: "Go SDK"
date: 2022-05-05
draft: false
weight: 2
description: "SDK for Golang."
---

[![Go Reference](https://pkg.go.dev/badge/github.com/pirsch-analytics/pirsch-go-sdk?status.svg)](https://pkg.go.dev/github.com/pirsch-analytics/pirsch-go-sdk?status)

The Go SDK can be found on [GitHub](https://github.com/pirsch-analytics/pirsch-go-sdk).

## Installation

```Bash
go get github.com/pirsch-analytics/pirsch-go-sdk
```

## Create a Client

To use the [API]({{<ref "api-sdks/api.md">}}), you need to create a client on the settings page first and use the client ID, the secret, and hostname to set up the SDK.

```Go
import "github.com/pirsch-analytics/pirsch-go-sdk"

client := pirsch.NewClient("client_id", "client_secret", "example.com", nil)
```

The `client_id` is optional if you use a client with a single access token (starting with `pa_`). Clients using this kind of access tokens can only send data (page views, events, or keep alive sessions). Both types should treat the secret/access token as a password.

From here on we can make API calls through the `client`. It will automatically update the access token using the credentials you provided. The last parameter is optional and can be set to nil.

## Send a Page Hit

To monitor your website traffic, you need to send hits to Pirsch. This is done by calling the `Hit` method from a handler function.

```Go
http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    go func() {
        if err := client.Hit(r); err != nil {
            log.Println(err)
        }
    }()

    w.Write([]byte("<h1>Hello from Pirsch!</h1>"))
})
```

`Hit` takes the `http.Request` object as an input and sends all relevant data to Pirsch. This is done synchronously, so you might want to do it asynchronously by calling it using the `go` command, like in the example above. Note that the handler above accepts all requests made by a client and will therefore lead to a lot of different paths being tracked. Usually you would make sure that only the page itself gets monitored by checking the requested path.

```Go
if r.URL.Path == "/" {
    // send hit
}
```

You can send a hit whenever you want. If you have a page with dynamic content for example, you can check if the content was found and send a hit in that case, or otherwise ignore it.

## Send an Event

You can send [events]({{<ref "dashboard/events.md">}}) to Pirsch including custom metadata fields and a duration. This is done by calling the `Event` method from a handler function.

```Go
http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    go func() {
        meta := map[string]string{
            "meta": "data",
            "clicks": "19",
        }

        if err := client.Event("Event Name", 42, meta, r); err != nil {
            log.Println(err)
        }
    }()

    w.Write([]byte("<h1>Hello from Pirsch!</h1>"))
})
```

`Event` takes the event name, the duration, a metadata map and the `http.Request` object as an input and sends all relevant data to Pirsch. This is done synchronously, so you might want to do it asynchronously by calling it using the `go` command, like in the example above.

## Accessing Your Data

The client offers methods to access your statistics. Before you can use them, read the domain and construct the filter. The filter requires the domain ID and filter range to be set (start and end date). Here is an example on how to read the domain belonging to the client and constructing a simple filter (make sure you handle the errors).

```Go
domain, err := client.Domain()

filter := &pirsch.Filter{
    DomainID: domain.ID,
    From:     time.Now().Add(-time.Hour * 24 * 7), // one week
    To:       time.Now(),
}
```

You can now use the filter to select results.

```Go
visitors, err := client.Visitors(filter)

// do something with visitors
```

Please refer to the full documentation for more methods and data types.
