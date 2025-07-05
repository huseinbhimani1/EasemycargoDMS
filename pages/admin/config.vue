
<template>
  <div>
    <h2>Configure Document Requirements</h2>
    <form @submit.prevent="saveConfig">
      <div v-for="layer in ['platform', 'organization', 'user']" :key="layer">
        <h3>{{ layer }}</h3>
        <div v-for="(doc, i) in config[layer]" :key="i">
          <input v-model="doc.name" placeholder="Document Name" />
          <label><input type="checkbox" v-model="doc.required" /> Required</label>
        </div>
        <button @click="addDoc(layer)">Add {{ layer }} doc</button>
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const config = ref({ platform: [], organization: [], user: [] })

onMounted(async () => {
  const res = await fetch('/api/docs-config')
  config.value = await res.json()
})

function addDoc(layer) {
  config.value[layer].push({ name: '', required: false })
}

async function saveConfig() {
  await fetch('/api/docs-config', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(config.value)
  })
  alert('Saved!')
}
</script>
