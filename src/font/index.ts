import localFont from "next/font/local";

export const AeonikPro = localFont({
	src: [
		{
			path: "./AeonikProTRIAL-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./AeonikProTRIAL-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./AeonikProTRIAL-Bold.otf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-aeonik-pro",
});
