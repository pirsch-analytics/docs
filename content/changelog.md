---
title: "Changelog"
date: 2021-01-25
draft: false
weight: 6
description: "Overview of all changes."
---

## 1.2.3

Release: unreleased

* improved email templates
* keep charts open on page reload
* send email for upcoming invoices
* added missing number formatting on billing page
* added loading states to pages, lists, and tables

## 1.2.2

Release: 2021-04-09

See below.

## 1.2.1

Release: 2021-04-09

* added white fallback favicon for referrers for dark mode
* added blacklist for disposable email domains
* added copy button after domain creation
* improved email texts
* fixed account settings not showing default filter time range
* fixed live demo showing the past two days instead of the past week

## 1.2.0

Release: 2021-04-04

* better labels for Search Console domains (no "sc-domain:" at the beginning)
* added tabs to the settings page
* added data deletion for selected statistics, all statistics, and a time range
* added transfer of ownership for domains
* improved sign up process and page
* fixed cleaning up statistics if a domain gets deleted

## 1.1.4

Release: 2021-03-31

* improved keywords panel
* fixed panels hiding "unknown" not showing ten results

## 1.1.3

Release: 2021-03-30

* fixed setting default filter time range on registration

## 1.1.2

Release: 2021-03-30

* fixed sign up (wrong sender for emails)
* fixed connecting to Google account

## 1.1.1

Release: 2021-03-29

* fixed Google redirect URI
* fixed logo on live demo

## 1.1.0

Release: 2021-03-28

* added setting to define a default time range for the filter
* added Google Search Console integration to show keywords
* added sortable tables
* added more content on website and better design
* added robots.txt and sitemap.xml to website
* updated dependencies

## 1.0.2

Release: 2021-03-17

* fixed CSV export being limited to one week
* fixed small styling issue

## 1.0.1

Release: 2021-03-14

* fixed some issues with updating subscriptions

## 1.0.0

Release: 2021-03-12

* added payments
* fixed calculating bounce rate growth
* fixed filtering by path for growth statistics

## 0.33

Release: 2021-03-02

* fixed average time on page calculation for today

## 0.32

Release: 2021-02-26

* fixed green bar for propotion in lists
* fixed calculating average time on page/session duration
* fixed visitors today showing NaN on load

## 0.31

Release: 2021-02-26

* added number formatting (separators) to all numbers in lists and tables
* added average session duration to the dashboard
* added time on page to the detailed page statistics (modal dialog)
* added page views to the dashboard
* bounce graph now shows the bounce rate instead of absolute bounces for each day
* added formatting for labels to graphs (on hover)
* moved active pages to a modal dialog (click on the active visitors on top of the dashboard)
* fixed tooltip triggering clicks on mobile and opening up panels
* fixed showing visitors today graph while filtering by page
* fixed deleting accounts marked for deletion
* fixed accepting hits for domains starting with www if the domain has been configured with www as a subdomain

## 0.30

Release: 2021-02-16

* added tooltips to dashboard
* infrastructure and maintenance

## 0.29

Release: 2021-02-14

* added absolute and relative visitor and bounce statistics to CSV export for pages and referrer
* fixed saving history state when navigating
* fixed selecting export dates

## 0.28

Release: 2021-02-06

* fixed country statistics
* fixed order of page statistics
* performance improvements

## 0.27

Release: 2021-01-31

* filter parameters are now displayed in the URL and no longer stored locally
* percentages are now formatted with two decimal places and localized to en-US
* small optimizations for the dashboard
* only allow following referrers if it's a valid URL
* we no longer show referrers on our live demo for our own subdomains, like docs.pirsch.io or our customer public dashboards
* added bounce rate per page and referrer
* added relative visitor count for pages
* display the name and icon for Android apps

## 0.26

Release: 2021-01-26

* removed enlarge button from active page panel (this is a fix)
* fixed modal border when it's scrollable
* fixed referrer in email reports

## 0.25

Release: 2021-01-25

* export your data to CSV in the settings
* add email addresses to send reports (weekly, monthly)
* improved dashboard design and usability (better colors, sticky header)
* fixed filter limits when start date was swapped with end date and and end date was before the limit

## 0.24

Release: 2021-01-19

* the bounce rate is now displayed as a relative number instead of showing the total number of bounces
* fixed updating JavaScript snippet when identification code is reset
* fixed filtering the hostname as a referrer (including www as a prefix)

## 0.23

Release: 2021-01-16

* fixed documentation links after adding a domain
* updated Pirsch library (added source and utm_source as query parameters for referrers)

## 0.22

Release: 2021-01-15

* show selected domain in title
* updated dependencies

## 0.21

Release: 2021-01-14

* added a custom favicon service (open-source, you can find it [here](https://github.com/pirsch-analytics/faser))

## 0.20

Release: 2021-01-13

* updated dependencies

## 0.19

Released: 2021-01-07

* fixed "(unknown)" for languages
* fixed referrer icon for direct/none

## 0.18

Released: 2021-01-07

* added public access links to the settings page
* added profile pictures for members to the settings page
* "(unknown)" is no longer displayed, except you open the detailed view or no other data is present
* opening the detailed view for statistics now show all stats immediately
* better time and day format
* added favicons to referrers

## 0.17

Released: 2021-01-03

* added account deletion on the settings page
* accounts that haven't been activated after a month are now automatically deleted
* fixed time range selection when switching domain or filtering for path
* fixed ignoring subdomains for referrer

## 0.16

Released: 2021-01-01

* screen sizes are now grouped
* added buttons to copy client ID, client secret, and JavaScript snippet to clipboard
* fixed displaying some error messages
* fixed inviting someone to more than one domain with the same mail address

## 0.15

Released: 2020-12-28

* fixed the dashboard not rendering on Safari
* fixed visitors being counted multiple times in statistics for paths
