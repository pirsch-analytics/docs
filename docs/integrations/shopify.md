# Shopify

Pirsch can be easily integrated into Shopify in minutes. In this article, you'll learn how to set it up and use custom code to track events, sales, and revenue.

A more advanced integration can be implemented using the [API](/api-sdks/api.md). This requires programming experience. A plugin may be available on the App Store, but we don't currently provide one ourselves.

## Adding the Script to Shopify

The Pirsch JavaScript snippet needs to be added in two places on your Shopify site.

### Adding the Snippet to the Theme

Log in to your Shopify account and navigate to the **Themes** section of your **Online Store**. Click the extended settings next to the **Customize** button and select **Edit code**.

![Theme Settings](/static/integrations/shopify/theme-settings.png)

In the **Layout** folder, select **theme.liquid**. Scroll down until you see the end of the `</head>` section and paste your snippet right before the closing tag.

![Theme Settings Code](/static/integrations/shopify/theme-settings-code.png)

### Adding the Snippet to the Checkout

To add the JavaScript snippet to the checkout pages, navigate to the **Settings** (from the bottom right corner) and select **Customer events**. Create a new script by clicking **Add custom pixel** and enter *Pirsch* for the name.

![Customer Events Settings](/static/integrations/shopify/tracking-checkout-settings.png)

On the next page, open the **Permission** and **Data sale** settings. Pirsch does not require consent for annonymized statistics (which page views are by default), so you can select the last option for both.

![Customer Events Settings Details](/static/integrations/shopify/tracking-checkout-settings-details.png)

As the last step, add the snippet using the code blow:

```js
const script = document.createElement("script");
script.setAttribute("src", "https://api.pirsch.io/pa.js");
script.setAttribute("id", "pianjs");
script.setAttribute("async", "");
script.setAttribute("data-code", "YOUR_IDENTIFICATION_CODE");
document.head.appendChild(script);
```

Replace `YOUR_IDENTIFICATION_CODE` with your identification code from the snippet. In case you have configured any options (like disabled features for examle), add them ass well using the `setAttribute` method.

Save the changes and you're done!

### Testing the Integration

After you've added the snippet to the shop and checkout pages, you can test the integration. Open your shop and the browser developer tools (usually by pressing `Ctrl/Cmd + Shift + I`).

You should see the Pirsch script being loaded and a page view being send in the network tab. If you don't, reload the page.

![Theme Settings Check](/static/integrations/shopify/theme-settings-check.png)

## Tracking Custom Events

Custom events can be used to measure a range of different aspects of your shop. Pirsch will track a few things automatically, including outbound link clicks and file downloads.

You can add more events to your site using a JavaScript script. As an example we'll be using the **Shop all** button on the front page. Whenever it is clicked, an event will be send to Pirsch.

![Custom Events](/static/integrations/shopify/tracking-buttons.png)

First, open the code for the template you would like to change. In the case of the button this is `image-banner.liquid`. The code can be opened from the same settings you used to install the JavaScript snippet.

Once open, scroll to the code for the button. Next, add the HTML attributes required to track the event.

![Custom Events Code](/static/integrations/shopify/tracking-buttons-code.png)

In this case we are adding the `pirsch-event="Shop all"` attribute for the event and `pirsch-meta-section="Image Banner"` to track the section the event belongs to as meta data. Save the template.

There are other methods to track custom events. Using HTML attributes is one of the simpler solutions. For more, check out the [custom events article](/advanced/events.md).

To see if it's working, go to your shop page and open the browser developer tools. Disable clearing the logs on the network tab. Click the button and see if you can find the Pirsch event.

![Custom Events Check](/static/integrations/shopify/tracking-buttons-event.png)

On your dashboard, you should then see the event appearing.

![Custom Events Panel](/static/integrations/shopify/tracking-buttons-panel.png)

If you expand the panel, you can see the meta data for the event.

![Custom Events Details](/static/integrations/shopify/tracking-buttons-details.png)

## Tracking Form Submissions

*WIP*

```js
<script>
    // Pirsch event tracking.
    const selector = [
        "#ContactFooter"
    ];

    document.addEventListener("DOMContentLoaded", () => {
        selector.forEach(s => {
            const element = document.querySelector(s);
            
            if (element.tagName === "FORM") {
                element.addEventListener("submit", e => {
                    const meta = {form: s};
                    const input = element.querySelectorAll("input");

                    input.forEach(i => {
                        const type = i.getAttribute("type").toLowerCase();
                        
                        if (type !== "password" && type !== "hidden") {
                            const name = i.getAttribute("name");
                            meta[name] = i.value;
                        }
                    });

                    pirsch("Form Submission", {meta});
                });
            }

            // Handle other cases here...
            // For example, element.tagName === "A" to track link clicks.
        });
    });
</script>
```

## Tracking Sales and Revenue

*WIP*

https://shopify.dev/docs/api/web-pixels-api/standard-events/checkout_completed

```js
const script = document.createElement("script");
script.setAttribute("src", "https://api.pirsch.io/pa.js");
script.setAttribute("id", "pianjs");
script.setAttribute("async", "");
script.setAttribute("data-code", "sgZ4FLnnijhUCuZ8vHUfdLLyqpCDMEnO");
document.head.appendChild(script);

analytics.subscribe("checkout_completed", event => {
    const checkout = event.data.checkout;
  
    pirsch("Purchase", {
        meta: {
            amount: checkout.totalPrice.amount,
            currency: checkout.currencyCode,
            email: checkout.email,
            order_id: checkout.order.id,
            item_count: checkout.lineItems.length
        }
    });
});
```

## Analyzing the Data

Once you have integrated Pirsch into your Shopify shop and published the changes, we will start collecting data. It may take a few minutes for the first page views and events to show up on your dashboard.
