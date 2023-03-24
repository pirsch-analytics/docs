# Changelog

## 1.18.0

Release: unreleased

* added keyboard controls to domain and time range filter selection
* added check to prevent filter fields from being added twice with the same value
* fixed closing view selection on enter

## 1.17.15

Release: 2023-03-23

* URLs from the referrer header and query parameters (ref, utm_source, ...) are now parsed
* daily email reports now compare the past day with the day before yesterday
* added year to graph tooltips if necessary
* updated dependencies

## 1.17.14

Release: 2023-03-15

* fixed updating email report date to Monday
* fixed branding in email templates

## 1.17.13

Release: 2023-03-14

* fixed light mode
* fixed changing period when switching to tab while holding down a key
* fixed loading statistics after deleting a domain

## 1.17.12

Release: 2023-02-27

* added automatic account deletion of accounts that haven't been used in the past 12 months
* fixed counting imported statistics towards usage limit
* fixed resetting passwords for inactive accounts
* fixed saving views with event metadata
* updated dependencies

## 1.17.11

Release: 2023-02-23

* added region for US cities
* updated dependencies

## 1.17.10

Release: 2023-02-16

* migrated from Hugo to VitePress
* renamed "Access Token" to "Access Key" to prevent any confusions
* fixed and modernized gzip compression
* fixed loading when searching or sorting in panels

## 1.17.9

Release: 2023-02-09

* added event metadata filter
* fixed resetting filter value after closing dropdown when it is empty

## 1.17.8

Release: 2023-02-08

* added titles for all icons without a label
* added note to dashboard customization settings about security
* added affiliate links to public dashboard
* fixed reloading entry/exit/event pages when switching domain
* fixed switching domain after accepting invitation
* fixed live filter when free trial is about to expire
* updated dependencies

## 1.17.7

Release: 2023-02-01

* updated DPA
* fixed broken events settings link

## 1.17.6

Release: 2023-01-30

* fixed write access for user clients
* fixed redirect to login

## 1.17.5

Release: 2023-01-27

* added affiliate program
* improved GSC error email
* fixed account deletion
* updated dependencies

## 1.17.4

Release: 2023-01-22

* allow digits at the beginning of a subdomain
* removed screen width and height from the database (only store screen class)
* updated dependencies

## 1.17.3

Release: 2023-01-15

* improved performance of GA import
* fixed imported statistics from GA

## 1.17.2

Release: 2023-01-14

* fixed GSC and GA redirects
* fixed page views spikes from GA import
* fixed all time filter not including imported statistics
* fixed moving time range using arrows or arrow keys for imported statistics

## 1.17.1

Release: 2023-01-12

* fixed loading locks
* fixed downgrading plan before subscription cycle ends

## 1.17.0

Release: 2023-01-05

* added locks to prevent accidentially modifing settings
* added request cancellation to improve performance
* added pre-filling subdomain field when adding a domain
* added missing plus button to invite members
* added batch inserts for page views, events, and session extensions
* added time zone parameter `tz`
* added dashboard panel customization
* the dashboard now uses the time zone of the viewers browser if set
* improved authentication
* improved the structure of the settings pages
* fixed time range filter step calculation

## 1.16.26

Release: 2022-12-18

* added a rewrite option using the `data-dev` attribute
* added maximum fingerprint lifetime note to website

## 1.16.25

Release: 2022-12-16

* revert: disable filtering on click in lists and tables if there is only one entry

## 1.16.24

Release: 2022-12-16

* update all time date range when switching domains
* fixed adding filters
* fixed invoice charge failed emails for new subscriptions if the first charge fails
* updated Pirsch core
* updated dependencies

## 1.16.23

Release: 2022-12-13

* disable filtering on click in lists and tables if there is only one entry
* merged path_pattern and pattern query parameters
* fixed endless loading for pattern filter
* fixed a few styling issues
* updated dependencies

## 1.16.22

