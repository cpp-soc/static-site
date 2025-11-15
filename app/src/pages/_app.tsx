
import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Cal Poly SOC - Student-led Security Operations Center at Cal Poly Pomona: Cybersecurity education, real-world threat monitoring, hands-on SIEM experience with Splunk and Rapid7, faculty mentorship, and career opportunities in the Mitchell C. Hill Center for Digital Innovation." />
        <meta name="keywords" content="Cal Poly SOC, CalPolySoc, Cal Poly Pomona SOC, CPP SOC, Student SOC, Cal Poly Pomona, Cal Poly cybersecurity, student SOC, security operations center, cybersecurity education, student opportunities, SIEM, Splunk, Rapid7, threat detection, security monitoring, student data center, faculty mentorship, real-world experience, cyber club, student jobs, internships, cyber careers, Mitchell C. Hill Center, Cal Poly security, information security, SOC analyst training" />
        <meta name="author" content="Cal Poly Pomona Student SOC" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Cal Poly SOC" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        <title>Cal Poly SOC - Student Security Operations Center</title>
      </Head>

      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NWSPGCBC');`,
        }}
      />

      {/* Organization Schema.org JSON-LD */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "@id": "https://calpolysoc.org/#organization",
            "name": "Cal Poly SOC",
            "alternateName": ["CalPolySoc", "Cal Poly Pomona SOC", "CPP SOC", "Student SOC"],
            "url": "https://calpolysoc.org",
            "logo": "https://calpolysoc.org/assets/logo3.png",
            "description": "Student-led Security Operations Center at Cal Poly Pomona providing hands-on cybersecurity education and real-world threat monitoring experience.",
            "sameAs": [
              "https://www.linkedin.com/company/calpolysoc",
              "https://discord.gg/calpolysoc"
            ],
            "parentOrganization": {
              "@type": "CollegeOrUniversity",
              "name": "California State Polytechnic University, Pomona",
              "url": "https://www.cpp.edu"
            },
            "location": {
              "@type": "Place",
              "name": "Mitchell C. Hill Center for Digital Innovation",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3801 W Temple Ave",
                "addressLocality": "Pomona",
                "addressRegion": "CA",
                "postalCode": "91768",
                "addressCountry": "US"
              }
            },
            "areaServed": "Cal Poly Pomona Campus",
            "knowsAbout": [
              "Cybersecurity",
              "Security Operations",
              "SIEM",
              "Threat Detection",
              "Security Monitoring",
              "Incident Response"
            ]
          }),
        }}
      />

      <div className="bg-gradient-to-r from-gray-500 to-black min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NWSPGCBC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;