
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ARCH: string;
	export const min_ver: string;
	export const GCONV_PATH: string;
	export const USER: string;
	export const CROS_USER_ID_HASH: string;
	export const npm_config_user_agent: string;
	export const MESA_LOADER_DRIVER_OVERRIDE: string;
	export const SOMMELIER_DIRECT_SCALE: string;
	export const npm_node_execpath: string;
	export const XDG_CACHE_HOME: string;
	export const SHLVL: string;
	export const LD_LIBRARY_PATH: string;
	export const npm_config_noproxy: string;
	export const LESS: string;
	export const HOME: string;
	export const LIB_SUFFIX: string;
	export const OLDPWD: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const NVM_INC: string;
	export const GS_FONTPATH: string;
	export const PAGER: string;
	export const MESA_SHADER_CACHE_DISABLE: string;
	export const CONFIG_PROTECT_MASK: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const DATA_DIR: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const npm_config_metrics_registry: string;
	export const WAYLAND_DISPLAY: string;
	export const TMPDIR: string;
	export const INFOPATH: string;
	export const LOGNAME: string;
	export const PORTAGE_CONFIGROOT: string;
	export const SOMMELIER_DRM_DEVICE: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const CLUTTER_BACKEND: string;
	export const COLUMNS: string;
	export const MOLD_JOBS: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const LSB_RELEASE: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const CREW_SYSCONFDIR: string;
	export const CREW_LIB_PREFIX: string;
	export const LADSPA_PATH: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const DONT_CRASH_ON_ASSERT: string;
	export const DBUS_FATAL_WARNINGS: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const CREW_PREFIX: string;
	export const version_good: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const SOMMELIER_VM_IDENTIFIER: string;
	export const XDG_DATA_HOME: string;
	export const XDG_CONFIG_HOME: string;
	export const LIBVA_DRIVER_NAME: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const SDKMAN_DIR: string;
	export const SDKMAN_PLATFORM: string;
	export const npm_lifecycle_script: string;
	export const XML_CATALOG_FILES: string;
	export const DBUS_SESSION_BUS_PID: string;
	export const DBUS_SYSTEM_BUS_ADDRESS: string;
	export const SHELL: string;
	export const maj_ver: string;
	export const GDK_PIXBUF_MODULEDIR: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const milestone: string;
	export const LSB_RELEASE_TIME: string;
	export const GDK_PIXBUF_MODULE_FILE: string;
	export const MESA_GLSL_CACHE_DISABLE: string;
	export const SOMMELIER_ACCELERATORS: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const JAVA_HOME: string;
	export const PWD: string;
	export const QT_QPA_PLATFORM: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_global_prefix: string;
	export const LINES: string;
	export const npm_command: string;
	export const MANPATH: string;
	export const CHROMEOS_SESSION_LOG_DIR: string;
	export const EDITOR: string;
	export const CHROME_LOG_FILE: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ARCH: string;
		min_ver: string;
		GCONV_PATH: string;
		USER: string;
		CROS_USER_ID_HASH: string;
		npm_config_user_agent: string;
		MESA_LOADER_DRIVER_OVERRIDE: string;
		SOMMELIER_DIRECT_SCALE: string;
		npm_node_execpath: string;
		XDG_CACHE_HOME: string;
		SHLVL: string;
		LD_LIBRARY_PATH: string;
		npm_config_noproxy: string;
		LESS: string;
		HOME: string;
		LIB_SUFFIX: string;
		OLDPWD: string;
		NVM_BIN: string;
		npm_package_json: string;
		NVM_INC: string;
		GS_FONTPATH: string;
		PAGER: string;
		MESA_SHADER_CACHE_DISABLE: string;
		CONFIG_PROTECT_MASK: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		DATA_DIR: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		COLOR: string;
		NVM_DIR: string;
		npm_config_metrics_registry: string;
		WAYLAND_DISPLAY: string;
		TMPDIR: string;
		INFOPATH: string;
		LOGNAME: string;
		PORTAGE_CONFIGROOT: string;
		SOMMELIER_DRM_DEVICE: string;
		SDKMAN_CANDIDATES_API: string;
		_: string;
		npm_config_prefix: string;
		CLUTTER_BACKEND: string;
		COLUMNS: string;
		MOLD_JOBS: string;
		TERM: string;
		npm_config_cache: string;
		npm_config_node_gyp: string;
		PATH: string;
		LSB_RELEASE: string;
		SDKMAN_CANDIDATES_DIR: string;
		CREW_SYSCONFDIR: string;
		CREW_LIB_PREFIX: string;
		LADSPA_PATH: string;
		NODE: string;
		npm_package_name: string;
		DONT_CRASH_ON_ASSERT: string;
		DBUS_FATAL_WARNINGS: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		CREW_PREFIX: string;
		version_good: string;
		DISPLAY: string;
		LANG: string;
		SOMMELIER_VM_IDENTIFIER: string;
		XDG_DATA_HOME: string;
		XDG_CONFIG_HOME: string;
		LIBVA_DRIVER_NAME: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		SDKMAN_DIR: string;
		SDKMAN_PLATFORM: string;
		npm_lifecycle_script: string;
		XML_CATALOG_FILES: string;
		DBUS_SESSION_BUS_PID: string;
		DBUS_SYSTEM_BUS_ADDRESS: string;
		SHELL: string;
		maj_ver: string;
		GDK_PIXBUF_MODULEDIR: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		milestone: string;
		LSB_RELEASE_TIME: string;
		GDK_PIXBUF_MODULE_FILE: string;
		MESA_GLSL_CACHE_DISABLE: string;
		SOMMELIER_ACCELERATORS: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		JAVA_HOME: string;
		PWD: string;
		QT_QPA_PLATFORM: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		npm_config_global_prefix: string;
		LINES: string;
		npm_command: string;
		MANPATH: string;
		CHROMEOS_SESSION_LOG_DIR: string;
		EDITOR: string;
		CHROME_LOG_FILE: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
