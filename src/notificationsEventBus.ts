import { ref } from "vue";
import type { Notification } from "@/models/notification";

const bus = ref<Notification[]>([]);

export default function useNotificationsEventBus(){

  function emit(notification: Notification) {
    bus.value.push(notification);
  }

  function clear() {
    bus.value = [];
  }

  function removeHandledNotifications(nots: Notification[]) {
    bus.value = bus.value.filter(n => !nots.includes(n));
  }

  return {
    emit,
    bus,
    clear,
    removeHandledNotifications,
  }
}
