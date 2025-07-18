import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const layer = ref("platform");
    const result = ref(null);
    const checked = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Login Check</h1><label>Layer: <select><option value="platform"${ssrIncludeBooleanAttr(Array.isArray(layer.value) ? ssrLooseContain(layer.value, "platform") : ssrLooseEqual(layer.value, "platform")) ? " selected" : ""}>Platform</option><option value="organization"${ssrIncludeBooleanAttr(Array.isArray(layer.value) ? ssrLooseContain(layer.value, "organization") : ssrLooseEqual(layer.value, "organization")) ? " selected" : ""}>Organization</option><option value="user"${ssrIncludeBooleanAttr(Array.isArray(layer.value) ? ssrLooseContain(layer.value, "user") : ssrLooseEqual(layer.value, "user")) ? " selected" : ""}>User</option></select></label><button>Validate</button>`);
      if (checked.value) {
        _push(`<div>`);
        if ((_a = result.value) == null ? void 0 : _a.isComplete) {
          _push(`<p style="${ssrRenderStyle({ "color": "green" })}">✅ All required documents are uploaded</p>`);
        } else {
          _push(`<div style="${ssrRenderStyle({ "color": "red" })}"> ❌ Missing Documents: <ul><!--[-->`);
          ssrRenderList(result.value.missing, (doc) => {
            _push(`<li>${ssrInterpolate(doc.name)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-Xp7ptOmB.js.map
