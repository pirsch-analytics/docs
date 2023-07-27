# Tracking Conversion Goals

Conversion Goals allow you to group pages and calculate the conversion rate.

![Conversion Goals](../static/advanced/goals.png)

To create a new goal, click the plus icon in the top-right corner. Enter a name, the pattern, and the visitor and conversion rate target.

![Create a Conversion Goal](../static/advanced/create-goal.png)

The name is used to identify the goal on the dashboard. The visitor and CR target are optional. If you leave them empty, the goal will measure the number of visitors and conversion rate indefinitely. To automatically delete the goal and receive a notification once it's reached, toggle the two checkboxes that will appear when you set a visitor and/or CR target. If you don't automatically delete the goal, the notification will only be sent once, but you can reactivate it by editing the goal and ticking the checkbox again.

The pattern specifies a single page or a group of pages. You can use single or double asterisks as wildcards for parts of the path. A single asterisk is used as a wildcard for a single part of the path. It matches anything that is not a forward slash (with a length of zero or more). Double asterisks are used to match multiple parts of the path, including slashes (with a length of zero or more). Here are some examples:

| Pattern | Description |
| - | - |
| `/` | Exact match. |
| `/home` | Exact match. |
| `/**` | Matches all paths. |
| `/blog/*` | Matches the pages below `/blog`, like `/blog/article`, but not `/blog/article/first`. |
| `/blog/**` | Matches all pages below `/blog`, like `/blog/article` and `/blog/article/first`. |
| `/blog/*/first` | Matches all pages below `/blog` that end with `/first` with one part in between, like `/blog/article/first`, but not `/blog/page/first` or `/blog/some/page/first`. |
| `/blog/**/first` | Matches all pages below `/blog` that end with `/first` with one or more parts in between, like `/blog/article/first` or `/blog/some/page/first`, but not `/blog/some/page/second`. |

Using the advanced options allow you to define a custom regular expression and test it.

![Advanced Options](../static/advanced/goal-advanced.png)
