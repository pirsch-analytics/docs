# Statistics Explained

This article aims to explain the statistics on the dashboard. How they are calculated, what they mean and how they relate to each other.

## Terms and Definitions

Terms and definitions are used consistently throughout the statistics.

### Unique Visitors

Unique visitors are the absolute number of uniquely identifiable visitors across multiple page views and sessions. A visitor is only counted once within a 24 hour window. The 24 hour limit is necessary to comply with GDPR.

### (Page) Views

Page Views (or Views for short, as shown in the details view when you expand a panel) are the absolute number of pages that visitors have seen. Page views are only counted if the page has changed. So if a page is reloaded several times, multiple page views of the same page won't be counted.

### Sessions

Sessions are the absolute number of unique visitors who returned after 30 minutes or more. A session is valid for up to 30 minutes from the last time a visitor was seen. If a visitor returns after this time, a new session is counted.

### Bounces

Bounces are the absolute number of visitors who left after a single page view. Bounces are counted for the sessions.

### Bounce Rate

The bounce rate is the relative number of visitors who have left the site after a single page view, compared to the total number of unique visitors.

### Session Duration

Session duration is the amount of time a visitor spends on a website within a session. This can be up to 24 hours if the visitor visits pages within the 30 minute session window.

### Conversion Rate (CR)

Conversion rate is the relative number of visitors who took a particular action. This could be a button click, the number of times a particular page was visited, and so on. The number is always relative to the total number of unique visitors.

Pirsch automatically calculates the CR for pages and other metrics when you filter for them in the dashboard. Conversion goals can be created to customise these metrics and use custom event metadata fields.

Funnels are an exception to the CR. Please see the Funnels section for more information.

### Relative Visitors

Relative visitors are the number of unique visitors to a particular page or other metric compared to the total number of unique visitors.

### Relative Views

Relative views are the number of page views for a particular page or other metric compared to the total number of unique visitors.

### Time on Page

Time on page is the time spent by visitors on a single page. Bounced sessions (sessions without interaction beyond the first page view) are not included as they have a time on page of 0.

### Entries

Entries is the number of sessions that were started on a particular page.

### Exits

Exits is the number of sessions that were ended on a particular page.

### Entry Rate

Entry rate is the relative number of entries compared to the total number of sessions.

### Exit Rate

Exit rate is the relative number of exits compared to the total number of sessions.

### Duration (Custom Events)

Duration is a custom event field. The meaning is user defined. The dashboard will show the average on the dashboard when the events panel is expanded.

### Growth Rate

The growth rate is the relative number of growth compared to the previous period.

```
growth = (present_data - past_data) / past_data
```

Here is an example. The site had 1,561 visitors this week and 978 visitors last week. The growth is calculated as follows:

```
growth = (1561 - 978) / 978
growth = 583 / 978
growth = 0.596114519

growth = +59.6% (rounded)
```

## Statistics

This section describes all the statistics that can be found on the dashboard.

### Pages

Pages are the statistics for individual pages.

### Entry Pages

Entry pages are the statistics for pages that visitors first came to. Sessions started on these pages.

### Exit Pages

Exit pages are the statistics for the last pages visited. Sessions ended on these pages.

### Event Pages

Event pages are the pages on which custom events have been triggered. The panel for these is only visible when filtering for an event in the Events panel.

Filtering on a custom event won't show the pages on which that particular event was triggered in the regular pages panel, because events are always attached to the session. Filtering for an event will show all the data associated with the sessions to which the events are attached. The page on which the event was triggered is stored separately.

### Hostnames

Hostnames are the hostnames for which the data was sent. This is only relevant when sending data from multiple domains to a single dashboard (roll-up view).

### Channels

Channels are the source channels of the traffic. These are extracted from the referrer, UTM parameters and more.

Here are the definitions for each. They are defined exactly as they are in Google Analytics 4.

#### Direct

Source exactly matches "(direct)"

AND

Medium is one of ("(not set)", "(none)")

#### Cross-network

Campaign Name contains "cross-network"

Cross-network includes Demand Gen, Performance Max and Smart Shopping.

#### Paid Shopping

Source matches a list of shopping sites

OR

Campaign Name matches regex ^(.*(([^a-df-z]|^)shop|shopping).*)$

AND

Medium matches regex ^(.*cp.*|ppc|retargeting|paid.*)$

#### Paid Search

Source matches a list of search sites

AND

Medium matches regex ^(.*cp.*|ppc|retargeting|paid.*)$

#### Paid Social

Source matches a regex list of social sites

AND

Medium matches regex ^(.*cp.*|ppc|retargeting|paid.*)$

#### Paid Video

Source matches a list of video sites

AND

Medium matches regex ^(.*cp.*|ppc|retargeting|paid.*)$

#### Display

Medium is one of (“display”, “banner”, “expandable”, “interstitial”, “cpm”)

