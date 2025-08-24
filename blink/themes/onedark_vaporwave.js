const palette = {
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
