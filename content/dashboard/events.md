---
title: "Events"
date: 2022-09-05
draft: false
weight: 4
description: "Events allow you to track actions and attach metadata to them."
---

Events measure how many visitors took a certain action, like clicking on a button or filling out a form, and calculate the conversion rate and (optional) average time. You can filter the dashboard by events and track additional metadata fields (key-value pairs).

The main difference to [conversion goals]({{<ref "dashboard/conversion-goals.md">}}) is, that you programmatically control when an event is sent and can attach metadata.

> Note that events count towards your billable monthly page views.

## Creating Events

Events are automatically created and added to your dashboard as you send them. Events can be sent from your website using JavaScript, or from your backend using our [API]({{<ref "api-sdks/api.md">}}) or one of our [SDKs]({{<ref "api-sdks/_index.md">}}).

## Sending Events From Your Website

Before you can send your first event, you need to add the JavaScript snippet to your website. It's different from the regular `pirsch.js` to reduce the page load and keep the script lightweight. Navigate to the settings page on the dashboard and select the **Goals and Events** tab. Copy the code snippet for your domain and add it to the `head` section on all pages you would like to send events from. The snippet looks like this.

```HTML
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch-events.js"
    id="pirscheventsjs"
    data-code="5gXQXdNTvteM4eVY35fNBkcU5CbStFSq"></script>
```

The `data-code` is the identification code for your domain. Should you reset it (below the **Developer** tab), you will also have to replace it in the snippet.

The `data-exclude` attribute used in the regular `pirsch.js` can also be used for the event snippet. See the [frontend integration]({{<ref "get-started/frontend-integration.md">}}) for details.

> The snippet **can not** be used as a replacement for the regular `pirsch.js` that needs to be added to send page views. `pirsch-events.js` can only be used to programmatically send events. If you want to do both, add both snippets to the `head` section of our website.

### Example 1

You can now start sending events. Here is a simple example of how to send an event with a button click.

```HTML
<button id="button">Send Event</button>

<script type="text/javascript">
    let clicks = 1;

    document.getElementById("button").addEventListener("click", () => {
        pirsch("Button Clicked", {
            duration: 42,
            meta: {
                Clicks: clicks
            }
        }).then(() => {
            clicks++;
        }).catch(e => {
            console.error(e); // log the error but still count up
            clicks++;
        });
    });
</script>
```

The script sends an event on each button click and adds one to the counter. The important part here is the invocation of the `pirsch` function. The first parameter is the event name, followed by optional parameters. The `duration` parameter can be used to send a number (seconds) with the event which will be used to calculate the average duration. This can be the time on page for example, or anything you want, like the time it took to read a blog article. The `meta` parameter is an object containing key-value pairs and is displayed below the event on the dashboard. Attached metadata can later be used to further break down the event. Note that you can only use scalar values (strings, numbers, and booleans). There is no limit to the number of metadata fields you can send.

The function returns a promise you can use to continue with your code after the event was sent or handle any errors. We recommend that you perform your action even if the event cannot be sent, to prevent any disruptions.

### Example 2

Here is an example on how you can send an event by clicking a link. Note that navigating to a different page will cancel the request that sends the event. You will have to cancel the navigation and wait until the event has been sent. Then trigger the link click again without cancelling the navigation.

```HTML
<a href="https://external-page.com/" target="_blank" id="link">Visit external page</a>

<script type="text/javascript">
    // cancel the first time the link is clicked
    let cancelClick = true;

    document.getElementById("link").addEventListener("click", e => {
        if(cancelClick) {
            e.preventDefault();
            cancelClick = false;

            pirsch("Link Clicked").then(() => {
                // wait for the request to be processed and trigger the click again
                e.target.click();
            }).catch(e => {
                // in case of an error we still want the user to be able to navigate to a different page
                e.target.click();
            });
        }
    });
</script>
```

### Testing

On `localhost`, events will be ignored and the event details are printed to the console instead. You can open the browser console to confirm that an event will be sent in production. The output should look like this:

```
Pirsch event: Button Clicked {"duration":42,"meta":{"Clicks":1}}
```

## Sending Events From Your Backend

Sending an event from your backend works like sending a hit, except that you also attach the event name, duration, and metadata fields. Before you can use the backend integration, make sure you have [created a client]({{<ref "/get-started/backend-integration#create-a-client">}}). You can then [send an event]({{<ref "/api-sdks/api#sending-an-event">}}) using that client.

## Dashboard and Filtering

Events are listed in their own panel on the dashboard. The panel is present if you have sent at least one event within the selected period. It shows the unique visitor count and conversion rate and can be expanded to see more details. You can click on an event to filter for it.

![Events](/dashboard/events.png)

The detailed view shows the event name, the number of views, the number of unique visitors, the conversion rate, and the average duration.

![Events](/dashboard/events-metadata.png)

To filter for an event, click on one of the entries in the panel or detailed view. It will then be added to the list of filters. Here is an example for all visitors that signed up for the newsletter. Panels that are not relevant for events (like the number of sessions, average time on page, and so on) will be hidden.

![Events Filter](/dashboard/events-filter.png)

## A Note on Privacy

You have to make sure no [personal identifiable information (PII)](https://en.wikipedia.org/wiki/Personal_data) is sent within a metadata field. All other information will be anonymized like it is for hits. Personal information includes all data that can be used to uniquely identify a person, like the full name, email address, phone or credit card number, IP address, and so on.
