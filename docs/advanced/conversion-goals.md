# Conversion Goals

Conversion goals are described in more detail in their own [article](/advanced/conversion-goals). You can create, edit, and remove goals and use a path pattern to group up pages.

![Goals](../static/advanced/goals.png)

To create a new goal, click *Add Goal*, enter a name, the pattern, and the visitor and conversion rate goal.

![Goals](../static/advanced/create-goal.png)

The name is used to identify the goal on the dashboard. The visitor and CR target are optional. If you leave them empty, the goal will measure the number of visitors and conversion rate indefinitely. To automatically delete the goal and receive a notification once it's reached, toggle the two checkboxes that will show up if you set a visitor and/or CR target. If you don't automatically delete the goal, the notification will only be sent once, but you can reactivate it by editing the goal and check the checkbox again.

The pattern specifies a single page or a group of pages. You can use single or double asterisks as wildcards for parts of the path. A single asterisk is used as a wildcard for a single part of the path. It matches everything that is not a slash (with a length of zero or more). Double asterisks are used to match multiple parts of the path, including slashes (with a length of zero or more). Here are some examples:

| Pattern | Description |
| - | - |
| `/` | Exact match. |
| `/home` | Exact match. |
| `/**` | Matches all paths. |
| `/blog/*` | Matches the pages below `/blog`, like `/blog/article`, but not `/blog/article/first`. |
| `/blog/**` | Matches all pages below `/blog`, like `/blog/article` and `/blog/article/first`. |
| `/blog/*/first` | Matches all pages below `/blog` that end with `/first` with one part in between, like `/blog/article/first`, but not `/blog/page/first` or `/blog/some/page/first`. |
| `/blog/**/first` | Matches all pages below `/blog` that end with `/first` with one or more parts in between, like `/blog/article/first` or `/blog/some/page/first`, but not `/blog/some/page/second`. |
