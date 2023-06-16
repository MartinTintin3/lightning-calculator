export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.6164a068.js","app":"_app/immutable/entry/app.4f3c173d.js","imports":["_app/immutable/entry/start.6164a068.js","_app/immutable/chunks/index.6dba6488.js","_app/immutable/chunks/singletons.d1470d0f.js","_app/immutable/entry/app.4f3c173d.js","_app/immutable/chunks/index.6dba6488.js"],"stylesheets":[],"fonts":[]},
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
