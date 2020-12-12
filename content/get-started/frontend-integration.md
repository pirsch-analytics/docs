---
title: "Website Integration"
date: 2020-12-12
draft: false
weight: 1
description: "Learn on how to integrate Pirsch into your website using JavaScript."
---

## Add Pirsch to Your Website

Once you have [created an account]({{<  ref "account/create-an-account.md"  >}}), you can add Pirsch to your website.

1. open the dashboard and click on *Add Domain* in the menu
2. enter the hostname of your website (like *example.com*) and chose a subdomain you would like to use for the Pirsch dashboard ![Add Domain](/integration/add-domain.png)
3. click on *Add Domain*
4. copy the JavaScript snippet on the right and add it to your websites `<head>` section ![Code snippet](/integration/add-domain-snippet.png)

And you're done! Your website will now send page hits to Pirsch. Note that subdomains are valid for the hostname you have entered. A page hit for *sub.example.com* will be accepted for *example.com*.

## Reset the Identification Code

Your website is identified by the hostname the request is made from and an identification code. The identification code must be placed inside the JavaScript snippet. Should you ever need to recreate the code, navigate to the *Settings* page for your website and click on *Generate a New Identification Code*. This will invalidate your active code and create a new one you need to place the old one with.

```html
<script type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="YOUR_IDENTIFICATION_CODE"></script>
```
