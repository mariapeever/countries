import Global from "./Global"
import Light from "./Light"
import Dark from "./Dark"

export const LightTheme = {
	name: "Light",
	styles: {
		...Global,
		...Light
	}
}

export const DarkTheme = {
	name: "Dark",
	styles: {
		...Global,
		...Dark
	}
}

