---
title: "Website Integration"
date: 2022-04-02
draft: false
weight: 1
description: "Learn on how to integrate Pirsch into your website using JavaScript."
---

## Add Pirsch to Your Website

Once you have created an account, you can add Pirsch to your website.

1. open the dashboard and click on *Add Domain* in the menu
2. enter the hostname of your website (like *example.com*) and chose a subdomain and timezone you would like to use for the Pirsch dashboard ![Add Domain](/integration/add-domain.png)
3. click on *Add Domain*
4. copy the JavaScript snippet on the right and add it to your websites `<head>` section ![Code snippet](/integration/add-domain-snippet.png)

And you're done! Your website will now send page hits to Pirsch. Note that only hits for the hostname you have entered will be accepted. A page hit for *sub.example.com* won't be accepted for *example.com*. They are considered entirely different pages and you need to add a new website for all subdomains you would like to monitor. The only exception for this is `www` in front of your top-level domain. `www.example.com` for example will be accepted for `example.com` and the other way around. Note that this only counts for top-level domains, so `www` in front of an australian top-level domain like `com.au` won't be accepted for example. In that case, you explicitly need to configure the full hostname including `www` and redirect non-www requests to that domain (or the other way around).

## Test the Integration

To test the script, navigate to your website and open the network tab of the developer tools in your browser (usually F12 or `Ctrl/Control + Shift + I`). Search for "hit" and make sure you get a 200 response code in the status column.

![Developer Tools](/integration/network-tab.png)

In case you don't, check your identification code and the domain you have configured. Also, make sure you don't send the *Do Not Track* HTTP header (DNT) or set the `disable_pirsch` option in your local storage as the hit will be ignored then. Should you still not see the request going through, please contact our [support](mailto:support@pirsch.io).

## Reset the Identification Code

Your website is identified by the hostname the request is made from and an identification code. The identification code must be placed inside the JavaScript snippet. Should you ever need to recreate the code, navigate to the *Settings* page for your website and click on *Generate a New Identification Code*. This will invalidate your active code and create a new one you need to place the old one with.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="YOUR_IDENTIFICATION_CODE"></script>
```

## Exclude Pages

The snippet offers a very flexible way to exclude pages. You can exclude a single or multiple pages by specifing the `data-exclude` attribute. The content is a list of regular expressions that will be used to filter pages.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="YOUR_IDENTIFICATION_CODE"
    data-exclude="\/exact\/match,\/exclude\/page\/(en|de)/.*"></script>
```

This example will match the page `/exact/match` and every page the starts with `/exclude/page/en/` or `/exclude/page/de/`.

Please always [validate](https://regex101.com/) your expressions before using them and make sure you don't see any errors on the browser console. Special regex characters need to be masked (like the forward slash above). For a simple single page filter use a pattern like `\/your\/page`.

## Ignoring Your Own Page Views

You can disable the integration by setting the DNT (Do Not Track) header to `1` in your browser or by adding a value called `disable_pirsch` to your local storage.

For the latter option, open the developer tools (usually F12 or `Ctrl/Control + Shift + I`) in your browser and navigate to the *web storage* tab. Click on *local storage* and add a new value `disable_pirsch` and `1` as value. After reloading the page, no page view or event (in case you also use the event script) should be sent to Pirsch.
