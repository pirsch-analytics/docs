# Multi-Step Marketing Funnels

Multi-step marketing funnels allow you to track your visitors' journey until they complete a conversion. You can define up to eight steps, each consisting of one or more filter options. These include pages, page patterns, custom events, tags, and all the other options you're used to in the dashboard. You'll be able to see how many visitors dropped off in each step, the conversion rate of each step, and the total conversion rate.

*WIP Screenshot*

Here are a few examples for funnels:

* Track conversion from a specific landing page to registration
* See how well your paid advertising campaigns convert visitors to purchase specific products
* Analyze the completion of a tutorial or multi-page flow

::: info
Funnels are a Pirsch Plus feature.
:::

## Creating a Funnel

Funnels must be created in advance on the dashboard or via the [API](/api-sdks/api#managing-funnels). To create a new funnel, navigate to the funnel page and click **Add Funnel**. A dialog will appear where you can choose a name and add up to eight steps.

*WIP Screenshot

For each step, enter a meaningful name and add the filter options you want. For example, you can set up the first step as an entry page that refers to a specific landing page targeted by an ad campaign. You can also add multiple fields to a single step to further segment the funnel and use operators, just like on the dashboard. For example, in addition to the entry page, you could also add the UTM campaign parameter. Next, set the filters for the other steps.

*WIP Screenshot*

Each step in the funnel only considers visitors from the previous step, but it doesn't matter if you have steps in between. Here is an example of what this means:

1. A visitor arrives at the `/hello` ad campaign page
2. The visitor navigates to the `/products` overview page
3. There the visitor selects a product `/product/42`
4. The product is ordered, which you track with the custom event `Purchase`

In this example, you may not care about the overview and specific product pages, but you do want to see how many products were sold through the `/hello` entry page. In this case, you can set up a two-step funnel with `/hello` as the entry page for the first step and `Purchase` as the event for the second step. Steps 2 and 3 have no effect on the funnel and are simply ignored. What the visitor did between these two funnel steps won't be taken into account.

## Evaluating a Funnel

Once you've created your first funnel, it will immediately start collecting data (if you have any). Click on the funnel card in the list to expand it. The funnel is loaded and the steps are displayed. The panel will now display:

* The total conversion rate of the last step
* The absolute and relative number of visitors left per step
* The drop-off rate and the absolute number of visitors dropping off each step from the previous step

The first step will always show 100%. This is the base line. On the following steps, hover your mouse over to see the statistics.

*WIP Screenshot*

## Deleting, Copying, and Locking a Funnel

Funnels can be deleted, copied, and locked using the icons on the funnel card. A locked funnel cannot be modified until it is unlocked.
