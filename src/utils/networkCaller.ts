// NOTE Did a default export here as no other type of requests are called in the project
export default async function getRequest(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
// TODO Try Catch here?
