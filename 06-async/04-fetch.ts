async function getJson(url: string, signal: AbortSignal) {
  try {
    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const ac = new AbortController();
const { signal } = ac;

async function run() {
  try {
  } catch (error) {}
  console.log(
    await getJson("https://api.github.com/users/doingandlearning", signal)
  );
}

setTimeout(() => {
  ac.abort();
}, 100);

run();
