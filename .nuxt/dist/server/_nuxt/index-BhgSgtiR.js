import { _ as __nuxt_component_0 } from "./nuxt-link-ByyZCuLx.js";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "C:/huseindata/bkptest/nuxt-dms-complete-full/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/huseindata/bkptest/nuxt-dms-complete-full/node_modules/hookable/dist/index.mjs";
import "C:/huseindata/bkptest/nuxt-dms-complete-full/node_modules/unctx/dist/index.mjs";
import "C:/huseindata/bkptest/nuxt-dms-complete-full/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/huseindata/bkptest/nuxt-dms-complete-full/node_modules/radix3/dist/index.mjs";
import "C:/huseindata/bkptest/nuxt-dms-complete-full/node_modules/defu/dist/defu.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/admin/config" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Configure Docs`);
      } else {
        return [
          createTextVNode("Configure Docs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/admin/all" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`View All Docs`);
      } else {
        return [
          createTextVNode("View All Docs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BhgSgtiR.js.map
