export default function sitemap() {
  const baseURL = 'https://www.gmb.expert';

  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
