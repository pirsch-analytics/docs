# Changelog

## 2.10.10

Release: 2025-02-23

* fixed storing a page view for an event if the session hasn't been created yet
* updated dependencies

## 2.10.9

Release: 2025-02-20

* added block list for auto-join feature in organizations to exclude common email providers
* prevent running deletion process again if it hasn't finished
* updated dependencies

## 2.10.8

Release: 2025-02-19

* improved importer (GA, Plausible, Fathom)
* fixed long running import jobs
* updated dependencies

## 2.10.7

Release: 2025-02-12

* always store a page view, even if bounced
* fixed time on page when first page is reloaded multiple times

## 2.10.6

Release: 2025-02-10

* added conversion rate for all filter fields
* improved bot filters
* improved OS and OS version mapping
* fixed reading imported statistics with platform filter
* fixed missing conversion rate graph on mobile
* updated dependencies

## 2.10.5

Release: 2025-01-31

* fixed missing API scopes

## 2.10.4

Release: 2025-01-29

* added option to disable docs links (Enterprise)
* updated dependencies

## 2.10.3

Release: 2025-01-28

* added tags to conversion goals
* fixed creating conversion goals with pattern that already exists but different event name
* updated dependencies

## 2.10.2

Release: 2025-01-20

* fixed attaching UTM parameters to URL shortener

## 2.10.1

Release: 2025-01-19

* fixed listing funnels without tags

## 2.10.0

Release: 2025-01-19

* added URL shortener
* added tags to organize funnels
* fixed growth arrow
* updated dependencies

## 2.9.10

Release: 2025-01-15

* fixed numbers in chart tooltip when comparing periods
* fixed growth calculation in chart tooltip

## 2.9.9

Release: 2025-01-14

* added search parameter to reading domains, funnels, conversion goals, organizations, organization domains, themes, and views
* improved subdomain hint when adding a website
* fixed lock dialog opening/closing funnels

## 2.9.8

Release: 2025-01-05

* fixed (unexploited) security issues with API

## 2.9.7

Release: 2025-01-02

* fixed number formatting in graph tooltip
* fixed error when adding new step to existing funnel
* fixed funnels including identical steps
* fixed last month period in January

## 2.9.6

Release: 2024-12-22

* fixed funnel step limit on dashboard

## 2.9.5

Release: 2024-12-22

* added individual funnel step limit

## 2.9.4

Release: 2024-12-16

* allow overriding the include_title option in the filter
* updated dependencies

## 2.9.3

Release: 2024-12-11

* fixed subscription update webhook
* updated dependencies

## 2.9.2

Release: 2024-12-02

* added theme option to hide the logo
* fixed chart tooltip on mobile

## 2.9.1

Release: 2024-11-27

* fixed tooltip text color in light mode
* fixed sorting cities with non-ASCII characters in name

## 2.9.0

Release: 2024-11-26

* added closing filters one ESC key
* added period setting to overview
* added custom tooltip including growth to charts
* added settings and upgrade buttons to page view limit warning email
* added number formatting to emails
* added customization for email reports (graph, summary, pages, referrer, events)
* added anonymous gclid and msclkid tracking
* added source attribution channels
* added option to disable search engine indexing for custom domains
* improved bot filtering
* fixed chart in daily email reports
* fixed missing countries on map
* updated dependencies

## 2.8.16

Release: 2024-11-22

* fixed add funnel in dropdown when not an admin
* fixed add organization in dropdown when not on a Plus subscription
* fixed displaying access denied errors

## 2.8.15

Release: 2024-11-19

* improved Enterprise white-labeling

## 2.8.14

Release: 2024-11-15

* fixed country filter
* fixed translating validation errors
* updated dependencies

## 2.8.13

Release: 2024-11-08

* improved captcha
* updated dependencies

## 2.8.12

Release: 2024-11-08

* switched to locally hosted captcha solution

## 2.8.11

Release: 2024-11-06

* added ClickHouse replication
* updated dependencies

## 2.8.10

Release: 2024-10-30

* added configuration to set the page view limit per session individually per client
* improved billing page
* updated dependencies

## 2.8.9

Release: 2024-10-21

* fixed opening pages from panel

## 2.8.8

Release: 2024-10-18

* improved Italian translations
* improved subscription process
* fixed saving email log entries
* fixed clearing live updates when user isn't set yet on load
* fixed showing subscription warning on billing page
* fixed duplicate path entries (pages, entry pages, exit pages, event pages, active visitors)
* updated dependencies

