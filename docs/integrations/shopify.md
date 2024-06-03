# Shopify

Pirsch can easily be integrated into Shopify in just a few minutes. In this article, you'll learn how to set it up and how to track events, sales, and revenue using custom code.

A more advanced integration can be implemented using the [API](/api-sdks/api.md). This requires programming experience. A plugin may be available on the App Store, but we don't currently provide one ourselves.

*This article is work in progress!*

## Adding a Script to Shopify

*WIP*

* Theme
* Checkout

```js
const script = document.createElement("script");
script.setAttribute("src", "https://api.pirsch.io/pa.js");
script.setAttribute("id", "pianjs");
script.setAttribute("async", "");
script.setAttribute("data-code", "sgZ4FLnnijhUCuZ8vHUfdLLyqpCDMEnO");
document.head.appendChild(script);
```

## Tracking Custom Events

*WIP*

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

*WIP*
