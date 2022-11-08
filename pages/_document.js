import { Html, Head, Main, NextScript } from "next/document";
import React, { useEffect} from "react";
import { CssBaseline } from "@nextui-org/react";

export default function Document() {
  
  return (
    <Html style={{ fontSize: "16px" }}>
    <Head>
      {CssBaseline.flush()}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      <link href='https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap' rel='stylesheet'></link>
      <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet"/>
      <link
        rel='stylesheet'
        href='https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
        integrity='sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=='
        crossOrigin=''
      />
      <script
        src='https://unpkg.com/leaflet@1.7.1/dist/leaflet.js'
        integrity='sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=='
        crossOrigin=''></script>
    </Head>
    <body  style={{ fontSize: "16px" }}  >
      <Main />
      <NextScript />
      <script type='text/javascript' src='https://js.api.here.com/v3/3.1/mapsjs-core.js'></script>
      <script type='text/javascript' src='https://js.api.here.com/v3/3.1/mapsjs-service.js'></script>
      <script type='text/javascript' src='https://js.api.here.com/v3/3.1/mapsjs-ui.js'></script>
      <script type='text/javascript' src='https://js.api.here.com/v3/3.1/mapsjs-mapevents.js'></script>
      <script
        async
        src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAC5l_xNclOKWKHAOo_2HstzoO5-yggxIU&libraries=places'></script>
    </body>
  </Html>
  )
}

