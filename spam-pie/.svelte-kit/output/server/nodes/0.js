

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.YcgIa6CY.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/vendor.e_0P48yf.js"];
export const stylesheets = [];
export const fonts = [];
