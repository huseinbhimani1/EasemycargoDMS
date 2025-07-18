import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';

const _sfc_main = {
  __name: "config",
  __ssrInlineRender: true,
  setup(__props) {
    const config = ref({ platform: [], organization: [], user: [] });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2>Configure Document Requirements</h2><form><!--[-->`);
      ssrRenderList(["platform", "organization", "user"], (layer) => {
        _push(`<div><h3>${ssrInterpolate(layer)}</h3><!--[-->`);
        ssrRenderList(config.value[layer], (doc, i) => {
          _push(`<div><input${ssrRenderAttr("value", doc.name)} placeholder="Document Name"><label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(doc.required) ? ssrLooseContain(doc.required, null) : doc.required) ? " checked" : ""}> Required</label></div>`);
        });
        _push(`<!--]--><button>Add ${ssrInterpolate(layer)} doc</button></div>`);
      });
      _push(`<!--]--><button type="submit">Save</button></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/config.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=config-CdA-63CW.mjs.map
