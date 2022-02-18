---
title: "Changelog"
date: 2022-02-18
draft: false
weight: 8
description: "Overview of all changes."
---

## 1.13.6

Release: 2022-02-18

* fixed checking access for client SDKs

## 1.13.5

Release: 2022-02-15

* fixed resetting filter after selecting dates
* updated dependencies

## 1.13.4

Release: 2022-02-14

* handle bad GSC integrations
* don't unlink GSC on the first error, keep trying for up to three days
* fixed counting bounces multiple times when grouping by pages

## 1.13.3

Release: 2022-02-13

* updated Pirsch library

## 1.13.2

Release: 2022-02-11

* added month to date and last month time range filter
* added support for custom conversion goal patterns using regular expressions (regex)
* added GSC validation and automatic removal and email on error
* added arrows to move the time interval
* added country flag to city panel
* merged system and device panels
* changed size of main graph
* improved backup folder structure
* fixed screens not displaying "no data found" when no data is present
* updated dependencies

## 1.13.1

Release: 2022-01-29

* added automatic incremential backups
* always display cities panel
* fixed charts on mobile when filtering for a single day

## 1.13.0

Release: 2022-01-19

* added sessions, views, bounces, and bounce rate to hourly visitor statistics
* updated Hugo version for docs
* retry generating docs after an error
* fixed average session duration calculation
* updated dependencies

## 1.12.9

Release: 2022-01-09

* fixed subscription checkout

## 1.12.8

Release: 2022-01-06

* fixed session collapsing and caching

## 1.12.7

Release: 2022-01-05

* fixed chart color

## 1.12.6

Release: 2021-12-31

* fixed opening language details
* fixed displaying "unknown" in lists
* updated pricing
* updated dependencies

## 1.12.5

Release: 2021-12-23

* set theme-color depending on light or dark mode settings
* website and blog optimizations
* fixed round corners for modal dialogues on Safari
* fixed cleaning up non-confirmed accounts
* updated dependencies

## 1.12.4

Release: 2021-12-21

* integrated blog into website
* fixed updating a client returning the client secret again
* fixed detecting Windows 11
* updated dependencies

## 1.12.3

Release: 2021-12-15

* removed `hostname` from API (not required)
* fixed session collapsing issues
* updated dependencies

## 1.12.2

Release: 2021-12-13

* fixed grouping referrers with trailing slashes

## 1.12.1

Release: 2021-12-12

* fixed smaller configuration issues
* fixed entry/exit page panels not being displayed when filtering for an event

## 1.12.0

Release: 2021-12-12

* added entry/exit path filter to events
* added filters for screen width and height (exact match)
* added filtering for event metadata (API only right now)
* added new API endpoint to list events including metadata
* added user client API to perform actions that previously could only be performed by a user
* popular referrers are now grouped (like google.com and google.de -> Google)
* OS versions will now be grouped by minor version instead of the full version string (10.12 instead of 10.12.3 for example)
* sessions are now reset when the referrer or UTM parameters change
* sessions will no longer count as bounced when an event is received
* set filter limit to the release of Pirsch instead of one year back
* optimized checking permissions on hit/event/session requests
* updated dependencies

## 1.11.6

Release: 2021-11-26

* hide growth in live filter
* fixed switching country/city/language tabs when adding or removing filters
* fixed charts being updated multiple times
* fixed GSC keywords loading infinitely

## 1.11.5

Release: 2021-11-25

* new graph for top statistics
* fixed events label for event metadata table

## 1.11.4

Release: 2021-11-18

* added missing defer for event script snippet
* added option to ignore `pirsch.js` and `pirsch-event.js` using the localStorage

## 1.11.3

Release: 2021-11-14

* merged panels where it makes sense and only load data when opened
* load all news instead of the latest three
* always show CR for conversion goals and events
* improved title (on hover) wherever possible
* removed title (on hover) for values (redundant)
* removed obvious hints from panels
* fixed login, logout, and sign up buttons not working on public dashboards
* updated dependencies and replaced JWT library

## 1.11.2

