---
title: "Privacy"
date: 2021-07-02
draft: false
weight: 7
description: "Learn how Pirsch respects the privacy of your visitors."
---

## We Do Not Track

Unlike other web analytics solutions, Pirsch does not track your visitors. By tracking we mean recognizing visitors across multiple websites. Google Analytics for example will identify a person on two websites that are unrelated to each other to deliver targeted ads. We strictly separate the data for each website and don't sell any information to third party.

## How Does Pirsch Recognize Visitors?

Pirsch makes use of the HTTP protocol to recognize visitors using a technique called fingerprinting. It generates a hash for each page visit calculated from the visitors IP address, the User-Agent header, and a salt. The salt makes sure the hash has some variety between websites, so they cannot be matched. Hashing the combination of these datapoints ensures they are anonymized. **We do not use cookies**. For details, check out the [open-source core](https://github.com/pirsch-analytics/pirsch) of Pirsch.

## What Data Do We Collect?

Pirsch collects and stores the following datapoints, depending on the integration you use ([frontend]({{<ref "get-started/frontend-integration.md">}}) or [backend]({{<ref "get-started/backend-integration.md">}})):

* User-Agent header
* URL visited
* referrer
* UTM source, campaign, medium, content, term
* language
* time of visit
* browser (extracted from the User-Agent)
* operating system (extracted from the User-Agent)
* country
* device type (desktop or mobile, extracted from the User-Agent)
* screen size (frontend only)

## You Are in Charge

You are in charge of the data we collect for you. You can wipe all or parts of the data from the settings page and export statistics to CSV for the last 12 months.
