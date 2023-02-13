---
title: "Google Tag Manager"
date: 2022-12-12
draft: false
weight: 2
description: "Learn how to integrate Pirsch using the Google Tag Manager."
---

You can use the Google Tag Manager (GTM) to add the Pirsch snippet to your website.

1. in your Google Tag Manager account, click on *Tags* and *New*
2. enter a name for the Tag and click on *Choose a tag type to begin setup*
3. select *Custom HTML* and paste the Pirsch snippet (from the [domain setup]({{<ref "get-started/frontend-integration.md#add-pirsch-to-your-website">}}) or [settings]({{<ref "settings/developer.md">}})) into the HTML field **and activate document.write**
4. next click on *Choose a trigger to make this tag fire* and select *All Pages* (or filter the pages you would like to use the script on)
5. to finish the setup, click *Save*, *Submit* (top right corner), and *Publish*

After you have finished the setup, you can test the integration as described [here]({{<ref "get-started/frontend-integration.md#test-the-integration">}}).

Should GTM strip the parameters from the snippet. You can try [dynamically creating and embedding the snippet](https://support.google.com/tagmanager/thread/18040523/what-attributes-are-preserved-on-custom-html-tags-and-what-attributes-are-stripped?hl=en).

## Considerations When Using the Tag Manager

There are a few things to consider when using the Google Tag Manager:

* GTM adds extra complexity to your site. The Pirsch snippet is very lightweight and simple, adding any of the extra configuration options might affect how the snippet is triggered. Please verify the page hits are fired correctly from the browser console
* GTM is blocked by many adblockers and browsers (just like Google Analytics), so using the snippet directly will be more reliable (or even better, using our [backend integration]({{<ref "get-started/backend-integration.md">}}))

## Template

You can use the template provided by Markus Bärsch for an easy integration. Instructions can be found on [GitHub](https://github.com/mbaersch/pirsch-tag-server).
