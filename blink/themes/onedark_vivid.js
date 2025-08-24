const palette = {
	bg: "#282c34",
	overlay: "#2f333d",
	fg: "#abb2bf",
	red: "#ef596f",
	orange: "#d19a66",
	yellow: "#e5c07b",
	green: "#89ca78",
	cyan: "#2bbac5",
	blue: "#61afef",
	purple: "#d55fde",
	white: "#abb2bf",
	black: "#282c34",
	gray: "#5c6370",
	highlight: "#e2be7d",
	comment: "#7f848e",
	text: "#5c6370",
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
