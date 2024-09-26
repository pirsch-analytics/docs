# Google Tag Manager

You can use Google Tag Manager (GTM) to add the Pirsch snippet to your website.

1. Click on **Tags** and **New** in your Google Tag Manager account
2. Enter a name for the tag and click **Choose a tag type to begin setup**.
3. Select **Custom HTML** and paste the Pirsch snippet (from the [domain setup](/get-started/frontend-integration#add-pirsch-to-your-website) into the HTML field **and activate document.write**.
4. Next click on **Choose a trigger to make this tag fire** and select **All pages** (or filter the pages you want to use the script on)
5. To finish the setup, click **Save**, **Submit** (top right corner) and **Publish**.

After you finished the setup, you can test the integration as described [here](/get-started/frontend-integration#test-the-integration).

Should GTM strip the parameters from the snippet. You can try [dynamically creating and embedding the snippet](https://support.google.com/tagmanager/thread/18040523/what-attributes-are-preserved-on-custom-html-tags-and-what-attributes-are-stripped?hl=en). Here is an example:

```js
<script>
(function() {
    var script = document.createElement("script");
    script.src = "https://api.pirsch.io/pa.js";
    script.id = "pianjs";
    script.setAttribute("data-code", "YOUR_IDENTIFICATION_CODE");
    document.body.appendChild(script);
})();
</script>
```

This will dynamically create the snippet and add it to the `body` tag of your site.

## Considerations When Using the Tag Manager

There are a few things to keep in mind when using the Google Tag Manager:

* GTM adds extra complexity to your site. The Pirsch snippet is very lightweight and simple, adding any of the extra configuration options may affect how the snippet triggers. Please check that the page hits are firing correctly from the browser console.
* GTM is blocked by many adblockers and browsers (as is Google Analytics), so using the snippet directly (or even better, using our [backend integration](/get-started/backend-integration)) is more reliable.

## Template

You can use the template provided by Markus Bärsch for easy integration. Instructions can be found on [GitHub](https://github.com/mbaersch/pirsch-tag-server).