Release: 2021-11-09

* fixed X-Frame-Options header for dashboard

## 1.11.1

Release: 2021-11-09

* removed visitors by hour when live filter is active
* fixed light/dark mode settings on account page
* fixed styling for filter and domain selection
* updated dependencies

## 1.11.0

Release: 2021-11-07

* added domain search to selection
* added auto selection for light/dark mode
* added automatic timezone selection when creating a domain
* added link to public dashboard on settings pages
* added query parameter to hide UI elements when embedding a dashboard into an iframe
* added live view
* optimized CORS by setting max age header
* news are now served from the API and will be set to latest news on registration (so none is displayed on first login)
* deny embedding the registration, login, or any other related page in iframes (X-Frame-Options)
* removed user timezone settings
* fixed some statistics loading twice on a single filter change
* fixed panels showing different totals than chart due to grouping by day and summing up results
* updated Hugo
* updated dependencies

## 1.10.7

Release: 2021-11-01

* fixed small Pirsch (library) configuration issue

## 1.10.6

Release: 2021-10-27

* added timeout for GSC requests
* fixed collecting page title if enabled
* fixed email report scale
* fixed sending email report without previous data
* fixed email report chart time range
* updated dependencies

## 1.10.5

Release: 2021-10-23

* fixed setting start date in frontend
* fixed session collapsing

## 1.10.4

Release: 2021-10-22

* renamed views to events in event details panel
* removed focus of table search on mobile devices
* removed the requirement to send a page view before an event can be tracked
* fixed line chart labels
* fixed setting timezone for dates in frontend
* fixed active pages keeps loading after switching to dashboard from another page

## 1.10.3

Release: 2021-10-22

* fixed statistics that were wrong due to last larger update (v1.10)
* updated dependencies

## 1.10.2

Release: 2021-10-18

* fixed reading active visitors directly from hit table
* fixed reading full referrer (for favicon URL)

## 1.10.1

Release: 2021-10-18

* fixed visitor statistics limit

## 1.10.0

Release: 2021-10-18

* added hostname to fingerprint salt
* performance improvements for all queries
* improved panel labels when filtering for an event
* removed bounce rate for events
* updated dependencies

## 1.9.8

Release: 2021-10-11

* added endpoint to manually extend sessions
* fixed events counting up page views

## 1.9.7

Release: 2021-10-10

* fixed updating referrer panel when the referrer name and URL are equal
* fixed timezones
* fixed setting filter date when the end date is today
* updated dependencies

## 1.9.6

Release: 2021-10-07

* added autofocus for search fields in modal dialogues
* fixed filtering for null when pressing Ctrl + A in modal dialog search field
* fixed too many calls of history.replaceState
* fixed average session duration being distorted by broken session lengths

## 1.9.5

Release: 2021-10-05

* fixed timezone settings

## 1.9.4

Release: 2021-09-29

* fixed path filter for entry/exit pages
* fixed entry/exit rate calculation
* fixed total bounce rate calculation
* fixed signup confirmation email sender

## 1.9.3

Release: 2021-09-28

* use Redis as a session cache
* added filtering entry/exit pages for paths back in

## 1.9.2

Release: 2021-09-27

* fixed filtering for entry/exit pages while filtering for a page

## 1.9.1

Release: 2021-09-25

* fixed referrer modal dialog

## 1.9.0

Release: 2021-09-25

### Changes to the Dashboard

* referrers are now grouped by hostname (if possible)
* filtering for a referrer will reveal the full list of links visitors came from
* statistics can now be filtered by the entry and exit page, in addition to the regular page filter
* the entry and exit page panels now include the entry and exit rates
* filtering for a country now displays a city panel
* statistics can now be filtered by "unknown" and are displayed as "null" in the filter list (e.g. "Referrer is null")
* tabs in panels are no longer reset to the first tab if you change the filter

### Technical Changes to the Core

