<template>
  <div>
    <h1>Login Check</h1>
    <label>Layer:
      <select v-model="layer">
        <option value="platform">Platform</option>
        <option value="organization">Organization</option>
        <option value="user">User</option>
      </select>
    </label>
    <button @click="checkDocs">Validate</button>

    <div v-if="checked">
      <p v-if="result?.isComplete" style="color: green;">✅ All required documents are uploaded</p>
      <div v-else style="color: red;">
        ❌ Missing Documents:
        <ul>
          <li v-for="doc in result.missing" :key="doc.name">{{ doc.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDocumentValidation } from '~/composables/useDocumentValidation'

const layer = ref('platform')
const result = ref(null)
const checked = ref(false)

async function checkDocs() {
  result.value = await useDocumentValidation(layer.value)
  checked.value = true
}
</script>
