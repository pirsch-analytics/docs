---
title: "JavaScript SDK"
date: 2022-02-12
draft: false
weight: 4
description: "SDK for JavaScript."
---

The JavaScript SDK can be found on [GitHub](https://github.com/pirsch-analytics/pirsch-js-sdk).

## Installation

```Bash
npm i pirsch-sdk
```

## Create a Client

To use the [API]({{<ref "api-sdks/api.md">}}), you need to create a client on the settings page first and use the client ID, the secret, and hostname to set up the SDK.

```JavaScript
var { Client } = require("pirsch-sdk");

var client = new Client({
    hostname: "example.com",
    clientID: "<client_id>",
    clientSecret: "<client_secret>",
    protocol: "https" // used to parse the request URL, default is http
});
```

From here on we can make API calls through the `client`. It will automatically update the access token using the credentials you provided.

## Send a Page Hit

To monitor your website traffic, you need to send hits to Pirsch. This is done by calling the `hit` method from a handler function.

```JavaScript
http.createServer((req, res) => {
    client.hit(client.hitFromRequest(req)).catch(e => {
        console.log(e);
    });
}).listen(8080);
```

`hit` takes a `Hit` object as an input and sends all relevant data to Pirsch. `hitFromRequest` is a helper method that returns a hit object for the given NodeJS http request. Depending on your framework, you might need to fill the object yourself.

Note that the handler above accepts all requests made by a client and will therefore lead to a lot of different paths being tracked. Usually you would make sure that only the page itself gets monitored by checking the requested path.

```JavaScript
// parse the request URL to extract the pathname
const url = new URL(req.url || "", "https://example.com");

if(url.pathname === "/") {
    // send hit
}
```

You can send a hit whenever you want. If you have a page with dynamic content for example, you can check if the content was found and send a hit in that case, or otherwise ignore it.

## Send an Event

You can send [events]({{<ref "dashboard/events.md">}}) to Pirsch including custom metadata fields and a duration. This is done by calling the `event` method from a handler function.

```JavaScript
http.createServer((req, res) => {
    client.event("Event Name", client.hitFromRequest(req), 42, {meta: "data", clicks: 19}).catch(e => {
        console.log(e);
    });
}).listen(8080);
```

`event` takes the event name, the hit object, the duration and a metadata map and sends all relevant data to Pirsch.

## Accessing Your Data

The client offers methods to access your statistics. Before you can use them, read the domain and construct the filter. The filter requires the domain ID and filter range to be set (start and end date). Here is an example on how to read the domain belonging to the client and constructing a simple filter (make sure you handle errors).

```JavaScript
// all client methods might return an APIError, make sure to handle that...
const domain = await client.domain() as Domain;

const filter = {
    id: domain.id,
    from: new Date("2021-06-19"),
    to: new Date("2021-06-26")
};
```

You can now use the filter to select results.

```JavaScript
const visitors = await client.visitors(filter) as VisitorStats[];

// do something with visitors
```

Please refer to the GitHub repository or inline documentation for more methods and data types.
