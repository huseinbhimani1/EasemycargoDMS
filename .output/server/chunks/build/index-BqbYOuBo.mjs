import { _ as __nuxt_component_0 } from './nuxt-link-ByyZCuLx.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>DMS Dashboard</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/platform" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Platform`);
      } else {
        return [
          createTextVNode("Platform")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/organization" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Organization`);
      } else {
        return [
          createTextVNode("Organization")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/user" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`User`);
      } else {
        return [
          createTextVNode("User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/admin" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Admin`);
      } else {
        return [
          createTextVNode("Admin")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BqbYOuBo.mjs.map
