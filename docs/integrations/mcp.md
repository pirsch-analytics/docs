# Model Context Protocol (MCP)

::: info
This is an unofficial integration created by the community. Unofficial integrations are not supported by us. Please open issues on [GitHub](https://github.com/charpeni/pirsch-mcp/issues) if you encounter any problems.
:::

The [Pirsch MCP server](https://github.com/charpeni/pirsch-mcp) is a community-maintained MCP integration that connects Pirsch Analytics to AI assistants and other clients supporting the [Model Context Protocol](https://modelcontextprotocol.io/). It provides read-only access to Pirsch API v1 statistics and cannot track visitors or change your Pirsch configuration.

## Installation

The server requires Node.js 22.19 or later and a Pirsch OAuth client with read permissions. Create the OAuth client from the dashboard's **Integration Settings** or **Account Settings**, disable write operations, and save the client ID and secret shown after creation.

Add the following configuration to your MCP client, replacing the credential placeholders:

```JSON
{
    "mcpServers": {
        "pirsch": {
            "command": "npx",
            "args": ["-y", "@charpeni/pirsch-mcp"],
            "env": {
                "PIRSCH_CLIENT_ID": "your-client-id",
                "PIRSCH_CLIENT_SECRET": "your-client-secret"
            }
        }
    }
}
```

You can optionally set `PIRSCH_DOMAIN_ID` to use a dashboard as the default target. Account-level OAuth clients can access multiple dashboards, so an assistant can instead list the available domains and select one for each statistics query.

Pirsch access keys beginning with `pa_` cannot be used because they are write-only and cannot read statistics. Keep the OAuth client secret secure and do not commit it to your repository.

## Available Tools

The server exposes three tools:

* `pirsch_list_domains` lists the dashboards available to the OAuth client.
* `pirsch_get_domain` returns the configured default dashboard.
* `pirsch_query_statistics` queries traffic, pages, events, acquisition, devices, geography, tags, keywords, and funnels for a date range.

For all configuration options, supported statistics, and troubleshooting instructions, see the [Pirsch MCP server documentation](https://github.com/charpeni/pirsch-mcp#readme).
