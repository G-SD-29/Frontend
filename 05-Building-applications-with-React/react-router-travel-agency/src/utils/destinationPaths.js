function getDestinationPath(slug, lang) {
  const prefix = lang ? `/${lang}` : "";
  return `${prefix}/destinations/${slug}`;
}

export { getDestinationPath };
