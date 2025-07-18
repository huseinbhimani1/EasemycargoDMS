import { _ as _sfc_main$1 } from "./DocumentUploader-BuG22kPc.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/huseindata/bkptest/nuxt-dms-complete-full/node_modules/hookable/dist/index.mjs";
import "C:/huseindata/bkptest/nuxt-dms-complete-full/node_modules/unctx/dist/index.mjs";
import "C:/huseindata/bkptest/nuxt-dms-complete-full/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/huseindata/bkptest/nuxt-dms-complete-full/node_modules/radix3/dist/index.mjs";
import "C:/huseindata/bkptest/nuxt-dms-complete-full/node_modules/defu/dist/defu.mjs";
import "C:/huseindata/bkptest/nuxt-dms-complete-full/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DocumentUploader = _sfc_main$1;
  _push(ssrRenderComponent(_component_DocumentUploader, mergeProps({ layer: "user" }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const user = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  user as default
};
//# sourceMappingURL=user-Aesc6B2m.js.map
