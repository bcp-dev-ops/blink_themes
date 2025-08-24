const palette = {
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
