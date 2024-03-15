<template>
  <transition-group class="notify" tag="ul" name="notify-fade">
    <li v-for="notify in notifies" :key="notify.id" class="notify__item">
      <component :is="iconsType[notify.type]" class="notify__item__icon" />
      {{ notify.message }}
    </li>
  </transition-group>
</template>
<script lang="ts" setup>
import SuccessCircleIcon from "assets/icons/success-circle.svg";
import ErrorCircleIcon from "assets/icons/error-circle.svg";
import WarningCircleIcon from "assets/icons/warning-circle.svg";

const iconsType = {
  success: SuccessCircleIcon,
  error: ErrorCircleIcon,
  warning: WarningCircleIcon,
};

const notifies = computed(() => getNotifies().value);
</script>
<style lang="scss" scoped>
.notify {
  position: fixed;
  z-index: 9999;
  top: 10px;
  right: 10px;
  list-style: none;

  &__item {
    & + & {
      margin-top: 10px;
    }

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    background-color: #ffff;
    color: #111111;
    padding: 12px;
    width: 311px;
    min-height: 53px;
    border-radius: 8px;
    box-shadow: 0 0 5px #cccccc;

    &__icon {
      flex: 0 0 auto;
    }
  }
}
.notify-fade-move,
.notify-fade-enter-active,
.notify-fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease;
}

.notify-fade-enter-from,
.notify-fade-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
