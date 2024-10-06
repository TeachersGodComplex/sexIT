const contents = [
  "Barbaphesten",
  "Barabaphesten",
  "Barbapesten",
  "Barbiephesten",
];

export function updateHeroHeadingContent() {
  setTimeout(updateHeroHeadingContent, 100 + Math.random() * 900);
  const heading = document.querySelector(".hero h1");
  if (!heading) return;

  heading.textContent = contents[Math.floor(Math.random() * contents.length)];
}
