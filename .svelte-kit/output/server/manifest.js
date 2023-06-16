export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.c7bf8d0e.js","app":"_app/immutable/entry/app.b0f58f8b.js","imports":["_app/immutable/entry/start.c7bf8d0e.js","_app/immutable/chunks/index.6dba6488.js","_app/immutable/chunks/singletons.e52f2d73.js","_app/immutable/entry/app.b0f58f8b.js","_app/immutable/chunks/index.6dba6488.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