Release: 2022-12-03

* fixed page view limit calculation when subscription was created before the end of the free trial

## 1.16.21

Release: 2022-12-01

* added sessions snippet to settings page
* updated dependencies

## 1.16.20

Release: 2022-11-30

* added data processing agreement
* fixed copying snippets
* fixed duplicate errors on login and sign up

## 1.16.19

Release: 2022-11-28

* fixed searching by path
* updated dependencies

## 1.16.18

Release: 2022-11-27

* added pirsch-sessions.js script to automatically extend sessions
* added bot filter based on IP address
* added event pages as new statistic
* added support email to resources in menu
* added a setting to disable the JavaScript snippets
* moved UTM content and terms panel into referrer panel
* filtering for an event will now include all pages a visitor has visited
* fixed inverting event filter
* fixed extending sessions
* updated dependencies

## 1.16.17

Release: 2022-10-31

* return the actual parse error on HTTP 400 bad request

## 1.16.16

Release: 2022-10-22

* fixed page title for page views
* updated dependencies

## 1.16.15

Release: 2022-10-16

* made GA import more reliable for long periods
* fixed page view calculation for GA import
* fixed sorting table entries on frontend
* fixed resending registration email changing the language
* fixed scrolling in domain selection
* updated dependencies

## 1.16.14

Release: 2022-10-11

* added error message when GA import fails

## 1.16.13

Release: 2022-10-07

* added prefilling the email address when switching from login to forgot password page
* added resending registration email
* added captcha for registration

## 1.16.12

Release: 2022-10-06

* added options to disable the collection of query parameters, referrers, and resolution in scripts
* improved bot filter
* updated Pirsch library
* updated dependencies

## 1.16.11

Release: 2022-10-01

* connect negated parameters using logical AND instead of OR
* fixed sending daily reports and removed time from report date
* updated dependencies

## 1.16.10

Release: 2022-09-22

* added daily email reports
* fixed title showing "undefined" when loading the dashboard
* fixed platform statistics returning sessions instead of unique visitors
* fixed entry/exit pages title showing "Unique visitors" instead of "Entries"/"Exits"
* updated dependencies

## 1.16.9

Release: 2022-09-14

* use active visitor time configuration for all statistics
* updated dependencies

## 1.16.8

Release: 2022-09-11

* reverted entry/exit panels showing visitors instead of the number of entries/exits

## 1.16.7

Release: 2022-09-08

* clicking on a month will now change to day scale instead of displaying weeks
* events are now send asynchronously, so it's no longer required to wait for the request to go through before switching the page
* improved profile picture on settings page
* improved filtering bots
* fixed loading 9 instead of 10 entries
* fixed duplicate entries in referrer panel when quickly changing between periods
* fixed country filter displaying an "empty" entry
* fixed scale when clicking on a month
* fixed `data-dev` attribute for scripts
* fixed sorting entry/exit pages by visitors instead of entries/exits
* updated dependencies

## 1.16.6

Release: 2022-09-05

* fixed public dashboards
* fixed displaying active visitors in tab when opening dashboard for the first time

## 1.16.5

Release: 2022-09-04

* added active visitor time configuration
* added account option to display active visitors in tab
* added snippet configurator
* updated dependencies

## 1.16.4

Release: 2022-08-28

* fixed filter overwriting access code
* fixed switching between views that contain an event in the filter

## 1.16.3

Release: 2022-08-26

* added visitors, sessions, entry/exit rate, and average time on page to entry/exit page statistics when filtering for an event
* fixed entry/exit pages showing 0 visitors when filtering for an event
* fixed statistics not loading when switching to dashboard after reloading/opening the dashboards on one of the settings pages
* fixed displaying month scale on graph
* fixed batch database connection issues
* updated dependencies

## 1.16.2

Release: 2022-08-20

* fixed views on public dashboards
* fixed language selection

## 1.16.1

Release: 2022-08-19