## 2.8.7

Release: 2024-10-08

* removed hostname fallback
* fixed including VPNs if they're also part of a data center IP range
* fixed email report charts
* updated dependencies

## 2.8.6

Release: 2024-10-04

* added options to disable funnels and sessions page
* moved event pages to events panel
* fixed hostname in path, entry, and exit panel
* fixed number of events when filtering for a path or regex

## 2.8.5

Release: 2024-10-02

* switched from AWS S3 to Hetzner Object Storage

## 2.8.4

Release: 2024-10-01

* fixed hostname not being set for server-side tracking via API

## 2.8.3

Release: 2024-09-30

* fixed reading entry/exit pages for a lot of pages
* fixed regex filter for imported statistics and platforms
* fixed uppercase/lowercase hostname configuration
* updated dependencies

## 2.8.2

Release: 2024-09-27

* added missing identification code hint on script snippet configuration
* added region, city, tags, and hostnames to CSV export
* fixed exporting page views to CSV with a lot of different paths
* updated dependencies

## 2.8.1

Release: 2024-09-26

* fixed weekday label
* fixed reading non existing object from S3
* updated dependencies

## 2.8.0

Release: 2024-09-26

* BREAKING: fixed configuring hostname alternative (the identfication code is now required for roll-up views!)
* added tracking hostnames by default
* added hostname panel and filtering
* added hostnames to page results (including entry, exit, and event pages)
* added visitors by weekday and hour panel
* added applying filter to first funnel step
* added pattern to filter selection
* added expiration date for access links
* added access links to email reports
* added sorting entry/exit page results by entry/exit rate
* added comparison mode for funnel
* added conversion rate graph for goals
* improved Plausible and Fathom imports
* fixed storing milliseconds
* fixed patterns starting with special filter characters
* fixed resetting active chart when removing path/pattern filter
* fixed nil pointer reading user pictures
* updated dependencies

## 2.7.13

Release: 2024-09-05

* improved Arc detection
* improved error messages
* fixed Japanese error message translations
* updated dependencies

## 2.7.12

Release: 2024-09-03

* added tooltips for growth and funnel data
* fixed period for overview
* fixed missing field in page view, event, and session parameter validation

## 2.7.11

Release: 2024-09-02

* added rate limiting for all endpoints that do not deal with data ingress, statistics, and aquiring an access token
* updated dependencies

## 2.7.10

Relesae: 2024-09-01

* added password check when updating email address
* fixed logo, buttons, copyright, dark mode, and language switch flashing when loading a dashboard with custom theme
* fixed trying to sign out user on public dashboard with access code
* improved logging

## 2.7.9

Release: 2024-08-28

* updated custom domain IP addresses

## 2.7.8

Release: 2024-08-27

* tracking optimizations
* data aggregation optimizations
* updated scripts to support identification in rollup views, although they are not used yet
* updated dependencies

## 2.7.7

Release: 2024-08-23

* fixed missing endpoint scopes to list funnel

## 2.7.6

Release: 2024-08-22

* improved path filter documentation

## 2.7.5

Release: 2024-08-22

* fixed page view limit calculation for multiple domains

## 2.7.4

Release: 2024-08-21

* improvements to database schema
* ignore S3 errors when a user picture could not be found
* fixed missing translations for error message component
* updated dependencies

## 2.7.3

Release: 2024-08-19

* added maximum import retries for GA API requests

## 2.7.2

Release: 2024-08-19

* added bounce rate for pages and referrers when filtering for an event
* added bounce rate graph when filtering for an event
* fixed a type error when reading views and bounces
* fixed property ID for GA4 imports

## 2.7.1

Release: 2024-08-17

* fixed min date for Google Analytics import

## 2.7.0

Release: 2024-08-16

* added Google Analytics 4 import
* improved imported statistics performance
* improved imported statistics accuracy
* improved theme setting error messages
* improved bot filter
* improved editing filter parameters
* close modal on mouse down instead of click
* close period selection on mouse down instead of click
* fixed filter dialog title
* fixed Plus header on funnel page
* fixed loading event meta data
* fixed relative visitor calculation for platform
* fixed deleting views for non-admin users
* fixed autocomplete for filter parameters
* updated dependencies

## 2.6.5

