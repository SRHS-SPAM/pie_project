

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6CRqJUdY.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/legacy.DYqa7g_C.js","_app/immutable/chunks/vendor.e_0P48yf.js","_app/immutable/chunks/entry.Zo_h_yfy.js"];
export const stylesheets = [];
export const fonts = [];
