<script setup lang="ts">
  import DialogComponent from '@/components/DialogComponent.vue';
  import { validatePassword } from '@/utils/firestore';
  import { ref, watch } from 'vue';

  const props = defineProps<{
    open: boolean,
    gameId: string,
  }>()

  const emit = defineEmits<{
    (e: 'close'): void
    (e: 'validated'): void
  }>()

  const close = () => emit('close')

  const password = ref('')
  const error = ref(false)
  const validating = ref(false)
  const passwordInput = ref<HTMLInputElement | null>(null)

  const validate = async () => {
    error.value = false
    const res = await validatePassword(props.gameId, password.value)
    if (res) {
      password.value = ''
      error.value = false
      emit('validated')
      emit('close')
    } else {
      error.value = true
    }
  }

  // listen to open changes
  watch(() => props.open, (open) => {
    if (open) {
      password.value = ''
      error.value = false
      // Using setTimeout cause the input is not yet ref'd for some reason
      // This can fail, idc, it's just the autofocus
      setTimeout(() => {
        passwordInput.value?.focus()
      }, 200)
    }
  })
</script>

<template>
  <DialogComponent :open="open" @close="close">
    <template #header>
      <h2>Enter password</h2>
    </template>
    <template #content>
      <input
        :class="{ error: error }"
        v-model="password"
        type="password"
        placeholder="secret-123"
        :disabled="validating"
        @keyup.enter="validate"
        ref="passwordInput"
      />
      <p v-if="error" class="error">Password is incorrect</p>
    </template>
    <template #footer>
      <button class="primary" @click="validate" :disabled="validating">
        Proceed
      </button>
    </template>
  </DialogComponent>
</template>

<style scoped>
  input {
    padding: var(--gap-small) var(--gap-normal);
    background: var(--color-background-lighter);
    border-radius: var(--border-radius-normal);
  }
  p.error {
    padding: var(--gap-small) var(--gap-normal) 0;
  }
</style>
