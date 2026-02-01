import { Helmet } from "react-helmet-async";
import { siteMeta } from "../../utils/siteMeta";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article" | "profile";
  image?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const ensureLeadingSlash = (value: string) => (value.startsWith("/") ? value : `/${value}`);

export default function Seo({
  title,
  description,
  path = "/",
  type = "website",
  image,
  jsonLd,
}: SeoProps) {
  const pageTitle = title ?? siteMeta.defaultTitle;
  const pageDescription = description ?? siteMeta.defaultDescription;
  const pageUrl = `${siteMeta.baseUrl}${ensureLeadingSlash(path)}`;
  const pageImage = image ?? siteMeta.defaultImage;
  const jsonLdItems = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <link rel="canonical" href={pageUrl} />
      <meta name="description" content={pageDescription} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteMeta.name} />
      <meta property="og:image" content={pageImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMeta.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {jsonLdItems.map((item, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          key={`jsonld-${index}`}
          type="application/ld+json"
        />
      ))}
    </Helmet>
  );
}