Release: 2024-07-30

* updated core

## 2.6.4

Release: 2024-07-30

* added reason for bot traffic
* updated dependencies

## 2.6.3

Release: 2024-07-10

* flipped funnel chart
* fixed updating multiple funnels on period change

## 2.6.2

Release: 2024-07-09

* fixed funnels path
* fixed loading funnels on domain switch
* fixed returning Pirsch Plus when creating a new dashboard

## 2.6.1

Release: 2024-07-09

* fixed funnels in app navigation

## 2.6.0

Release: 2024-07-09

* added funnels
* added dropdown to add dashboards, organizations, and funnels
* added language switch and query parameter
* added more icons to open domains
* improved referrer titles in panel and details view
* fixed missing database triggers
* fixed permissions to view specific parts of the UI on public and custom dashboards
* fixed removing filters when there is a filter of the same type
* fixed missing translations
* fixed filtering for unknown platform and screen resolution
* updated dependencies

## 2.5.5

Release: 2024-07-01

* allow organization admins to change all dashboard settings
* fixed allowing organization admins to use Pirsch Plus features
* fixed Pirsch Plus hint
* fixed Pirsch Plus check for themes
* fixed permissions when moving dashboard to organization
* fixed copyright

## 2.5.4

Release: 2024-06-25

* do not show menu on public dashboards that are unavailable
* fixed overview showing up on public dashboard if signed in
* fixed Plus features not being available for organization admins
* updated dependencies

## 2.5.3

Release: 2024-06-21

* fixed updating subscription plan during free trial

## 2.5.2

Release: 2024-06-17

* added page view tags to session view
* added more configuration options to create dashboard API
* added "not contains" filter option
* fixed missing translations
* fixed filter excluding countries
* updated dependencies

## 2.5.1

Release: 2024-06-15

* fixed copyright on login
* improved translation

## 2.5.0

Release: 2024-06-15

* added filtering by country by clicking on map
* added past hour period and shortcut
* added i18n for dashboard and language configuration for accounts
* added context to error messages
* updated dependencies

## 2.4.9

Release: 2024-06-12

* fixed accessing sessions on shared dashboards

## 2.4.8

Release: 2024-06-06

* fixed deleting organizations with open invitations

## 2.4.7

Release: 2024-06-06

* improved text overflow when grouping pages by title
* replaced neighbor function with window functions
* fixed hostname in canonical link
* updated dependencies

## 2.4.6

Release: 2024-06-05

* added Shifu for website CMS
* updated dependencies

## 2.4.5

Release: 2024-06-04

* fixed owner when creating dashboard belonging to organization
* fixed transfering ownership when changing the organization for a dashboard
* fixed listing organizations for members with viewer permission when adding a dashboard

## 2.4.4

Release: 2024-06-03

* added GoeDB and Udger proxy
* added graph y-axis maximum value to modal dialogs
* fixed graph y-axis maximum value when chaning filters
* updated dependencies

## 2.4.3

Release: 2024-05-27

* fixed creating dashboard with non-ASCII characters in hostname
* improved bot filter
* updated dependencies

## 2.4.2

Release: 2024-05-26

* fixed release

## 2.4.1

Release: 2024-05-24

* added filter country code validation
* fixed event names in snippet configuration
* updated dependencies

## 2.4.0

Release: 2024-05-21

* added TXT verification for custom domains
* added check to ensure a custom domain is not in use
* added auto join feature to automatically add users on sign up to organizations
* added number of events to events panel on hover
* added IP address, hostname, country, and path traffic filters
* added more links to documentation on settings page
* added regions
* added hiding copyright and dark/light mode toggle to themes
* added country and live map
* fixed public access to webhook configuration
* fixed missing cache for alternative hostnames for events
* fixed missing locks for settings
* fixed theme settings
* fixed title color for chart tooltips

## 2.3.16

Release: 2024-05-15

* removed DNT
* moved Plus subscription box up
* updated dependencies

## 2.3.15

Release: 2024-05-14

* improved Fathom and Plausible import UI
* fixed Plausible import CORS error
* fixed Plausible import email confirmation
* fixed comparison mode max value in graph

## 2.3.14

Release: 2024-05-13

* fixed grouping weeks/months/years if period is exactly specified as one week/month/year

## 2.3.13

Release: 2024-05-13

