export default async function (message) {
  const res = await fetch("https://vector.profanity.dev", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  const data = await res.json();
  return data;
}
