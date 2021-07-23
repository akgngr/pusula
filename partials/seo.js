import Head from 'next/head';

const Seo = props => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.content} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@pusula.egitim" />
        <meta name="twitter:creator" content="@pusula.egitim" />
        <meta property="og:url" content="https://pusulaegitimkurumu.com" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content="/image/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="robots" content="index" />
        <meta name="googlebot" content="index, max-snippet:[1]" />
        <meta name="geo.region" content="TR-63" />
        <meta name="geo.placename" content="Şanlıurfa" />
        <meta name="geo.position" content="37.158333;38.791668" />
        <meta name="ICBM" content="37.158333, 38.791668" />
      </Head>
    </div>
  );
};

export default Seo;
