import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';

const _sfc_main = {
  __name: "DocumentUploader",
  __ssrInlineRender: true,
  props: { layer: String },
  setup(__props) {
    const config = ref({});
    const uploaded = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2>${ssrInterpolate(__props.layer.toUpperCase())} Document Upload</h2>`);
      if (config.value[__props.layer]) {
        _push(`<div><!--[-->`);
        ssrRenderList(config.value[__props.layer], (doc) => {
          _push(`<div style="${ssrRenderStyle({ "margin-bottom": "1em" })}"><label>${ssrInterpolate(doc.name)} `);
          if (doc.required) {
            _push(`<span>*</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</label><input type="file">`);
          if (uploaded.value[doc.name]) {
            _push(`<span>\u2705 Uploaded</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DocumentUploader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DocumentUploader-BuG22kPc.mjs.map
