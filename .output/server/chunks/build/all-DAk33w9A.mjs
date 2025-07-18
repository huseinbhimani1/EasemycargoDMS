import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { ref, computed, useSSRContext } from 'vue';

const pageSize = 5;
const _sfc_main = {
  __name: "all",
  __ssrInlineRender: true,
  setup(__props) {
    const docs = ref([]);
    const page = ref(1);
    const search = ref("");
    const filterLayer = ref("");
    const filteredDocs = computed(
      () => docs.value.filter(
        (d) => d.name.toLowerCase().includes(search.value.toLowerCase()) && (!filterLayer.value || d.layer === filterLayer.value)
      )
    );
    const start = computed(() => (page.value - 1) * pageSize);
    const end = computed(() => start.value + pageSize);
    const paginatedDocs = computed(() => filteredDocs.value.slice(start.value, end.value));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2>All Uploaded Documents</h2><input${ssrRenderAttr("value", search.value)} placeholder="Search by name..." style="${ssrRenderStyle({ "margin-bottom": "1em", "padding": "6px" })}"><select style="${ssrRenderStyle({ "margin-left": "10px" })}"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filterLayer.value) ? ssrLooseContain(filterLayer.value, "") : ssrLooseEqual(filterLayer.value, "")) ? " selected" : ""}>All Layers</option><option value="platform"${ssrIncludeBooleanAttr(Array.isArray(filterLayer.value) ? ssrLooseContain(filterLayer.value, "platform") : ssrLooseEqual(filterLayer.value, "platform")) ? " selected" : ""}>Platform</option><option value="organization"${ssrIncludeBooleanAttr(Array.isArray(filterLayer.value) ? ssrLooseContain(filterLayer.value, "organization") : ssrLooseEqual(filterLayer.value, "organization")) ? " selected" : ""}>Organization</option><option value="user"${ssrIncludeBooleanAttr(Array.isArray(filterLayer.value) ? ssrLooseContain(filterLayer.value, "user") : ssrLooseEqual(filterLayer.value, "user")) ? " selected" : ""}>User</option></select><table border="1" cellspacing="0" cellpadding="6"><thead><tr><th>Document Name</th><th>Layer</th><th>Required</th><th>Uploaded At</th><th>Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(paginatedDocs.value, (doc) => {
        _push(`<tr><td>${ssrInterpolate(doc.name)}</td><td>${ssrInterpolate(doc.layer)}</td><td>${ssrInterpolate(doc.required ? "Yes" : "No")}</td><td>${ssrInterpolate(new Date(doc.uploadedAt).toLocaleString())}</td><td><a${ssrRenderAttr("href", doc.fileUrl)} target="_blank">\u{1F50D} View</a> | <a${ssrRenderAttr("href", doc.fileUrl)} download>\u2B07\uFE0F Download</a> | <button>\u{1F5D1}\uFE0F Delete</button></td></tr>`);
      });
      _push(`<!--]--></tbody></table><div style="${ssrRenderStyle({ "margin-top": "1em" })}"><button${ssrIncludeBooleanAttr(page.value === 1) ? " disabled" : ""}>Prev</button> Page ${ssrInterpolate(page.value)} <button${ssrIncludeBooleanAttr(end.value >= filteredDocs.value.length) ? " disabled" : ""}>Next</button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/all.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=all-DAk33w9A.mjs.map