* added rolling forward page view information for deeper analysis of sessions
* added filtering for entry and exit page
* added filtering for "none"/"unknown" (empty strings) by setting a filter to "null"
* added all statistics available for hits to events as well
* added optional limit for active visitor statistics
* added merging referrers by hostname and detailed statistics by filtering for the referrer name
* added city statistics
* added method to clear session cache to tracker
* optimized data layout
* optimized statistics queries
* optimized filter (non required fields are now longer selected)
* the User-Agent header is now stored in a separate table for later analysis (filtering bots)
* removed unused UserAgent and full URL from hit and event table
* remove trailing slashes from referrer URLs
* updated dependencies

## 1.8.9

Release: 2021-09-16

* updated website and dashboard UI

## 1.8.8

Release: 2021-09-14

* show individual usage limits on billing page
* updated Pirsch library

## 1.8.7

Release: 2021-09-10

* added gzip compression to pirsch.js, pirsch-event.js, and pictures
* added filter inversion
* added individual pages for each settings tab
* added dashboard button (the logo will be used differently in the future)
* fixed filtering by unknown/none in detailed view
* updated Pirsch library
* updated dependencies

## 1.8.6

Release: 2021-09-07

* updated Pirsch library

## 1.8.5

Release: 2021-09-07

* changed session time from 15 to 30 minutes
* updated website

## 1.8.4

Release: 2021-09-04

* added defer to JavaScript snippets
* added different number formatting for axis and values to charts
* platforms (desktop, mobile, unknown) with no visitors are now hidden
* added more screen classes
* updated Pirsch library
* updated dependencies

## 1.8.3

Release: 2021-09-02

* fixed pirsch-events.js parameter encoding

## 1.8.2

Release: 2021-08-31

* fixed UTM parameters when using pirsch.js and encode URL parameters

## 1.8.1

Release: 2021-08-30

* added response to JWT middleware

## 1.8.0

Release: 2021-08-28

* numbers are now shortened when greater than 1000 (displayed as 1.2k and 1.23m)
* added titles to all numbers to display their raw value (31% = 0.3195..., 1.2k = 1234, and so on)
* added active domain to URL so that it sets the correct domain when sharing a link to a private dashboard
* added descriptive time interval values to the URL (like "today", "7d", ... instead of the index)
* added text filter to modal dialogues
* added dynamic page view limit to overwrite default plans
* added country flags
* added grouping page results by title instead of path (for dynamic pages, like `/article?id=123`)
* fixed displaying hours in durations
* fixed deleting conversion goals when deleting domain
* fixed deleting conversion goals when deleting account
* fixed updating domain on settings page
* updated dependencies

## 1.7.10

Release: 2021-08-17

* added JavaScript event function mock for easier debugging

## 1.7.9

Release: 2021-08-13

* added more testimonials to website
* fixed default time range interval for public dashboards (back to one week)
* updated dependencies

## 1.7.8

Release: 2021-08-10

* added "yesterday" option to time range filter
* added news modal dialog
* small improvements to the website, settings, and more
* updated dependencies
* fixed reading email report domains

## 1.7.7

Release: 2021-07-31

* enabled tax ID collection on checkout

## 1.7.6

Release: 2021-07-29

* updated landing page
* fixed double minus sign in reports
* fixed loading metadata if no keys are present

## 1.7.5

Release: 2021-07-25

* added registration event to website

## 1.7.4

Release: 2021-07-24

* updated pirsch.js ("modernized")
* updated pirsch-events.js to return a promise

## 1.7.3

Release: 2021-07-24

* fixed event scope being used to send hits
* fixed missing event scope when creating JWTs

## 1.7.2

Release: 2021-07-23

* added missing event average duration to panel and metadata

## 1.7.1

Release: 2021-07-23

* fixed event metadata value label in table

## 1.7.0

Release: 2021-07-23

* added custom event tracking
* added custom events to CSV export (not including metadata yet)
* added white background to favicon
* simplified email report content
* updated dependencies
* fixed filter showing regex instead of pattern for conversion goals
* fixed redirect to login if token runs out or is invalid
* fixed displaying 0% in lists on the dashboard
* fixed charts in panels on Safari

