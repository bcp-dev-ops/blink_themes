const palette = {
	bg: "#282c34",
	overlay: "#2c303b",
	fg: "#abb2bf",
	red: "#e06c75",
	orange: "#d19a66",
	yellow: "#e5c07b",
	green: "#98c379",
	cyan: "#56b6c2",
	blue: "#61afef",
	purple: "#c678dd",
	white: "#abb2bf",
	black: "#282c34",
	gray: "#5c6370",
	highlight: "#e2be7d",
	text: "#7f848e",
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
