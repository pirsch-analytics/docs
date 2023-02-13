---
title: "Webflow"
date: 2022-07-01
draft: false
weight: 5
description: "Learn how to integrate Pirsch into Webflow."
---

## Troubleshooting

### If you have a Webflow site with a template that has "ecommerce" features, even if not used, Pirsch might not work

**Problem**

If the template has e-commerce features, Webflow apparently automatically checks the field "Use global site tag (required for Ecommerce event tracking)" in Integrations -> Google Analytics. This blocks Pirsch. The GA Site tag field is locked in the "on" position. The user is unable to turn it off.

**Solution**

To turn off the GA site tag field, first type something into the Google Analytics Tracking ID field. Now you can turn off the GA site tag button. Delete the tracking ID/characters you put in and save the changes. Pirsch should now work as expected.

You do need to add the UA code to the site tag filed in a typical UA code format. After you’ve turned off the site tag field, make sure to delete the UA you entered. Otherwise the code stays live, even if the button is turned of – so must be deleted.