## 1.6.6

Release: 2021-07-06

* fixed link in social proof section (full width)
* added referrer to outgoing links in social proof section

## 1.6.5

Release: 2021-07-06

* added social proof section to landing page

## 1.6.4

Release: 2021-07-02

* visitors are now tracked across days (GDPR compliant)
* time on page is now limited to one hour so that idle visitors have less impact on the average time on page
* updated dependencies

## 1.6.3

Release: 2021-07-01

* increased access token leeway to reduce errors when requests are made to a different node from the one the JWT was scheduled on

## 1.6.2

Release: 2021-06-24

* fixed sending conversion goal reached emails
* fixed link to dashboard on website

## 1.6.1

Release: 2021-06-19

* improved create goals modal dialog
* fixed path patterns for conversion goals

## 1.6.0

Release: 2021-06-17

* added conversion goals for pages (using a pattern)
* added conversion goals to CSV export
* swapped views and visitors in page details modal dialog
* updated Pirsch library
* updated dependencies
* fixed updating keywords panel
* fixed calculating relative visitors and views
* fixed database transaction leaks

## 1.5.3

Release: 2021-06-12

* fixed limiting access when calculating number of hits (now includes deleted domains)

## 1.5.2

Release: 2021-06-10

* remove member from domain on ownership transfer to that particular user
* show usage for domains that have been deleted on billing page

## 1.5.1

Release: 2021-06-06

* optimized loading pages and referrer (invisible panels are first loaded when needed)
* added browser and operating system versions (enlarge the panel)

## 1.5.0

Release: 2021-06-03

* added entry and exit pages
* optimized loading statistics (invisible panels are first loaded when needed)
* fixed report colors
* updated dependencies

## 1.4.2

Release: 2021-05-30

* added hard limit for the number of domains a user can have (to 1000 by default, as spam protection)
* fixed filter not showing today if set to today from URL parameter

## 1.4.1

Release: 2021-05-25

* added blog link to resources on dashboard
* fixed preselected timezone when adding domain and on account page

## 1.4.0

Release: 2021-05-25

* added client scopes to API
* added support for timezones (user settings and on a domain basis)
* added API access read domains for clients
* removed visitor by time of day sum as that was confusing and didn't make much sense (the sum is correct, but has a different meaning than the unique visitor sum above)
* fixed loading indicator position on some pages
* fixed bounce rate in email reports and colors

## 1.3.3

Release: 2021-05-19

* added views to email reports
* fixed percentage formatting in reports and colors

## 1.3.2

Release: 2021-05-14

* token expiration is now set to UTC
* fixed access token validation if a token was created on another server

## 1.3.1

Release: 2021-05-14

* fixed screen panel displayed if no statistics available
* fixed countries showing 9 instead of 10 results due to "empty" country code containing null bytes
* fixed integration for pirsch.io

## 1.3.0

Release: 2021-05-13

* added UTM parameters to track ad campaigns and customized URLs
* added number formatting to email reports
* added stackable filters to better analyze data
* removed visitors by time of day for the past week
* switched to ClickHouse to generate statistics, this should improve the performance and scalability
* detailed graphs are now shown in modal dialogues
* improved loading indicators on panels
* fixed graph rendering on some email clients for email reports
* fixed styling on Safari desktop and mobile

## 1.2.5

Release: 2021-04-23

* added missing DNT (do not track) header to API and JS integrations
* require billing address collection on checkout
* updated dependencies

## 1.2.4

Release: 2021-04-16

* opt out of Google FLoC
* added loading states when switching filter or domain on settings page
* fixed deleting accounts
* fixed active visitors modal z-index (it was above header)
* fixed flickering on modal dialoges while loading more data

## 1.2.3

Release: 2021-04-15

* improved email templates
* keep charts open on page reload
* send email for upcoming invoices
* added missing number formatting on billing page
* added loading states (spinner) to pages, lists, and tables
* fixed deleting domains with email reports
* fixed showing subscription banner to members (only the owner of the current domain is supposed to see warnings)
* updated dependencies

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
