import React from 'react';
import Head from 'next/head';

interface JsonLdProps {
  data: Record<string, any>;
}

/**
 * Component to inject JSON-LD structured data for SEO
 * Used for Schema.org markup to enhance search engine understanding
 */
const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};

export default JsonLd;