* added Plausible Analytics import
* improved Fathom Analytics import
* fixed grouping weeks/months/years if period is exactly specified as one week/month/year
* updated dependencies

## 2.3.12

Release: 2024-04-29

* added max value to chart y axis
* removed HTTP caching from index for dashboard

## 2.3.11

Release: 2024-04-24

* fixed cookie expiry for the dashboard
* fixed signing out if the refresh token is expired

## 2.3.10

Release: 2024-04-23

* improved ClickHouse backups
* updated dependencies

## 2.3.9

Release: 2024-04-22

* added combining path and event filter for conversion goals if not configured
* fixed comparing to previous period without matching weekday
* fixed resetting fields in conversion goal dialog

## 2.3.8

Release: 2024-04-19

* website CMS update

## 2.3.7

Release: 2024-04-17

* fixed keeping filter settings between dashboard and sessions page

## 2.3.6

Release: 2024-04-17

* fixed null filter
* fixed filtering for hour

## 2.3.5

Release: 2024-04-17

* fixed live view
* fixed query parameters not overwriting cached filter settings
* fixed updating query parameters twice

## 2.3.4

Release: 2024-04-16

* fixed component import
* fixed snippet configuration labels
* fixed snippet configuration endpoints being empty
* fixed calculating period for cached filters

## 2.3.3

Release: 2024-04-15

* improved logging bot traffic
* improved HTTP file caching
* always show organization and dashboard invitations (including custom domains)
* fixed reading overview statistics for imported data
* fixed default white favicon for referrers
* fixed updating website templates
* fixed and improved Fathom import with sub directories
* fixed missing event name in session view
* fixed traffic alert threshold
* updated dependencies

## 2.3.2

Release: 2024-04-12

* fixed filter for session breakdown
* updated dependencies

## 2.3.1

Release: 2024-04-11

* fixed traffic spike alert unique visitor count
* fixed blog article head title and meta description
* updated dependencies

## 2.3.0

Release: 2024-04-11

* added option to delete events only
* added traffic spike notifications
* added traffic warning notifications
* added webhooks
* added graphs in background to overview
* added viewing individual sessions
* added "contains" filter for event meta values
* added graphs for minute-based statistics
* added data prefix to HTML attributes to ignore pirsch link clicks and for custom events + metadata
* only provide a single consolidated script instead of multiple variations
* improved setting descriptions
* improved email reports
* optimized loading dashboard data
* optimized loading domain on overview
* keep filter settings when changing pages
* fixed missing triggers for mod_time
* fixed sending conversion goal notifications to organization members
* fixed clearing comparision when switching domain on overview
* fixed comparison selection for views
* fixed removing time range keyboard shortcuts event handler on pages other than the dashboard/sessions
* fixed branding and theme colors in email reports
* fixed joining events when grouping by hours/minutes
* updated dependencies

## 2.2.5

Release: 2024-03-22

* fixed dates in time range filter
* fixed referrer panel duplicating entries

## 2.2.4

Release: 2024-02-22

* added pirschInit function to allow asynchronous initalization of the snippet
* fixed tag keys for events

## 2.2.3

Release: 2024-02-20

* added a fixed limit to the number of filter options that are returned
* improved browser and OS parsing
* fixed resetting page view counter when re-activating subscriptions
* fixed mime types for service worker js and favicon.ico
* updated dependencies

## 2.2.2

Release: 2024-02-16

* pre-select active entry in time range and comparison filter
* fixed time on page in CSV exports
* fixed styling for tabs inside dialogues
* fixed single date selection after dashboard refresh

## 2.2.1

Release: 2024-02-15

* fixed reading client plus subscription status
* fixed reading event breakdown
* updated dependencies

## 2.2.0

Release: 2024-02-14

* added comparison mode for total numbers and graphs
* added comparison settings to views
* added an event metadata limit of 20 key-value pairs
* added an event metadata key length limit of 100
* added an event metadata value length limit of 2000
* added tags for segmentation (max. 20, 50 character keys and 50 character values)
* added sorting conversion goals alphabetically for equal numbers
* added icon for the Whale browser
* added domain ID to client settings to make it easier to copy
* added display name for dashboards
* added automatic deletion of outdated Postgres backups
* added path suffix, title prefix, title suffix
* added hint if a dashboard does not belong to an account with an active subscription
* added Fathom Analytics import
* removed `type="text/javascript"` from scripts
* fixed date from string parameter
* fixed error handling showing generic "An error occurred" for field validation errors
* fixed endless loop on token refresh
* fixed time range selection using view
* fixed updating theme list when the organization is updated
* fixed removing theme when the organization is changed
* updated dependencies

