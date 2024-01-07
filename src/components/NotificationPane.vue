<script setup lang="ts">
  import useNotificationsEventBus from '@/notificationsEventBus';
  import { onMounted, ref, watch } from 'vue';
  import { NotificationLevel, type Notification } from '@/models/notification';
  import IconPlus from '@/components/icons/IconPlus.vue';
  import IconWarning from '@/components/icons/IconWarning.vue';
  import IconError from '@/components/icons/IconError.vue';
  import IconInfo from '@/components/icons/IconInfo.vue';
  import IconSuccess from '@/components/icons/IconSuccess.vue';

  const notificationsEventBus = useNotificationsEventBus()

  const notifications = ref<Notification[]>([])

  onMounted(() => {
    watch(notificationsEventBus.bus, (nots: Notification[]) => {
      for (const n of nots) {
        if (notifications.value.indexOf(n) !== -1) continue
        notifications.value.push(n)
        setTimeout(() => {
          removeNotification(n.id)
        }, n.timeout)
      }
      if (nots.length > 0) {
        notificationsEventBus.removeHandledNotifications(nots)
      }
    }, { deep: true })
  })

  const removeNotification = (id: string) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index != -1) notifications.value.splice(index, 1)
  }
</script>

<template>
  <div class="notification-container">
    <TransitionGroup name="notif">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="notification"
        :class="notification.level"
      > 
        <IconPlus class="cross" color="#fff" @click="removeNotification(notification.id)"/>

        <IconError
          v-if="notification.level === NotificationLevel.ERROR"
          class="notification-icon"
          color="var(--color-error-red-dark)"
        />
        <IconWarning
          v-else-if="notification.level === NotificationLevel.WARNING"
          class="notification-icon"
          color="var(--color-warning-orange-dark)"
        />
        <IconSuccess
          v-else-if="notification.level === NotificationLevel.SUCCESS"
          class="notification-icon"
          color="var(--color-success-green-dark)"
        />
        <IconInfo
          v-else-if="notification.level === NotificationLevel.INFO"
          class="notification-icon"
          color="var(--color-info-blue-dark)"
        />

        <p>
          {{ notification.message }}
        </p>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
  .notification-container {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    padding: var(--gap-normal);
    min-width: min(100%, 800px);
    max-width: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-small);
  }
  .notification {
    width: 100%;
    transition: all 200ms ease-in-out;
    padding: var(--gap-normal);
    padding-right: calc(var(--gap-small) + var(--gap-large));
    border-radius: var(--border-radius-normal);
    position: relative;

    display: flex;
    align-items: center;
    gap: var(--gap-normal);
  }
  .notification.INFO {
    background: var(--color-info-blue-light);
    color: var(--color-info-blue-dark);
    border: 1px solid var(--color-info-blue-dark);
  }
  .notification.SUCCESS {
    background: var(--color-success-green-light);
    color: var(--color-success-green-dark);
    border: 1px solid var(--color-success-green-dark);
  }
  .notification.WARNING {
    background: var(--color-warning-orange-light);
    color: var(--color-warning-orange-dark);
    border: 1px solid var(--color-warning-orange-dark);
  }
  .notification.ERROR {
    background: var(--color-error-red-light);
    color: var(--color-error-red-dark);
    border: 1px solid var(--color-error-red-dark);
  }
  .notification-icon {
    max-width: var(--font-size-huge);
  }

  .cross {
    position: absolute;
    top: var(--gap-small);
    right: var(--gap-small);
    transform: rotate(45deg);
    height: calc(2*var(--gap-tiny) + var(--font-size-huge));
    padding: var(--gap-tiny);
    border-radius: 50%;
  }
  .cross:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
  }

  /* Animation */
  .notif-enter-from {
    opacity: 0;
    transform: translateY(-100%);
  }
  .notif-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
  .notif-leave-active {
    position: absolute;
  }
</style>
