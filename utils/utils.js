export function isValidUrl(url) {
  // Regular expression for URL validation
  return /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i.test(url)
}