## 2.1.32

Release: 2024-01-16

* added Discourse integration

## 2.1.31

Release: 2024-01-08

* improved User-Agent filter
* fixed relative bounce rate calculation in email reports

## 2.1.30

Release: 2024-01-01

* use `data-path-prefix` to change path if `data-domain` is not present
* fixed last month period in January
* fixed resetting session between primary and additional domains

## 2.1.29

Release: 2023-12-30

* updated dependencies

## 2.1.28

Release: 2023-12-11

* fixed deleting accounts with organization invitations

## 2.1.27

Release: 2023-12-09

* sorted Google Search Console and Google Analytics domain selection lists
* fixed dashboard redirects for other languages
* fixed clearing filter when the selected period contains imported statistics
* updated dependencies

## 2.1.26

Release: 2023-12-01

* fixed time on page when using filters
* updated dependencies

## 2.1.25

Release: 2023-11-27

* fixed very rare nil pointer
* improved search field styling
* updated dependencies

## 2.1.24

Release: 2023-11-21

* fixed client creation

## 2.1.23

Release: 2023-11-19

* added new client scope for billing endpoints
* added search to domain and organization overview
* added missing access check to set favorite dashboard
* added pinning dashboards to the overview and list
* added setting favorite to overview
* added cleaning up views when an organization member is removed and loses access to a dashboard
* added new parameter to rewrite the URL path in the scripts
* added showing banner when last payment failed
* added detection for Arc
* added Arc and Samsung Internet browser icons
* fixed rewrite for Pirsch Plus custom domain script endpoints
* fixed domain created banner
* updated dependencies

## 2.1.22

Release: 2023-11-16

* fixed exit rate calculation

## 2.1.21

Release: 2023-11-13

* improved error logging

## 2.1.20

Release: 2023-11-12

* added reading usage to API (statistics scope)
* fixed missing deleted page views for total usage metric

## 2.1.19

Release: 2023-11-11

* fixed null pointer when sorting conversion goals
* improved error logging

## 2.1.18

Release: 2023-11-09

* added icons for Android WebView, Brave, and Chrome OS
* improved error logging
* fixed loading organizations when accepting an invitation
* fixed permissions on organization page
* updated dependencies

## 2.1.17

Release: 2023-11-04

* improved logging
* fixed reading event pages with title and sampling
* fixed errors occurring when casting negative numbers to uint64
* updated dependencies

## 2.1.16

Release: 2023-10-28

* increased dashboard request timeout to 30 seconds
* added server-side request and query cancellation
* added sampling
* fixed axios endless loop if request times out
* updated dependencies

## 2.1.15

Release: 2023-10-25

* fixed average time on page calculation in certain scenarios
* fixed events resetting the time the session was last seen
* updated dependencies

## 2.1.14

Release: 2023-10-21

* fixed average session duration calculation with path filter
* fixed session duration label when filtering for a conversion goal

## 2.1.13

Release: 2023-10-19

* added number of events to event statistics
* fixed charts not being shown as clickable for today
* fixed reading event pages when filtering for a path and event
* fixed canonical link

## 2.1.12

Release: 2023-10-16

* fixed saving link target for email reports
* fixed charts not being shown as clickable for today

## 2.1.11

Release: 2023-10-11

* optimized queries

## 2.1.10

Release: 2023-10-10

* fixed logging out on token refresh if the status code is different from 401

## 2.1.9

Release: 2023-10-09

* fixed offset and limit for conversion goals

## 2.1.8

Release: 2023-10-09

* added option to email reports to link to private or public dashboard or custom domain
* added relative visitor/page view count and exit/entry rate for imported statistics
* optimized loading conversion goals
* fixed sorting conversion goals by name and path pattern
* fixed limiting conversion goals
* fixed dark mode for favicons on public dashboards
* updated dependencies

## 2.1.7

Release: 2023-10-05

* fixed timezone for session duration and time on page

## 2.1.6

Release: 2023-10-04

* improved identification code not found error message
* create page view when event is fired on a page that's different from the last page visited
* update page views for session when event is fired on a page that's different from the last page visited
* fixed missing page view when event creates a session
* updated dependencies

