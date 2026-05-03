import { SITE } from "@/lib/utils";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "Physician"],
        "@id": `${SITE.url}/#physician`,
        name: SITE.name,
        alternateName: "Dermatóloga Claudia Palacios",
        description: SITE.description,
        url: SITE.url,
        telephone: SITE.phoneDisplay,
        email: SITE.email,
        image: `${SITE.url}/og-image.jpg`,
        logo: `${SITE.url}/img/logo.png`,
        priceRange: "$$$",
        medicalSpecialty: [
          "Dermatology",
          "CosmeticDermatology",
          "ClinicalDermatology",
        ],
        availableService: [
          { "@type": "MedicalProcedure", name: "Toxina botulínica" },
          { "@type": "MedicalProcedure", name: "Ácido hialurónico" },
          { "@type": "MedicalProcedure", name: "Láser CO2 fraccionado" },
          { "@type": "MedicalProcedure", name: "Luz pulsada intensa (IPL)" },
          { "@type": "MedicalProcedure", name: "Plasma rico en plaquetas" },
          { "@type": "MedicalProcedure", name: "Peeling químico" },
          { "@type": "MedicalProcedure", name: "Tratamiento de melasma" },
          { "@type": "MedicalProcedure", name: "Tratamiento de acné" },
          { "@type": "MedicalProcedure", name: "Tratamiento de rosácea" },
        ],
        areaServed: [
          { "@type": "City", name: "Medellín" },
          { "@type": "AdministrativeArea", name: "Antioquia" },
        ],
        memberOf: [
          {
            "@type": "MedicalOrganization",
            name: "Asociación Colombiana de Dermatología (ASOCOLDERMA)",
          },
          {
            "@type": "MedicalOrganization",
            name: "Sociedad Antioqueña de Dermatología (SADE/DMAS)",
          },
        ],
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "Universidad de Antioquia" },
          { "@type": "CollegeOrUniversity", name: "Universidad Pontificia Bolivariana" },
          { "@type": "CollegeOrUniversity", name: "EAFIT" },
        ],
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
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}/#physician` },
        inLanguage: "es-CO",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
