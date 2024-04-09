# Framer

Pirsch can easily be integrated into Framer in just a few minutes. In this article, you'll learn how to set it up and how to track events using custom code.

## The Demo Site

The demo site is very simple. It just has a single page and a button. Clicking the button will track a custom event that we will see later on the dashboard.

This is how the page looks in the Designer.

![Framer Designer](/static/integrations/framer/framer-designer.png)

## Adding a Script to Framer

Before we can integrate Pirsch with Framer, you will need to set up a dashboard on Pirsch. If you're testing your Framer site, please use the test domain (`something.framer.app`). If you're using a custom domain, use that instead. The domain on the Pirsch dashboard must match your Framer domain. You can also use [additional domains](/advanced/domains-rollup.md) to set up both at the same time. The domain can later be changed in the settings if needed.

Once the dashboard has been created, copy your personal code snippet from the [integration settings](https://dashboard.pirsch.io/settings/integration) or select it from the confirmation page.

In your Framer project, go to **Site Settings** > **General** and scroll down to the **Custom Code** section. You can open it in the top right corner of the Designer by clicking the gear icon.

![Framer Custom Code](/static/integrations/framer/framer-custom-code.png)

Paste your Pirsch snippet into the **head tag** section (start or end doesn't matter). You can also add the custom code for the events to the **body tag** section. The code can be found in the events section on this page.

The final step is to publish your changes. You can do this from the Designer or from the Dashboard in the top right menu.

![Framer Publish](/static/integrations/framer/framer-publish-small.png)

## Tracking Custom Events

There are a few [options](/advanced/events.md) to track custom events in Framer. For this demo, we'll use a custom code snippet and code overrides. Code overrides can be added to any Framer element.

First, copy the script below into the **body tag** section of the general settings page (the same section where we added the Pirsch script).

```js
<script>
    function pirschClickEvent(element) {
        const name = element.getAttribute("data-pirsch-event");

        if (!name) {
            console.error("Pirsch event attribute name must not be empty!", element);
            return;
        }

        const meta = {};
        let duration;

        for (const attribute of element.attributes) {
            if (attribute.name.startsWith("data-pirsch-meta-")) {
                meta[attribute.name.substring("data-pirsch-meta-".length)] = attribute.value;
            } else if (attribute.name.startsWith("data-pirsch-duration")) {
                duration = Number.parseInt(attribute.value, 10) ?? 0;
            }
        }

        pirsch(name, {meta, duration});
    }

    document.addEventListener("DOMContentLoaded", () => {
        const elements = document.querySelectorAll("[data-pirsch-event]");

        for (const element of elements) {
            element.addEventListener("click", () => {
                pirschClickEvent(element);
            });
            element.addEventListener("auxclick", () => {
                pirschClickEvent(element);
            });
        }
    });
</script>
```

The script will select all elements on the page with the `data-pirsch-event` attribute and attach a click event to them. When the element is clicked, an event is fired and sent to Pirsch. Framer doesn't allow attributes that don't start with `data-` or are regular HTML attributes like `id`.

The above script also supports metadata. You can add any `data-pirsch-meta-KEY="VALUE"` attribute you like.

To add an event when the button on the page is clicked. Select it in the Designer.

![Framer Code Overrides](/static/integrations/framer/framer-code-overrides-small.png)

Scroll down and open the **Code Overrides** section in the menu on the right. Add a new file from the **File** drop-down list. You will be presented with a new overrides file. We won't need most of it. To add the custom attributes to the element, we'll use the `withTags` function.

```ts
import type { ComponentType } from "react"

export function withTags(Component): ComponentType {
    return (props) => {
        return (
            <Component
                {...props}
                data-pirsch-event="Visit Pirsch Button"
                data-pirsch-meta-type="primary"
            />
        )
    }
}
```

![Framer Code File](/static/integrations/framer/framer-code-small.png)

As you can see, we've added the `data-pirsch-event` attribute so that the button will be picked up by the custom script added above. The `data-pirsch-meta-type` attribute is optional and sets the metadata `type` to `primary`.

Finally, close the file and select it in the **Code Overrides** section. Under **Overrides**, select the `withTags` function we've just created.

![Framer Code Overrides Selection](/static/integrations/framer/framer-code-overrides-selection.png)

And that's it! After publishing the changes, clicking the button on the page after publishing the changes will now fire an event. For more advanced use cases, see the [events article](/advanced/events.md).

## Analyzing the Traffic

Once you have integrated Pirsch into your Framer site and published the changes, we will start collecting data. It may take a few minutes for the first page views and events to show up on your dashboard.

Here is what it will look like for our simple demo site.

![Pirsch Dashboard](/static/integrations/framer/framer-pirsch-dashboard.png)

The metadata for the button can be viewed in the Event Details dialog (click the Expand icon in the upper right corner of the panel).

![Pirsch Dashboard Events](/static/integrations/framer/framer-pirsch-dashboard-event.png)

As you can see, the event will have the `type` set to `primary`. The `Outbound Link Click` is also tracked if you set the button as a link.

## Testing the Integration

Once you have added and published your custom code snippet, you can reload your website. To test that Pirsch is working as expected, you can open the browser's Network tab from the Developer Tools (usually `Cmd/Ctrl + Shift + I` or `F12`). You should see one request to load the script, one to view the page, and one when you click the button.

![Framer Integration Test](/static/integrations/framer/framer-demo.png)

Here is an enlarged view of the network tab.

![Framer Integration Test](/static/integrations/framer/framer-demo-network.png)

The first request loads the script. The second one tracks the page view. The last two are only displayed when you click on the button. All of them should show a status code of 200. If you select one, you can see the request and response data. For the event, this will be what you configured in the Designer.
