// export default function stringToSlug(title) {
//   return title.trim().toLowerCase().split(" ").join("-");
// }

function stringToSlug(title) {
  return title.trim().toLowerCase().split(" ").join("-");
}

module.exports = stringToSlug;
