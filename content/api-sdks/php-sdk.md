---
title: "PHP SDK"
date: 2021-03-19
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

To use the [API]({{<  ref "api-sdks/api.md"  >}}), you need to create a client on the settings page first and use the client ID, the secret, and hostname to set up the SDK.

```PHP
require __DIR__ . '/vendor/autoload.php'; // or require_once 'pirsch.php'; if you downloaded the file manually

$client = new Pirsch\Client('client_id', 'client_secret', 'example.com');
```

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
