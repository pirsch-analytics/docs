# Frequently Asked Questions

## Where Do I Find My Invoices?

You can find your invoices in the Stripe portal. Navigate to the billing page from the top-right menu and click **Manage Your Subscription**.

## Can I Use (Vercel) Rewrites/Redirects to Proxy the Scripts?

No, we rely on information provided by the visitor's browser. If you rewrite requests through Vercel (or a similar service), the requests sent to Pirsch will no longer contain the original IP address, but the server IP address instead. We block most data center IP addresses to protect our customers from spam.

In addition, there is no way to reliably extract this data. A header containing the forwarded IP address, as often provided by Cloudflare or similar, can be corrupted ([IP spoofing](https://en.wikipedia.org/wiki/IP_address_spoofing)), allowing an attacker to create as many fake visitors as they want from a single device.

The real solution is to host a [proxy](/advanced/proxy) yourself or use a [Cloudflare worker](/advanced/cf-workers) (free).

**But competitors X and Y have this!

Yes, but they are vulnerable to IP spoofing. We checked.

## Can I Self-Host Pirsch Analytics?

Yes, you can host Pirsch yourself by purchasing an [Enterprise License] (https://pirsch.io/pricing). Pricing depends on your size and needs, as it involves setting up a license agreement and requires more support from our side. [Contact us](mailto:support@pirsch.io) to discuss your requirements.

We recommend the SaaS plan for smaller companies or personal projects.