* removed last hr tag from the news
* fixed some typos in the news
* fixed public dashboards
* fixed loading event metadata

## 1.16.0

Release: 2022-08-19

* added multi-filter support
    - filter on the same field connected by logical OR
    - added "contains" option in addition to "is" and "is not"
    - added listing filter options
    - added filtering options by clicking inside a filter
* added the option to save filters as "views"
* added setting a dashboard as favorite that will be loaded after login
* added PWA support for the dashboard
* added a checkbox to stay logged in
* added import from Google Universal Analytics
* changed redirect to login page after the session times out
* overall improvements to the dashboard and changed positions of some elements
* fixed entry/exit rate calculation
* fixed some minor concurrency issues
* fixed month to date and last month date range filters
* updated dependencies

## 1.15.16

Release: 2022-07-09

* debounced keyboard shortcuts and inverting filters
* don't log regex errors when filtering for a pattern
* fixed table only showing top results when changing period using a keyboard shortcut
* updated dependencies

## 1.15.15

Release: 2022-07-05

* changed weekly timescale to start on Monday
* fixed reading IP for JS snippet endpoints
* fixed description for single access token client deletion
* fixed visitor statistics having the right date set depending on the timescale
* updated dependencies

## 1.15.14

Release: 2022-07-01

* added whitelist to JavaScript snippet (`data-include`)
* added icons for browser and operating system
* **removed `cf_connecting_ip`, `x_forwarded_for`, `forwarded`, and `x_real_ip` parameters from API**
* fixed grouping cities and countries when city is unknown
* fixed duplicate keys for referrers when there are two entries with the same referrer but different protocols (http vs https)
* updated dependencies

## 1.15.13

Release: 2022-06-26

* increased maximum subdomain length to 100 characters

## 1.15.12

Release: 2022-06-24

* improved rounding of percentages on the dashboard
* added a `mode` parameter to set the light (`mode=light`) or dark (`mode=dark`) on the dashboard
* added IP spoofing prevention
* updated dependencies

## 1.15.11

Release: 2022-06-22

* fixed time zone related issues on dashboard

## 1.15.10

Release: 2022-06-20

* fixed passing dates without time zone
* fixed using scale URL parameter on dashboard
* fixed meta description on home page

## 1.15.9

Release: 2022-06-19

* translated website to German
* fixed dashboard button still being displayed on website after redirect to login
* fixed event meta data table not updating when changing filter or key does not exist
* updated dependencies

## 1.15.8

Release: 2022-06-15

* fixed setting hostname for page views send using the API using an access token
* fixed panels showing statistics for previous website when adding new website
* fixed referrer for the domain when it was not set in all lower-case
* updated dependencies

## 1.15.7

Release: 2022-06-13

* removed tooltip from UTM content and term panels
* fixed light theme browser color
* fixed create client modal dialog fields depending on the type selected
* fixed displaying "Unknown" in countries panel
* fixed table styling
* updated dependencies

## 1.15.6

Release: 2022-06-08

* moved database backups to Hetzner

## 1.15.5

Release: 2022-06-04

* fixed event and conversion goal buttons being displayed when logged in and viewing public dashboard
* fixed statistics when using a different period other than "day"
* fixed mapping dates back to period
* updated dependencies

## 1.15.4

Release: 2022-05-26

* added a parameter to specify the time (in seconds) active visitors are returned to
* fixed color in email report

## 1.15.3

Release: 2022-05-18

* fixed accepting traffic if the hostname exists more than once
* fixed initial labels on mobile
* fixed opening charts on mobile require two clicks
* fixed an error that occurred when filtering for events while another chart other than the visitors/views chart was open

## 1.15.2

Release: 2022-05-17

* fixed sorting active visitors
* fixed filter limit for free-trials
* fixed accepting traffic for additional domains that also exist on their own
* fixed styling for code blocks on blog

## 1.15.1

