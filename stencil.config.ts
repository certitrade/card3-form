// tslint:disable-next-line: no-implicit-dependencies
import { Config } from "@stencil/core"

export const config: Config = {
	namespace: "cardfunc-element",
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
		},
		{
			type: "www",
			serviceWorker: null, // disable service workers
			baseUrl: "/ui/element",
		},
	],
	devServer: {
		openBrowser: false,
	},
	nodeResolve: {
		browser: true,
	},
}