## 2.1.5

Release: 2023-09-30

* fixed grouping and sorting imported referrers with data from Pirsch

## 2.1.4

Release: 2023-09-29

* fixed missing relative visitor calculation for imported referrers
* updated Pirsch core

## 2.1.3

Release: 2023-09-29

* improved merging imported statistics with data from Pirsch
* updated website privacy policy
* updated dependencies

## 2.1.2

Release: 2023-09-22

* fixed time shift in daily visitor statistics
* fixed local time to UTC conversion for dates
* updated dependencies

## 2.1.1

Release: 2023-09-21

* cancel account deletion on login
* switched to three months before deleting inactive accounts
* switch to two years before marking inactive accounts for deletion
* optimized loading imported statistics
* fixed title in tables for first column
* fixed refreshing graphs, growth, and total visitors on refresh button click
* fixed UTM content panel showing UTM terms
* fixed batch configuration
* fixed enter selecting period from list while editing custom dates
* fixed setting start date in import
* fixed panels with imported statistics
* updated dependencies

## 2.1.0

Release: 2023-09-17

* added support for client hints
* added Chrome OS and Windows 11 detection
* added direct/none/unknown to panels (previously only visible in tables)
* added conversion rate to total, by period, and growth
* added custom metrics for events
* added refresh button to dashboard
* upgraded to Go version 1.21
* updated dependencies

## 2.0.17

Release: 2023-09-09

* fixed ref query parameter to set referrer
* fixed resetting sessions when referrer name changes

## 2.0.16

Release: 2023-09-07

* updated and improved referrer mapping
* keep import running on Google Analytics API error

## 2.0.15

Release: 2023-08-25

* added missing database indices

## 2.0.14

Release: 2023-08-24

* disabled request cancellation for querying domains
* fixed checking response errors if response is undefined

## 2.0.13

Release: 2023-08-23

* fixed deleting data taking a long time
* removed link to Pirsch on logo when `ui=hide` is set

## 2.0.12

Release: 2023-08-10

* improved error logging
* fixed light/dark mode query parameter being removed when changing the filter
* fixed imported statistics with overlapping data from Pirsch
* fixed gaps in imported statistics on the dashboard

## 2.0.11

Release: 2023-08-06

* improved conversion goal dialog
* added options to hide the login button and footer on custom domains
* added option to set light/dark mode for custom domains and public dashboards
* added link to themes from settings page
* added number of websites and themes to organization panels
* added color switch to public dashboards

## 2.0.10

Release: 2023-08-02

* fixed staying logged in
* fixed OS/browser panels showing more than ten results
* updated dependencies

## 2.0.9

Release: 2023-07-29

* fixed average session duration

## 2.0.8

Release: 2023-07-27

* added raw values on hover to numbers
* improved graphs jumping when data or color changes
* improved GA import
* fixed sitemap
* fixed cycling through past 7, 14, 30, quarter, half year, and year filters
* fixed footer font size on dashboard
* fixed access links for custom domains
* updated dependencies

## 2.0.7

Release: 2023-07-20

* fixed concurrency issue with import jobs
* updated dependencies

## 2.0.6

Release: 2023-07-15

* improved loading statistics on the dashboard
* improved filter value selection (now using enter and on blur)
* fixed panels changing with tables in details view
* fixed sorting tables
* fixed clearing conversion goal filter
* fixed duplicate entries in referrer panel

## 2.0.5

Release: 2023-07-14

* added custom color picker
* added scripts on custom domains
* fixed downgrading from Pirsch Plus to Standard
* fixed automated backups

## 2.0.4

Release: 2023-07-12

* fixed loading event metadata values if it's more than 10
* fixed grouping events by metadata
* updated dependencies

## 2.0.3

Release: 2023-07-11

* show contact button instead of manage subscription for custom pricing on billing page
* fixed applying free-trial to subscriptions that didn't add a website during free-trial
* fixed downgrading subscriptions
* fixed loading events and conversion goals
* fixed loading time spent on page for pages and entry pages

## 2.0.2

Release: 2023-07-10

* pre-select active website in website selection
* keep table order and query when changing filter
* fixed sorting events by CR
* fixed searching and sorting browsers and operating system

## 2.0.1

Release: 2023-07-08

* don't switch to the active website
* fixed copying second IPv6 address
* fixed website search in selection
* fixed loading statistics on overview
* fixed list styling in news
* fixed loading theme logo on custom domain

