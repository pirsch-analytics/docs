# Privacy

## We Do Not Track

Unlike other web analytics solutions, Pirsch does not track your visitors. By tracking, we mean recognizing visitors across multiple websites. For example, Google Analytics will identify a person on two unrelated websites in order to serve targeted ads.

We strictly separate the data for each website and don't sell any information to third parties. Data separation is achieved by creating different fingerprints for each domain.

## How Does Pirsch Recognize Visitors?

Pirsch uses the HTTP protocol to recognize visitors using a technique called fingerprinting. It generates a hash for each page visit, which is calculated from the visitor's IP address, the User-Agent header, the date, and a salt. 

The salt ensures that the hash varies from site to site so that they cannot be matched. Hashing the combination of these data points ensures that they are anonymized.

The date ensures that visitors can only be recognized for up to 24 hours, making Pirsch fully GDPR, CCPA, and PECR compliant. **We do not use cookies**. See the [open-source core](https://github.com/pirsch-analytics/pirsch) of Pirsch for details.

## What Data Do We Collect?

Pirsch collects and stores the following data points, depending on the integration you are using ([frontend](/get-started/frontend-integration) or [backend](/get-started/backend-integration)):

* User-Agent header (separate from a page view for up to three months)
* Visited page (only the path, not the full URL)
* Referrer
* UTM source, campaign, medium, content, term
* Language
* Time of visit
* Browser (extracted from User-Agent)
* Operating System (extracted from User-Agent)
* Country
* City
* Device type (desktop or mobile, extracted from user agent)
* Screen size (frontend only)

The visitor's IP address is never stored or logged!

## You Are in Charge

You are in control of the data we collect for you. You can delete all or part of your data from the settings and export statistics to CSV for the last 12 months.

## Data Processing Agreement

We provide a German Data Processing Agreement (DPA). A DPA ensures that companies handle all data of EU citizens in accordance with the GDPR. It's a contract between the data processor (us) and the data controller (you).

You can download and sign the DPA yourself. The latest version is always available [here](https://pirsch.io/static/files/pirsch-data-processing-agreement.pdf). We recommend anyone who runs a business within the European Union to sign it.
