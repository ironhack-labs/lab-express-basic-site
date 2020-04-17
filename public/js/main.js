window.addEventListener("load", () => {
	let title = document.getElementById("title");
	title.classList.add("rotate-transition");

	let navList = document.querySelectorAll("nav ul li");
	navList.forEach((x) => x.classList.add("rotate-transition"));
});
