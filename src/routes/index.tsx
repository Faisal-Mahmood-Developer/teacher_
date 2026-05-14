export const Route = createFileRoute("/")({
  component: Index,

  head: () => ({
    title: "Ayesha Liaqat — B.Ed Qualified Teacher | Lahore",

    meta: [
      {
        name: "description",
        content:
          "Portfolio of Ayesha Liaqat, a B.Ed qualified teacher in Lahore with 1.5+ years of experience teaching Grade 7 & 8 students.",
      },

      {
        name: "keywords",
        content:
          "Ayesha Liaqat, Teacher in Lahore, B.Ed teacher, Grade 7 teacher, Grade 8 teacher, Lahore educator",
      },

      {
        name: "author",
        content: "Ayesha Liaqat",
      },

      {
        property: "og:title",
        content: "Ayesha Liaqat — B.Ed Qualified Teacher",
      },

      {
        property: "og:description",
        content:
          "Dedicated educator passionate about lesson planning, classroom management, and student development.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:locale",
        content: "en_PK",
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
});