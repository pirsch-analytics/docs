# Webflow

::: info
If you have a Webflow site with a template that has "e-commerce" features, even if not used, Pirsch may not work.
:::

## Troubleshooting

### Problem

If the template has ecommerce features, Webflow seems to automatically check the box "Use global site tag (required for ecommerce event tracking)" in Integrations -> Google Analytics. This blocks Pirsch. The GA Site Tag field is locked in the "on" position. The user cannot turn it off.

### Solution

To turn off the GA Site Tag field, first enter something in the Google Analytics Tracking ID field. Now you can disable the GA Site Tag button. Delete the tracking ID/character you entered and save the changes. Pirsch should now work as expected.

You will need to add the UA code to the site tag in a typical UA code format. After you've checked off the site tag box, be sure to delete the UA you entered. Otherwise, the code will remain live even if the button is turned off - so it needs to be deleted.
