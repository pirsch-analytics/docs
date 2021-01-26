---
title: "Privacy"
date: 2020-12-26
draft: false
weight: 5
description: "Learn how Pirsch respects the privacy of your visitors."
---

## We Do Not Track

Unlike other web analytics solutions, Pirsch does not track your visitors. By tracking we mean recognizing visitors across multiple websites. Google Analytics for example will identify a person on two websites that are unrelated to each other to deliver targeted ads. We strictly separate the data for each website and don't sell any information to third party.

## How Does Pirsch Recognize Visitors?

Pirsch makes use of the HTTP protocol to recognize visitors using a technique called fingerprinting. It generates a hash for each page visit calculated from the visitors IP address, the User-Agent header, the current date, and a salt. The date makes sure visitors won't be recognized across days, while the salt makes sure the hash has some variety between websites, so they cannot be matched. Hashing the combination of these datapoints ensures they are anonymized. Additionally, they are aggregated once per day into the statistics you see on the dashboard and deleted afterwards. **We do not use cookies**. For details, check out the [open-source core](https://github.com/pirsch-analytics/pirsch) of Pirsch.

## What Data Do We Collect?

Pirsch collects and stores the following datapoints, depending on the integration you use ([frontend]({{< ref "get-started/frontend-integration.md" >}}) or [backend]({{< ref "get-started/backend-integration.md" >}})):

* User-Agent header
* URL visited
* referrer
* language
* time of visit
* browser (extracted from the User-Agent)
* operating system (extracted from the User-Agent)
* country
* device type (desktop or mobile, extracted from the User-Agent)
* screen size (frontend only)

## You Are in Charge

You are in charge of the data we collect for you. You can wipe all data by deleting the website on the dashboard or by sending us a support request ([support@pirsch.io](mailto:support@pirsch.io)). You can export your data to CSV for the last 12 months.
