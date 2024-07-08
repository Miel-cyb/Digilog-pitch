const nav_btn = document.querySelector(
	".nav-toggle"
);
const linksContainer =
	document.querySelector(
		".links-container"
	);
const links =
	document.querySelector(".links");

nav_btn.addEventListener(
	"click",
	() => {
		const containerHeight =
			linksContainer.getBoundingClientRect()
				.height;
		const linksHeight =
			links.getBoundingClientRect()
				.height;

		if (containerHeight === 0) {
			linksContainer.style.height = `${linksHeight}px`;
		} else {
			linksContainer.style.height = 0;
		}
	}
);

const tabs = [
	{
		title: "Requirements",
		text: `<ul>
						<li>Maximum of 4 and minimum of 2 in a team.</li>
						<li>Mixture of males and females.</li>
						<li>Idea should be globally impactful.</li>
					</ul>`,
	},
	{
		title: "Steps",
		text: `<ul>
						<li>Tap on the 'Register Now' button</li>
						<li>Fill necessary details</li>
						<li>Save and Submit.</li>
					</ul>`,
	},

	{
		title: "Rewards",
		text: `<p>Only selected teams would be contacted. <br> Selected will go through training and pitch. <br> Our top 3 winners would have the chance of pitching their idea in Germany</p>`,
	},
];

const btns =
	document.querySelectorAll(".btn");
const texts =
	document.querySelector(".textarea");


window.addEventListener('DOMContentLoaded', () =>{
  texts.innerHTML = tabs[0].text
})

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		let activeBtn = e.currentTarget;
		btns.forEach((colorBtn) => {
			if (colorBtn === activeBtn) {
				activeBtn.style.backgroundColor =
					"rgb(234, 232, 232)";
			} else {
				colorBtn.style.backgroundColor =
					"rgb(191, 190, 190)";
			}
		});

		tabs.forEach((tab) => {
			if (
				btn.textContent.toUpperCase() ==
				tab.title.toUpperCase()
			) {
				texts.innerHTML = " ";
				let content =
					document.createElement("div");
				content.innerHTML = tab.text;
				texts.appendChild(content);
				console.log(texts.innerHTML);
			}
		});
	});
});
