# Referrer and UTM Parameters

Pirsch supports special URL query parameters to improve the quality of your statistics. They can be used to reduce the number of *unknown* referrers on the dashboard and to track your paid or unpaid marketing campaigns.

## Setting the Referrer

The following parameters can be added to a link to set the referrer:

* ref
* referer (coming from a typo in the HTTP specification)
* referrer
* source
* utm_source

We recommend to use *ref*, as it is the shortest, or *utm_source* if used with other UTM parameters. A simple example for a query parameter is *https://example.com/?ref=Docs*. If visitors click on the link, they will show up below *Docs* on the referrer panel.

## Adding UTM Parameters to Your Links

Urchin Tracking Module (UTM) parameters were first introduced by Google Analytics' predecessor Urchin and are a widely accepted tool to track the effectiveness of online marketing campaigns. With Pirsch, you can use UTM parameters to break down how many people visited your website and compare the results of your campaigns.

A UTM parameter is added to a link just like referrers as described above. To track how many visitors came from a paid newsletter for example, you can add the source, medium, and campaign to the URL: *https://example.com/?utm_source=Newsletter&utm_medium=Email&utm_campaign=Paid+Newsletter*. How you use these parameters is up to you. To add spaces to a parameter, use *%20* or a plus (*+*) sign: *?utm_source=with+space* or *?utm_source=with%20space*.

*utm_source*, *utm_medium*, and *utm_campaign* are essential parameters you usually set for a campaign. *utm_content* and *utm_term* can be used to further break down the traffic and are often used for A/B testing. The panels for these parameters will only show up on the dashboard if you filter by one of the essential parameters.

### UTM Source

*utm_source* identifies which source sent the traffic. This can be a website or newsletter for example.

### UTM Medium

*utm_medium* identifies the media, like *social media* or *Twitter*, to be more precise.

### UTM Campaign

*utm_campaign* identifies the marketing campaign, like *summer sale*.

### UTM Content

*utm_content* identifies which content sent the traffic. If you have multiple links referring to the same page in a newsletter for example, you can distinguish which link was clicked. Examples for *utm_content* are *top* and *bottom*, or *menu* and *sidebar*.

### UTM Term

*utm_term* is only relevant for paid ads and is used to filter for search terms used by visitors.
