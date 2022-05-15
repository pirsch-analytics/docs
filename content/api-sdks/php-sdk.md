---
title: "PHP SDK"
date: 2022-05-05
draft: false
weight: 3
description: "SDK for PHP."
---

The PHP SDK can be found on [GitHub](https://github.com/pirsch-analytics/pirsch-php-sdk).

## Installation

You can install the SDK using Composer or by copying the `pirsch.php` directly.

```Bash
composer require pirsch-analytics/sdk
```

## Create a Client

To use the [API]({{<ref "api-sdks/api.md">}}), you need to create a client on the settings page first and use the client ID, the secret, and hostname to set up the SDK.

```PHP
require __DIR__ . '/vendor/autoload.php'; // or require_once 'pirsch.php'; if you downloaded the file manually

$client = new Pirsch\Client('client_id', 'client_secret', 'example.com');
```

The `client_id` is optional if you use a client with a single access token (starting with `pa_`). Clients using this kind of access tokens can only send data (page views, events, or keep alive sessions). Both types should treat the secret/access token as a password.

From here on we can make API calls through the `$client`. It will automatically update the access token using the credentials you provided.

## Send a Page Hit

To monitor your website traffic, you need to send hits to Pirsch. This is done by calling the `hit` method.

```PHP
try {
	$client->hit();
} catch(Exception $e) {
	// something went wrong...
}
```

`hit` sends all relevant data to Pirsch. Note that the call is made for all requests made by a client and will therefore lead to a lot of different paths being tracked, depending on what the PHP file does. You should make sure to call it for page requests only, and not for resource requests for example.

You can send a hit whenever you want. If you have a page with dynamic content for example, you can check if the content was found and send a hit in that case, or otherwise ignore it.

## Send an Event

You can send [events]({{<ref "dashboard/events.md">}}) to Pirsch including custom metadata fields and a duration. This is done by calling the `event` method.

```PHP
try {
	$client->event('Event Name', 42, ['meta' => 'data', 'clicks' => '19']);
} catch(Exception $e) {
	// something went wrong...
}
```

`event` takes the event name, the duration and a metadata map and sends all relevant data to Pirsch.

## Accessing Your Data

The client offers methods to access your statistics. Before you can use them, read the domain and construct the filter. The filter requires the domain ID and filter range to be set (start and end date). Here is an example on how to read the domain belonging to the client and constructing a simple filter (make sure you handle errors).

```PHP
try {
	$domain = $client->domain();

	$filter = new Pirsch\Filter(); // you might need to import the Filter class if you don't use autoload
	$filter->id = $domain->id;
	$filter->from = "2021-06-19";
	$filter->to = "2021-06-26";
} catch {
	// ...
}
```

You can now use the filter to select results.

```PHP
try {
	$visitors = $client->visitors($filter);

	// do something with visitors
} catch {
	// ...
}
```

Please refer to the GitHub repository for more methods and data types.