## 2.0.0

Release: 2023-07-08

* added domain overview with some basic statistics
* added keyboard controls to domain and time range filter selection
* added check to prevent filter fields from being added twice with the same value
* added log out from all devices on password change or reset
* added label on hover to table and list entries
* added themes and theme settings to white label dashboards and emails
* added organizations for team, website, and theme management
* added custom domains
* added a limit of 50 websites
* added current subscription plan to user menu
* added full-width dashboard
* changed design for top menu and navigation
* moved login, password reset, and changing the email to dashboard
* start free trial when first website is added
* only allow domain transfer to users with an active subscription
* create account for invited users
* fixed closing view selection on enter
* fixed clearing referrer cache
* fixed offset and limit for conversion goals
* fixed a small permission issue when deleting domain invitations
* fixed API returning 401 if domain is not found
* updated dependencies

## 1.17.41

Release: 2023-07-04

* fixed reading usage for users with many websites

## 1.17.40

Release: 2023-06-29

* improved bot filtering

## 1.17.39

Release: 2023-06-28

* improved page title collection in settings
* do not increase page view count on bounce
* do not store page view if the session bounced before
* fixed calculating average session duration and time on page
* updated User-Agent blacklist
* updated dependencies

## 1.17.38

Release: 2023-06-16

* use batch for import jobs
* fixed setting start date for imported statistics

## 1.17.37

Release: 2023-06-14

* fixed CSS selector for events in extended script

## 1.17.36

Release: 2023-06-06

* added more payment methods
* added Euro pricing
* added ID parameter to read specific domain from `/api/v1/domain`

## 1.17.35

Release: 2023-05-31

* ignore pirsch.js and pirsch-events.js when extended script is present

## 1.17.34

Release: 2023-05-29

* resume Google Analytics imports

## 1.17.33

Release: 2023-05-27

* upgraded Pirsch core
* updated dependencies

## 1.17.32

Release: 2023-05-24

* added generic metadata field to domains (API only for now)
* allow cancellation of running import jobs
* fixed Google Analytics import sending multiple emails on error

## 1.17.31

Release: 2023-05-18

* improved domain cache
* fixed sending data to other dashboards

## 1.17.30

Release: 2023-05-16

* decreased number of parallel email report processors
* fixed missing plans on backend
* fixed null pointer when sending email reports

## 1.17.29

Release: 2023-05-15

* query improvements

## 1.17.28

Release: 2023-05-11

* fixed calculations for some of the imported statistics
* fixed displaying imported referrers

## 1.17.27

Release: 2023-05-09

* changed label for limits on billing page
* added missing labels for larger plans
* increased wait time between Google Analytics report requests
* fixed importing long dimensions
* fixed returning null for imported statistics

## 1.17.26

Release: 2023-05-08

* switched to storing aggregated statistics from Google Analytics
* removed filter options for imported statistics, as they were misleading

## 1.17.25

Release: 2023-05-05

* fixed missing event placeholder function in extended script
* fixed www in referrer

## 1.17.24

Release: 2023-05-03

* use unique visitors instead of sessions for Google Analytics import

## 1.17.23

Release: 2023-05-02

* fixed some Google Analytics statistics

## 1.17.22

Release: 2023-05-02

* increased timeout for HTTP requests to Google Analytics
* fixed closing delete domain modal dialog
* fixed Google Analytics paths import

## 1.17.21

Release: 2023-04-28

* added settings to change the hostname for a domain
* fixed page view count when session is created on an event
* updated dependencies

## 1.17.20

Release: 2023-04-27

* fixed extended script not tracking full outbound link URL

## 1.17.19

Release: 2023-04-20

* referrers that are an alternative domain will no longer start new sessions
* fixed distributed locks for sessions
* updated dependencies

## 1.17.18

Release: 2023-04-14

* improved error handling in `pirsch-extended.js`
* added `data-disable-history` to ignore programmatic URL changes
* fixed entries/exits when filtering for a path pattern

## 1.17.17

Release: 2023-04-13

* fixed sending page views on programmatic navigation using JavaScript

## 1.17.16

Release: 2023-04-07

* added new utility script `pirsch-extended.js`
* fixed loading script configuration
* fixed clearing HTTP request cancellation
* updated dependencies

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
* fixed event metadata table not updating when changing filter or key does not exist
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
