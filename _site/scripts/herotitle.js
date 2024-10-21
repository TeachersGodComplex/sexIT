const contents = [
  "Barbaphesten",
  "Barbapesten",
  "BarbAphterski",
];

const colors = [
  'var(--color-accent)',
  'rgb(80, 42, 42)',
]; 

export function updateHeroHeadingContent() {
  setTimeout(updateHeroHeadingContent, 900 + Math.random() * 900);
  const heading = document.querySelector(".hero h1");
  if (!heading) return;

  const randomIndex = Math.floor(Math.random() * contents.length);
  const selectedContent = contents[randomIndex];

  heading.textContent = selectedContent;

  if (selectedContent === "BarbAphterski") {
    heading.style.color = 'rgb(93, 138, 236)'; // Specifik färg för "BarbAphterski"
  } else {
    heading.style.color = colors[Math.floor(Math.random() * colors.length)]; // Slumpmässig färg för andra titlar
  }
}