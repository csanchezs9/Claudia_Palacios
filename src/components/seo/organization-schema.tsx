import { SITE } from "@/lib/utils";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physician"],
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    image: `${SITE.url}/og-image.jpg`,
    priceRange: "$$$",
    medicalSpecialty: "Dermatology",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.2086,
      longitude: -75.5695,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [SITE.social.instagram, SITE.social.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
