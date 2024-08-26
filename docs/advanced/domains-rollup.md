# Additional Domains and Rollup Views

Additional domains are required if you want to send statistics to multiple dashboards or create rollup views.

## Additional Domains

A Pirsch dashboard will only accept traffic for its configured domain and identification code. If the origin is different, you can add an additional domain to accept requests.

Below are the two use cases covered. It's also possible to combine the two and create rollup views while sending the statistics to multiple dashboards.

::: info
Duplicate page views and events count towards your monthly limit.
:::

### Creating a Rollup View

Let's say you have your top-level domain **example.com** and a subdomain **sub.example.com** and you want to track both websites on a single dashboard. In this case, create a dashboard for **example.com** and add an additional domain **sub.example.com** (wildcards with asterisks * also work). Now you can add the JS snippet to both sites using the same identification code.

```html
<script defer src="https://api.pirsch.io/pa.js" 
    id="pianjs" 
    data-code="example-com-identification-code"></script>
```

### Sending Statistics to Multiple Dashboards

The second use case for additional domains is to send statistics to multiple dashboards. This allows you to create rollup views for multiple websites. Each dashboard you send traffic to requires an additional domain. For example, if you make an additional request from **example.com** to **rollup.example.com**, you will need to add **example.com** to your **rollup.example.com** dashboard.

Once you have configured the additional domain, you can send statistics from **example.com** to **rollup.example.com** as follows.

```html
<script defer src="https://api.pirsch.io/pa.js" 
    id="pianjs" 
    data-code="example-com-identification-code"
    data-domain="rollup.example.com:rollup-example-com-identification-code"></script>
```

`data-domain` requires the hostname of the rollup view, as well as the identification code of that dashboard, separated by `:`.

To send statistics to more than one additional dashboard, you can comma-separate the list, e.g. `data-domain="rollup.example.com:code,my-website.com:code"`.

### Changing the Path

Like any other Pirsch dashboard, rollup views group pages by path. This means that if you have duplicate paths on multiple domains, they will appear as the same page. To change this, you can add different prefixes to the path for each domain using the `data-path-prefix` attribute. Here is an example.

```html
<script defer src="https://api.pirsch.io/pa.js" 
    id="pianjs" 
    data-code="example-com-identification-code"
    data-domain="first.example.com:code,second.example.com:code"
    data-path-prefix="/one,/two"></script>
```

If you now visit `example.com/foo`, the path send to `example.com` will be `/foo`. For `first.example.com` it will be `/one/foo` and for `second.example.com` it will be `/two/foo`.

If you have fewer prefixes than rollup domains, the last one is used for subsequent requests. Having only `/one` in the example above would result in both rollup views receiving `/one/foo`.

If no `data-domain` attribute is present, `data-path-prefix` will change the path for the current domain. In the example above this would mean only `example.com` would receive the page view with the path changed to `/one/foo`.

## Referrer

Referrers for additional domains will not be counted. If you have set up a domain `foo.com` as an additional domain for `bar.com`, switching from `foo.com` to `bar.com` will ignore the domain as a referrer. The other way around, it will still be tracked.

## Using the Server-Side Integration

Rollup views and additional domains can also be used via server-side integration. You'll need a [client](/api-sdks/api#creating-a-client) to make the same requests as above from your server.
