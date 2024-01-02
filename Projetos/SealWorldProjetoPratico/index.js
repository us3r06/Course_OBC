document.getElementById("switch_theme").addEventListener("click", (e) => {
  const main = document.querySelector("main");
  const root = document.querySelector(":root");
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--color-background", "#030207");
    root.style.setProperty("--color-white", "#fff");
    root.style.setProperty("--color-blue", "#1474b4");

    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--color-background", "#fff");
    root.style.setProperty("--color-white", "#030207");
    root.style.setProperty("--color-blue", "#020239");

    main.dataset.theme = "dark";
  }
});
