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

We provide a Data Processing Agreement (DPA) or in German "Vertrag zur Auftragsverarbeitung", which ensures that companies handle all data of EU citizens in accordance with the GDPR. It's a contract between the data processor (us) and the data controller (you).

You can download and sign the Data Processing Agreement yourself. You can download and sign the latest version in [English](https://pirsch.io/static/files/Data%20Processing%20Agreement%20-%20Pirsch%20Analytics.pdf) or [German](https://pirsch.io/static/files/Vertrag%20zur%20Auftragsverarbeitung%20-%20Pirsch%20Analytics.pdf). We recommend anyone who runs a business within the European Union to sign it.

## Privacy Policy Template

You can use the following template for your privacy policy.

Please note that we're not legally responsible for any privacy risks on your site. Each country has different privacy laws, and we can't provide one that will work for all of them. However, the template should work for most privacy regulations and is as transparent as possible.

### English

For web analytics, we use Pirsch Analytics. Pirsch Analytics is a cookie-free web analytics software that was developed according to the Privacy by Design principle. To analyze visitor flows, Pirsch Analytics uses a hashing algorithm to generate a 16-digit number as the visitor ID when the page request is received. The input values are the IP address, the user agent, the date and a salt.

The visitor's IP address is not persisted in whole or in part, and is anonymized completely and non-reversibly by the hash. The inclusion of the date and the use of one salt per website ensures that website visitors cannot be recognized for more than 24 hours and cannot be tracked across multiple websites. A rough localization (country/city) is performed via a locally integrated database.

### German

Für die Webanalyse setzen wir Pirsch Analytics ein. Bei Pirsch Analytics handelt es sich um eine cookiefreie Webanalysesoftware, die nach dem Grundsatz Privacy by Design entwickelt wurde. Zur Analyse der Besucherströme generiert Pirsch Analytics bei Erhalt des Seitenaufrufs mit Hilfe eines Hashing-Algorithmus eine 16-stellige Zahl als Besucher-ID. Als Eingabewerte dienen die IP-Adresse, der User Agent, das Datum und ein Salt.

Die IP-Adresse des Besuchers wird weder vollständig noch in Teilen persistiert und durch den Hash vollständig und nicht reversierbar anonymisiert. Durch die Einbindung des Datums und der Verwendung von einem Salt pro Webseite ist gewährleistet, dass Webseitenbesucher nicht länger als 24 Stunden wiederzuerkennen sind und nicht über mehrere Webseiten hinweg getrackt werden können. Über eine lokal eingebundene Datenbank wird eine grobe Lokalisierung vorgenommen (Land/Stadt).
