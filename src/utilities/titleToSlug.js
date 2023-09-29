export function titleToSlug(title) {
  return title.trim().toLowerCase().split(" ").join("-");
}