#### Paid Other

Medium matches regex ^(.*cp.*|ppc|retargeting|paid.*)$

#### Organic Shopping

Source matches a list of shopping sites

OR

Campaign name matches regex ^(.*(([^a-df-z]|^)shop|shopping).*)$

#### Organic Social

Source matches a regex list of social sites

OR

Medium is one of (“social”, “social-network”, “social-media”, “sm”, “social network”, “social media”)

#### Organic Video

Source matches a list of video sites

OR

Medium matches regex ^(.*video.*)$

#### Organic Search

Source matches a list of search sites listed under "SOURCE_CATEGORY_SEARCH"

OR

Medium exactly matches organic

#### Referral

Medium is one of ("referral", "app", or "link")

#### Email

Source = email|e-mail|e_mail|e mail

OR

Medium = email|e-mail|e_mail|e mail

#### Affiliates

Medium = affiliate

#### Audio

Medium exactly matches audio

#### SMS

Source exactly matches sms

OR

Medium exactly matches sms

#### Mobile Push Notifications

Medium ends with "push"

OR

Medium contains "mobile" or "notification"

OR

Source exactly matches "firebase"

#### AI

Artificial Intelligence (AI) is inferred from the referrer or UTM source from the following list. Note that requests made directly by AI are ignored as non-human traffic.

```
perplexity.ai
openai.com
anthropic.com
bard.google.com
cohere.com
meta.ai
ai.meta.com
jasper.ai
mistral.ai
```

### Referrers

Referrers are the statistics for the referring site. The data is extracted from the `Referers` (with a *r*) HTTP header and may not be set by the browser. In these cases it will be listed as unknown.

It's possible to improve the quality of referrals by including UTM parameters or the `ref` parameter in the URL (like `https://my-domain.com/page?ref=Social+Network`).

### UTM Source, Media, Campaigns, Content, Terms

The UTM panels contain the statistics extracted from the UTM parameters.

Please see [this](/advanced/referrer-utm) article to learn more.

### Conversion Goals

Conversion goals are the statistics for custom goals. They are defined by the user and can be used to track goals with automatic deletion and email notifications. They are also used to calculate statistics based on custom event metadata.

Please see [this](/advanced/conversion-goals) article to learn more.

### Events

Events are user-defined custom events. They have a name and optional metadata key/value pairs. When you expand the panel, you can view and filter the metadata.

Metadata can be anything. For example, you can define an event *Button clicked* and track which button was clicked as the metadata field `button=Header`. Filtering on the combination of event name and metadata allows you to analyse the performance of the site structure.

Conversion goals can be used to track metadata over time. They allow you to create a graph for metadata fields.

Please see [this](/advanced/events) article to learn more.

### Tags

Tags are similar to event metadata, but are attached to pages instead of events. They allow you to add key/value pairs to page views and filter on them. This can be useful for segmentation, A/B testing or tracking the author of blog posts, for example.

Please see [this](/advanced/segmentation-tags) article to learn more.

### Countries

Countries are the statistics for the country of origin of the visitors.

### Regions

Regions are the statistics for the region of origin of the visitors.

### Cities

Cities are the statistics for the city of origin of the visitors.

### Languages

Languages are the statistics for the language of the visitors. It is extracted from the `Accept-Language` HTTP header.

### OS

OS is the statistics of the operating system used by the visitor. It is extracted from the User-Agent and Client Hints HTTP headers.

### Browser

Browser is the statistics of the browser used by the visitor. It is extracted from the User-Agent and Client Hints HTTP headers.

### Platforms

Platforms categorises the visitor clients. These can be Desktop, Mobile or Unknown.

### Screens

Screens categorises visitors. The categories are ranges of different screen sizes. As there are many different screen resolutions, they are grouped together to give you an idea of which screen resolutions you might want to optimise for.

### Weekdays

Weekdays are the days and times when visitors visited your site. The graph shows on which day and at what time your site receives the most visitors. This is useful for planning advertising campaigns or new blog posts, for example.

### Funnel

Funnels are essentially multi-stage conversion targets. Each step has it's own filter that calculates the visitor drop off and the conversion rate (CR). The main difference between regular CR and funnel CR is that funnel CR is always based on the previous step, not the total number of visitors.

Please see [this](/advanced/funnels) article to learn more.

### Sessions

Sessions show individual visitor sessions. This is useful for debugging and identifying problems on your site. For example, if visitors are not completing orders, you can see which pages were visited and what events were triggered to identify a common problem on your site that is preventing visitors from completing orders.

The dashboard only shows a limited number of sessions, so you'll need to break down the number of visitors. You can do this by adding filters or selecting a shorter time period.

### Keywords

Keywords are the keywords used by visitors to find your website on Google. These are pulled from the Google Search Console if you have [set it up](/integrations/search-console).
