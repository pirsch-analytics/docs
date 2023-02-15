# Additional Domains and Rollup Views

## Additional Domains

Additional domains are required if you want to send statistics to multiple dashboards or create rollup views. A Pirsch dashboard will only accept traffic from its configured domain and identification code. If the origin is different, you can add an additional domain to accept requests.

Below are the two use cases covered. It's also possible to combine the two and create rollup views while sending the statistics to multiple dashboards.

::: info
Duplicated page views and events count towards your monthly limit.
:::

### Creating a Rollup View

Let's say you have your top-level domain **example.com** and a subdomain **sub.example.com** and you want to track both websites on a single dashboard. In this case, create a dashboard for **example.com** and add an additional domain **sub.example.com** (wildcards with asterisks * also work). Now you can add the JS snippet to both sites using the same identification code.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="example-com-identification-code-here"></script>
```

### Sending Statistics to Multiple Dashboards

The second use case for additional domains is to send statistics to multiple dashboards. This allows you to create rollup views for two websites, each with its own dashboard. Each dashboard to which you send traffic requires an additional domain. For example, if you make an additional request from **example.com** to **rollup.example.com**, you need to add *example.com** to your **rollup.example.com** dashboard.

Once you have configured the additional domain, you can send statistics from **example.com** to **rollup.example.com** as follows.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="example-com-identification-code-here"
    data-domain="rollup.example.com"></script>
```

To send statistics to more than one additional dashboard, you can comma-separate the list, such as `data-domain="rollup.example.com,my-website.com"`.

## Clients

Clients are used to access the [Pirsch API](/api-sdks/api). You will need one if you decide to use the [backend integration](/get-started/backend-integration) or if you want to access your data from an external application.

To create a new client, click **Add Client**, select the type, enter a description and select the scopes. The scopes define the capabilities of the client. For example, you can create a read-only client by deselecting all write operations. The type can be either **oAuth** or **access token**. An oAuth client is the default and requires you to [get an access token](/api-sdks/api#getting-an-access-token) before you can make any other requests. The **access token** type can be used to make write-only requests. It only uses the client secret to make requests and doesn't require you to request an oAuth token, which is useful for stateless applications, such as a PHP client that cannot reuse an access token for multiple page views.

![Clients](/dashboard/create-client.png)

The dialogue that pops up will show the unique client ID and the secret you need to save. Treat the secret as a password. Once the dialogue is closed, there is no way to retrieve the secret. If you lose your secret, you will need to create a new client.

![Clients](/dashboard/settings-client.png)
