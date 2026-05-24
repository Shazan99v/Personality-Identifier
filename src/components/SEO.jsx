import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph (for WhatsApp, Facebook sharing) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default SEO;