async function fetchPhotos<T>(): Promise<T[]> {
  const API = "https://jsonplaceholder.typicode.com/photos";
  try {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error();
    }
    console.log(`${response}, ${typeof response}`);
    return response.json();
  } catch (error) {
    console.log("Error", error);
    return [];
  }
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const contentElement: HTMLElement | null = document.getElementById("content");
const thumbnailElement: HTMLElement | null =
  document.getElementById("thumbnail");

document.addEventListener("DOMContentLoaded", async () => {
  const photos = await fetchPhotos<Photo>();
  console.log(`We have some photos: ${photos[0]}`);

  if (contentElement) {
    contentElement.innerHTML = photos[0].title;
  }

  if (thumbnailElement) {
    thumbnailElement.setAttribute("src", photos[0].thumbnailUrl);
    thumbnailElement.setAttribute("title", photos[0].title);
    thumbnailElement.setAttribute("alt", `Image of ${photos[0].title}`);
  }
});
