---
title: "Overview"
date: 2021-01-16
draft: false
weight: 1
description: "Get an overview over the dashboard."
---

Pirsch provides a simple, yet powerful dashboard for your website statistics. This article gives an overview of all of its parts and how to use the filter.

## Navigation

On top you will find the navigation. The Pirsch logo will bring you back to the dashboard. You can add a new domain, manage the settings of your currently active website, access resources, and manage your account or log out in the top right corner.

![Panels](/dashboard/navigation.png)

## Menu

Right below the navigation you will find the website selection, the active visitor count, and the time range filter.

Should you have added more than one website, you can switch between them by clicking on the domain. The dashboard will automatically reload and show the statistics for the new page. The selection works on the settings page too.

The time range is set to one week by default. To change it, click on the time range and select a different one from the dropdown, or enter dates. The selection will be saved, so that you can compare different websites for example and still have it in place when you come back later.

![Panels](/dashboard/menu.png)

## Panels

Below the menu, you can find the panels showing different statistics.

### Unique Visitor Count, Sessions, and Bounces

The first three panels show the unique visitor count, sessions, and bounces. If you click on one of them you can enlarge the graph. The panels include the growth rate relative to the previous time range (the past week when the filter is set to the past 7 days for example) and are coloured in green, red, or yellow depending on if they have increased, fallen, or stayed the same.

![Panels](/dashboard/visitors.png)

Visitors shows the unique visitor count for a day. Sessions shows the number of sessions for the day, corresponding to a two-hour time frame. Bounces shows how many visitors have left your website after their first page hit.

### Active Visitors

Next you will find data related to the active visitors of your page. These are visitors that have been visiting your website in the past 5 minutes. You can see which pages they have opened and at what time of day the have visited. Note that the number of pages opened might be higher than than the total visitors, as they might switched pages within the 5 minute time frame.

![Panels](/dashboard/active-visitors.png)

### Pages, Referrers, Countries, ...

The next panels show various statistics regarding unique visitors. *Pages* for example shows how many visitors have visited a single page. Referrers list all websites a visitor came from.

A panel will only show the top 10 results. You can enlarge it to see more results. The *Screen Sizes* panel is only available if you have embedded the [JavaScript snippet]({{< ref "get-started/frontend-integration.md" >}}). The [backend integration]({{< ref "get-started/backend-integration.md" >}}) does not collect this metric.

![Panels](/dashboard/panels.png)

### Time of Day for the Week

The table at the bottom of the dashboard shows unique visitors for the time of day for the past week. The colors show at what time visitors have visited your website the most. The brighter the color, the more visitors.

![Panels](/dashboard/time-of-day.png)

## Filters

Right now there are two filters. You can select a different time range, as described above, or by page. To select a page, click on one of the entries below *Pages*. This also works while the panel is enlarged. After you have selected a page, the dashboard will update itself and show statistics for the page you have selected. To clear the filter, click on the close icon in the green bar at the top.
