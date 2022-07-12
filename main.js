var themeSwitchCheckbox = document.querySelector(".themeSwitch input");

function updateTheme() {
	var nextTheme = themeSwitchCheckbox.checked ? "dark" : "light";
	
	document.querySelector("body").className = nextTheme;
	localStorage.setItem('theme', nextTheme);
}

//maintain the selected theme when switching pages:
themeSwitchCheckbox.checked = localStorage.getItem('theme') == 'dark';
updateTheme();