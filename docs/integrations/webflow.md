# Webflow

::: info
If you have a Webflow site with a template that has "e-commerce" features, even if not used, Pirsch may not work.
:::

## Adding Pirsch Analytics to Webflow

1. Get your personal code snippet from the [Integration Settings](https://dashboard.pirsch.io/settings/integration). We recommend the Pirsch Extended script to enable all features.
2. In your Webflow project, go to **Site settings** > **Custom code**.
3. Paste your Pirsch snippet in the Head code section.
4. Click **Save changes**.

::: info
Make sure that the hostname of your Webflow page and the Pirsch Dashboard are the same, otherwise the page views will not be displayed.
:::

## Tracking Events in Webflow

The easiest way to track events in a Webflow is to use custom HTML attributes with the Pirsch extended script.

1. In your Webflow project, select the element you want to track events with.
2. Go to **Element settings panel** > **Custom attributes**.
3. Click the **+** icon.
4. Enter the name of your custom attributes following [the event guide](https://docs.pirsch.io/advanced/events#example-2-using-html-attributes).

## Troubleshooting

### Problem

If the template has ecommerce features, Webflow seems to automatically check the box "Use global site tag (required for ecommerce event tracking)" in Integrations -> Google Analytics. This blocks Pirsch. The GA Site Tag field is locked in the "on" position. The user cannot turn it off.

### Solution

To turn off the GA Site Tag field, first enter something in the Google Analytics Tracking ID field. Now you can disable the GA Site Tag button. Delete the tracking ID/character you entered and save the changes. Pirsch should now work as expected.

You will need to add the UA code to the site tag in a typical UA code format. After you've checked off the site tag box, be sure to delete the UA you entered. Otherwise, the code will remain live even if the button is turned off - so it needs to be deleted.
