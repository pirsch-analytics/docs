# Referrer and UTM Parameters

Pirsch supports special URL query parameters to improve the quality of your statistics. They can be used to reduce the number of **unknown** referrers on the dashboard and to track your paid or unpaid marketing campaigns.

## Setting the Referrer

The following parameters can be added to a link to set the referrer:

* ref
* referer (due to a typo in the HTTP specification)
* referrer
* source
* utm_source

We recommend using **ref** as it is the shortest, or **utm_source** when used with other UTM parameters. A simple example of a query parameter is **https://example.com/?ref=Docs**. When visitors click on the link, they will appear under **Docs** in the referrer panel.

## Adding UTM Parameters to Your Links

Urchin Tracking Module (UTM) parameters were first introduced by Google Analytics' predecessor, Urchin, and are a widely accepted tool for tracking the effectiveness of online marketing campaigns. With Pirsch, you can use UTM parameters to break down how many people have visited your website and compare the results of your campaigns.

A UTM parameter is added to a link in the same way as referrers, as described above. For example, to track how many visitors came from a paid newsletter, you can add the source, medium and campaign to the URL: **https://example.com/?utm_source=Newsletter&utm_medium=Email&utm_campaign=Paid+Newsletter**. How you use these parameters is up to you. To add spaces to a parameter, use **%20** or a plus sign (**+**): **?utm_source=with+space** or **?utm_source=with%20space**.

**utm_source**, **utm_medium** and **utm_campaign** are essential parameters that you usually set for a campaign. **utm_content** and **utm_term** can be used to further break down the traffic and are often used for A/B testing. The panels for these parameters will only appear on the dashboard if you filter on one of the essential parameters.

### UTM Source

**utm_source** identifies the source of the traffic. This could be a website or a newsletter, for example.

### UTM Medium

**utm_medium** identifies the medium, such as **social media** or **Twitter** to be more precise.

### UTM Campaign

**utm_campaign** identifies the marketing campaign, such as **summer sale**.

### UTM Content

**utm_content** identifies which content drove the traffic. For example, if you have multiple links to the same page in a newsletter, you can tell which link was clicked. Examples of **utm_content** are **top** and **bottom**, or **menu** and **sidebar**.

### UTM Term

**utm_term** is only relevant for paid ads and is used to filter for search terms used by visitors.