Release: 2022-05-16

* fixed showing conversion goal dialog to members without admin permissions
* fixed inconsistent relative values in panels on desktop and mobile
* fixed updating keywords when period is changed
* fixed selecting period after clicking in graph
* updated dependencies

## 1.15.0

Release: 2022-05-15

* added conversion goals and events modal dialog to panels
* added multi-domain support to combine statistics from different websites into a single dashboard or sending statistics to multiple dashboards from a single website
* added 25% separators in panel lines
* added keyboard shortcuts to filter periods
* added scope to keep sessions alive (scope_session)
* added access tokens as an alternative to oAuth clients
* always show conversion goals and events panels
* allow multiple email reports for the same email address at different intervals
* made the chart labels responsive
* the chart can now be hidden and saves which one was opened last
* detailed lists now use the backend to search and sort results and use pagination to show as many results as required
* fixed adding another website when clicking on add website in menu again
* fixed conversion goal table label
* fixed endless loading of charts after joining a dashboard
* updated dependencies

## 1.14.7

Release: 2022-04-25

* period selection will now be set when using arrows to change period
* fixed time ranges showing one more day than expected

## 1.14.6

Release: 2022-04-21

* added tooltips to unexplained numbers
* added hint that it can't take a few seconds before any data is displayed after adding a website
* scale now shows "Hour" when filtering for a single day
* numbers previously rounded to "0%" are now displayed as "< 0.1%"
* changed to bar graph as default
* lots of smaller improvements to texts and design
* fixed filtering entry/exit pages by conversion goal
* fixed filtering by period when clicking on the graph instead of the first day of the week/month/year
* fixed sticky filter on mobile in combination with the scale selection
* fixed alignment of conversion goal patterns

## 1.14.5

Release: 2022-04-14

* fixed and improved CSV export filename
* fixed entry/exit queries when filtering for a path and grouping by page titles
* updated dependencies

## 1.14.4

Release: 2022-04-08

* updated Pirsch core
* updated dependencies

## 1.14.3

Release: 2022-04-05

* fixed calculating growth for today

## 1.14.2

Release: 2022-04-03

* fixed excluding pages in JS snippet
* updated dependencies (including Pirsch SDK)

## 1.14.1

Release: 2022-04-02

* hide scale selection when viewing a single day
* fixed live view

## 1.14.0

Release: 2022-04-02

* added hostname to domain deletion dialog for easy copy and paste
* added date filter by clicking a day in the graph
* added filtering pages (`data-exclude`) by configuring a list of regular expressions in the JS snippet
* added grouping results by week, month, and year
* optimized JS snippets
* improved email report text
* improved conversion goal dialog to make it clearer when regex or pattern is used
* improved bot filtering using simple heuristic
* calculating the growth for today will now take the time into account, and not compare it to the full past day
* sample for conversion goals regex is now saved and loaded on edit
* removed FLoC header (no longer needed)
* fixed live filter after page reload
* fixed subscription warning when free trial has run out but subscription has been activated
* fixed usage on billing page when free trial is still active
* fixed updating usage when deleting data
* fixed number formatting in email reports
* fixed email report interval
* fixed moving day filter with arrows
* fixed grouping referrers with path in URL
* updated dependencies

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
* added automatic time zone selection when creating a domain
* added link to public dashboard on settings pages
* added query parameter to hide UI elements when embedding a dashboard into an iframe
* added live view
* optimized CORS by setting max age header
* news are now served from the API and will be set to latest news on registration (so none is displayed on first login)
* deny embedding the registration, login, or any other related page in iframes (X-Frame-Options)
* removed user time zone settings
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
* fixed setting time zone for dates in frontend
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
* fixed time zones
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

* fixed time zone settings

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
* fixed preselected time zone when adding domain and on account page

## 1.4.0

Release: 2021-05-25

* added client scopes to API
* added support for time zones (user settings and on a domain basis)
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
