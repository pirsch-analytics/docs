# Events

Events measure how many visitors took a particular action, such as clicking a button or filling out a form, and calculate the conversion rate and (optional) average time. You can filter the dashboard by events and track additional metadata fields (key-value pairs).

The main difference from [conversion goals](/advanced/conversion-goals) is that you can programmatically control when an event is sent and attach metadata.

::: info
Events count towards your billable monthly page views.
:::

::: danger
You must ensure that no [Personally Identifiable Information (PII)](https://en.wikipedia.org/wiki/Personal_data) is sent within a metadata field. All other information is anonymized, as is the case for page views. PII includes any information that can be used to uniquely identify an individual, such as the full name, email address, phone or credit card number, etc.
:::

## Creating Events

Events are automatically created and added to your dashboard when you send them. They can be sent from your website using JavaScript, or from your backend using our [API](/api-sdks/api) or one of our [SDKs](/api-sdks/sdks).

## Sending Events From Your Website

Before you can send your first event, you need to add the `pirsch-events.js` or `pirsch-extended.js` JavaScript snippet to your website. They're different from the regular `pirsch.js` to reduce page load and keep the scripts lightweight.

Navigate to the settings page on the dashboard and select the **Integration** tab. Copy the code snippet for your domain and add it to the `head` section of each page you want to send events from. The snippet looks like this:

```HTML
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch-events.js"
    id="pirscheventsjs"
    data-code="5gXQXdNTvteM4eVY35fNBkcU5CbStFSq"></script>
```

The `data-code` is the identification code for your domain. If you reset it, you also need to replace it in the snippet.

The `data-exclude` and `data-include` attributes from the regular `pirsch.js` can also be used for the event snippet. Please refer to the [website integration](/get-started/frontend-integration) for details.

`pirsch-extended.js` is a lot more powerful and provides automatic tracking of [outbound link clicks](/advanced/outbound-links) and [file downloads](/advanced/file-downloads). It also allows you to track events using HTML attributes and CSS class names. Please refer to the examples below to decide which one to use.

::: info
`pirsch-events.js` **can't** be used as a replacement for the regular `pirsch.js`. It can only be used to send events programmatically. `pirsch.js` is still required to send page views. However, `pirsch-extended.js` provides all features, so you can use it to replace the other scripts.
:::

### Example 1

You are now ready to start sending events. Here is a simple example of how to send an event at the click of a button.

```HTML
<button id="button">Send Event</button>

<script type="text/javascript">
    // Wait until the page has finished loading before adding the event listener.
    document.addEventListener("DOMContentLoaded", () => {
        let clicks = 1;

        // You might need to use a different selector, like if you have other elements in your button.
        // See the second example on how you could solve that.
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
    });
</script>
```

The script sends an event on every button click and adds one to the counter. The important part here is the call to the `pirsch` function. The first parameter is the event name, followed by optional parameters. The `duration` parameter can be used to send a number (seconds) with the event, which is used to calculate the average duration. This can be the time spent on the page, for example, or anything you want, such as the time it took to read a blog post. The 'meta' parameter is an object containing key-value pairs and is displayed below the event on the dashboard. The attached metadata can be used later to further break down the event. Note that you can only use scalar values (strings, numbers and booleans). There is no limit to the number of metadata fields you can send.

The function returns a promise, which you can use to continue with your code after the event has been sent, or to handle any errors. We recommend that you perform your action even if the event cannot be sent, to avoid any interruption.

### Example 2

Here is an example of how to send an event when an external link is clicked. The custom attribute `pirsch-link` is used to query the links that should generate an event and is also used as the event name.

```HTML
<a href="https://external-page.com/"
   target="_blank"
   pirsch-link="Link Clicked">
    Visit external <span>page</span>
</a>

<script type="text/javascript">
    // Wait until the page has finished loading before adding the event listener.
    document.addEventListener("DOMContentLoaded", () => {
        // Select all elements with the "pirsch-link" attribute.
        const links = document.querySelectorAll("[pirsch-link]");
        
        // Add an event listener to each link to send an event on click.
        links.forEach(link => link.addEventListener("click", e => {
            // Find clicked element.
            let target = e.target;

            while(!target.hasAttribute("pirsch-link")) {
                target = target.parentNode;
            }

            // Use the attribute as the event name.
            const eventName = target.getAttribute("pirsch-link");
            pirsch(eventName);
            console.log("Pirsch event sent", eventName); // optional to see if it is working
        }));
    });
</script>
```

The span inside the HTML code is only there to demonstrate how you can get the actual element that was clicked if it contains child elements. You can skip this step for links that contain text only.

## Sending Events From Your Backend

Sending an event from your backend works just like submitting a page view, except that you need to append the event name, duration and metadata fields. Before you can use the backend integration, make sure you [created a client](/get-started/backend-integration#create-a-client). You can then use the client to [send an event](/api-sdks/api#sending-an-event).

## Testing

Events are ignored on localhost and printed to the console instead. You can open the browser console to confirm that an event is being sent in production. The output should look something like this

```
Pirsch event: Button Clicked {"duration":42,"meta":{"Clicks":1}}
```

## Dashboard and Filtering

Events are listed in their own panel on the dashboard. The panel is available if you have sent at least one event within the selected time period. It shows the number of unique visitors and the conversion rate, and can be expanded to show more details. You can click on an event to filter for it.

![Events](../static/advanced/events.png)

The detailed view shows the event name, the number of views, the number of unique visitors, the conversion rate, and the average duration.

![Events](../static/advanced/events-metadata.png)

To filter for an event, click on one of the entries in the Panel or Detail view. It will be added to the list of filters. Here is an example for all visitors who have subscribed to the newsletter. Panels that are not relevant to events (such as number of sessions, average time on page, etc.) will be hidden.

![Events Filter](../static/advanced/events-filter.png)

You can also filter for metadata. Simply click the entry in the detailed view below the event.
