export default function (text, count) {
  console.log(text);
  const result = text.substr(0, count);
  return `${result}...`;
}
