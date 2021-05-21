import Document, { Head, Main, NextScript, Html } from "next/document";

import { getSiteMetaData } from "@utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();

    return (
      <Html lang={siteMetadata.language}>
        <Head />
        <body>
          <Main />
          <NextScript />
      <!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "20f1769472ef4251928666e9cc23cef2"}'></script><!-- End Cloudflare Web Analytics -->
        </body>
      </Html>
    );
  }
}
