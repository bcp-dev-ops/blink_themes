const dark_palette = {
	bg: "#222435",
	overlay: "#2a2d40",
	fg: "#B4B7CF",
	red: "#E16765",
	orange: "#EAA041",
	yellow: "#EAE852",
	green: "#75BE78",
	cyan: "#46A3AF",
	blue: "#25ABE4",
	purple: "#c678dd",
	white: "#B4B7CF",
	black: "#222435",
	gray: "#585B89",
	highlight: "#e2be7d",
	comment: "#7679A7",
	text: "#585B89",
};

const light_palette = {
	bg: "#fafafa",
	overlay: "#f0f0f0",
	fg: "#6a6a6a",
	red: "#e05661",
	orange: "#ee9025",
	yellow: "#eea825",
	green: "#1da912",
	cyan: "#56b6c2",
	blue: "#118dc3",
	purple: "#9a77cf",
	white: "#fafafa",
	black: "#6a6a6a",
	gray: "#bebebe",
	highlight: "#e2be7d",
	comment: "#9b9fa6",
	text: "#bebebe",
};

t.prefs_.set("cursor-color", palette.highlight);
t.prefs_.set("foreground-color", palette.text);
t.prefs_.set("background-color", palette.bg);

const setTheme = ({ matches = false }) => {
	const palette = matches ? dark_palette : light_palette;
	t.prefs_.set("cursor-color", selectedPalette.highlightHigh);
	t.prefs_.set("foreground-color", selectedPalette.text);
	t.prefs_.set("background-color", selectedPalette.base);
	t.prefs_.set("color-palette-overrides", [
		palette.overlay,
		palette.red,
		palette.blue,
		palette.orange,
		palette.cyan,
		palette.purple,
		palette.yellow,
		palette.text,
		palette.subtle,
		palette.red,
		palette.blue,
		palette.orange,
		palette.cyan,
		palette.purple,
		palette.yellow,
		palette.text,
	]);
};

window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", setTheme);

setTheme({
	matches: window.matchMedia("(prefers-color-scheme: dark)").matches,
});
