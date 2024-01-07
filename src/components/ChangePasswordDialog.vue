<script setup lang="ts">
  import DialogComponent from '@/components/DialogComponent.vue';
  import IconSave from '@/components/icons/IconSave.vue';
  import { saveChangesPassword, validatePassword } from '@/utils/firestore';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const props = defineProps<{
    open: boolean,
    gameId: string,
  }>()

  const emit = defineEmits<{
    (e: 'close'): void
    (e: 'changed'): void
  }>()

  const router = useRouter()
  const maxWidth = '800px'

  const currentPassword = ref('')
  const newPassword = ref('')
  const confirmNewPassword = ref('')
  const currentPasswordError = ref(false)
  const currentPasswordIncorrect = ref(false)
  const newPasswordError = ref(false)
  const confirmNewPasswordError = ref(false)
  const samePasswordError = ref(false)

  const close = () => emit('close')
  const save = async () => {
    // Some stupid validation
    currentPasswordError.value = currentPassword.value.length < 3
    const valid = await validatePassword(props.gameId, currentPassword.value)
    currentPasswordIncorrect.value = !valid
    newPasswordError.value = newPassword.value.length < 3
    confirmNewPasswordError.value = confirmNewPassword.value.length < 3
    samePasswordError.value = newPassword.value !== confirmNewPassword.value
    if (currentPasswordError.value
      || newPasswordError.value
      || confirmNewPasswordError.value
      || samePasswordError.value
      || currentPasswordIncorrect.value
    ) return

    const saved = await saveChangesPassword(props.gameId, currentPassword.value, newPassword.value)
    if (saved) {
      emit('changed')
      close()
    } else {
      router.push('/error?code=2288-' + props.gameId)
    }
  }
</script>

<template>
  <DialogComponent :open="open" @close="close" :maxWidth="maxWidth">
    <template #header>
      <h2>Change password</h2>
    </template>
    <template #content>
      <form>

        <div class="input-container">
          <label for="password">Old password</label>
          <input
            type="password"
            id="password"
            v-model="currentPassword"
            placeholder="***"
            :class="{ 'error': currentPasswordError }"
            @keyup.enter="save"
          />
          <p v-show="currentPasswordError" class="error">
            The password must be at least 3 characters long. And, yes, "123" is a valid password.
          </p>
          <p v-show="currentPasswordIncorrect" class="error">
            This is not the currect password :/ .
          </p>
        </div>

        <div class="input-container">
          <label for="new-password">New password</label>
          <input
            type="password"
            id="new-password"
            v-model="newPassword"
            placeholder="***"
            :class="{ 'error': newPasswordError }"
            @keyup.enter="save"
          />
          <p v-show="currentPasswordError" class="error">
            The password must be at least 3 characters long.
          </p>
        </div>

        <div class="input-container">
          <label for="confirm-new-password">Confirm new password</label>
          <input
            type="password"
            id="confirm-new-password"
            v-model="confirmNewPassword"
            placeholder="***"
            :class="{ 'error': confirmNewPasswordError || samePasswordError }"
            @keyup.enter="save"
          />
          <p v-show="confirmNewPasswordError" class="error">
            The password must be at least 3 characters long.
          </p>
          <p v-show="!confirmNewPasswordError && samePasswordError" class="error">
            The passwords must match.
          </p>
        </div>

      </form>
    </template>
    <template #footer>
      <button class="primary" @click="save">
        <IconSave class="icon" color="var(--color-foreground)" />
        Save
      </button>
    </template>
  </DialogComponent>
</template>

<style scoped>
  p {
    padding: var(--gap-small) var(--gap-normal);
    width: 100%;
    color: var(--color-foreground-dark);
  }
  button + button {
    margin-left: var(--gap-small);
  }
</style>
