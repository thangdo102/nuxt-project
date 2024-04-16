<script setup lang="ts">
type BtnType = "default" | "back" | "delete" | "close" | "compact";
type BtnColor =
  | "white"
  | "black"
  | "unbordered"
  | "red"
  | "blue"
  | "red-bg"
  | "blue-bg"
  | "black-blue"
  | "white-blue";
const props = withDefaults(
  defineProps<{
    text?: string;
    color?: BtnColor;
    type?: BtnType;
    icon?: string;
    circle?: boolean;
    loading?: boolean;
    active?: boolean;
    width?: string;
    disabled?: boolean;
    readonly?: boolean;
    postIcon?: string;
    tooltip?: string;
  }>(),
  {
    text: "",
    color: "white",
    type: "default",
    icon: "",
    circle: false,
    loading: false,
    active: false,
    disabled: false,
    postIcon: "",
  }
);

const loadingColor = computed(() => {
  if (props.type) {
    return "white";
  } else if (props.color === "white") {
    return "black";
  } else if (props.color === "black") {
    return "white";
  }
});

const emits = defineEmits<{
  (e: "click");
}>();
const onClick = (e) => {
  if (!props.loading && !props.disabled) {
    emits("click");
  }
};
</script>
<template>
  <div
    class="the-button"
    :class="{
      [`-${color}`]: !!color,
      [`-${type}`]: !!type,
      '-circle': circle,
      '-loading': loading,
      '-active': active,
      '-stack': icon && text && circle,
      '-disabled': disabled,
      '-readonly': readonly,
    }"
    :style="
      circle ? `max-width: ${width}; height:${width};` : `max-width: ${width}`
    "
    @click.stop="onClick"
  >
    <v-tooltip
      v-if="tooltip"
      class="c-label-tooltip"
      activator="parent"
      location="bottom"
    >
      {{ tooltip }}
    </v-tooltip>
    <v-progress-circular
      v-if="loading"
      indeterminate
      :color="loadingColor"
      :size="30"
      :width="6"
    />
    <template v-else>
      <p v-if="text" class="text">{{ text }}</p>
    </template>
    <slot />
    <v-icon v-if="postIcon">{{ postIcon }}</v-icon>
  </div>
</template>
<style lang="scss" scoped>
.the-button {
  font-weight: bold;
  letter-spacing: 0;
  border-radius: 50px;
  height: $height-btn;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 5px;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: 0.3s;
  white-space: nowrap;
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    top: 0;
    width: 0;
    z-index: -1;
    transform: translate(-50%, 0);
    transition: 0.3s;
  }
  @include mq-up(md) {
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
  &:active {
    transform: scale(0.92);
    @include mq-up(md) {
      &:before {
        width: 100%;
      }
    }
  }
  &.-disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
  }
  .v-icon {
    font-size: 1.5em;
  }
  &.-circle {
    width: $height-btn;
    padding: 0;
    flex: 0 0 $height-btn;
    &.-stack {
      overflow: visible;
      gap: 0;
      &:before {
        display: none;
      }
      .v-icon {
        color: $white;
        transition: 0.3s;
        & ~ p.text {
          font-size: 12px;
          font-weight: bold;
          width: 0;
          transition: none;
          opacity: 0;
          pointer-events: none;
        }
      }
      &:hover,
      &.-active {
        width: auto;
        padding: 0 10px;
        gap: 5px;

        .v-icon {
          color: $white;
          & ~ p.text {
            color: $white;
            width: auto;
            opacity: 1;
          }
        }
      }
    }
  }

  // color variation
  &.-white {
    border: 1px solid $lightgrey;
    background-color: $light;
    &:not(.-loading, .-disabled) {
      &:before {
        background-color: $black;
      }
      @include mq-up(md) {
        &:hover {
          color: $white;
        }
      }
    }
  }
  &.-unbordered {
    &:hover {
      background-color: $smoke;
      &:before {
        width: 0;
      }
    }
    &.-active {
      color: $white;
      @include mq-up(md) {
        &:before {
          width: 100%;
          background-color: $black;
        }
      }
      &:hover {
        &:before {
          background-color: $dark;
        }
      }
    }
  }
  &.-black {
    border: 1px solid $black;
    background-color: $black;
    color: $white;
    &:not(.-loading, .-disabled) {
      &:before {
        background-color: $white;
      }
      @include mq-up(md) {
        &:hover {
          color: $black;
        }
      }
    }
  }
  &.-red-bg {
    border: 1px solid $red;
    background-color: $red;
    color: $white;
    &:not(.-loading, .-disabled) {
      &:before {
        background-color: $white;
      }
      &:hover {
        color: $red;
      }
    }
  }
  &.-blue-bg {
    border: 1px solid $blue;
    background-color: $blue;
    color: $white;
    &:not(.-loading, .-disabled) {
      &:before {
        background-color: $black;
      }
      &:hover {
        color: $white;
      }
    }
  }
  &.-black-blue {
    border: 1px solid $black;
    background-color: $black;
    color: $white;
    &:not(.-loading, .-disabled) {
      &:before {
        background-color: $blue;
      }
      @include mq-up(md) {
        &:hover {
          color: $white;
        }
      }
    }
  }
  &.-white-blue {
    border: 1px solid $black;
    background-color: $white;
    color: $black;
    &:not(.-loading, .-disabled) {
      &:before {
        background-color: $blue;
      }
      @include mq-up(md) {
        &:hover {
          color: $white;
        }
      }
    }
  }
  &.-red {
    color: $red;
    &:hover {
      background-color: mix($red, $white, 10%);
    }
  }
  &.-blue {
    color: $blue;
    &:hover {
      background-color: mix($blue, $white, 10%);
    }
  }

  // type variation
  &.-back,
  &.-delete,
  &.-close {
    width: $height-btn;
    background-color: $black;
    color: $white;
    padding: 0;
    font-size: 26px;
    overflow: visible;
    flex: 0 0 $height-btn;

    .v-icon {
      transition: transform 0.3s;
    }
    &:before {
      display: none;
    }
    .after-text {
      position: absolute;
      color: $black;
      font-size: 14px;
      left: 100%;
      opacity: 0;
      transition: 0.3s;
    }
    &:hover {
      .after-text {
        left: calc(100% + 5px);
        opacity: 1;
      }
    }
  }
  &.-back {
    &:hover {
      .v-icon {
        transform: translate(-5px, 0);
      }
    }
  }
  &.-close {
    .v-icon {
      font-size: 24px;
    }
    .after-text {
      left: auto;
      right: 100%;
    }

    &:hover {
      .v-icon {
        transform: scale(1.2);
      }
      &:after {
        left: auto;
        right: calc(100% + 5px);
      }
    }
  }
  &.-delete {
    .v-icon {
      font-size: 24px;
    }
    .after-text {
      color: $red;
      left: auto;
      right: 100%;
    }
    &:not(.-loading) {
      &:hover {
        background-color: $red;
        border-color: $red;
        &:after {
          left: auto;
          right: calc(100% + 5px);
        }

        .v-icon {
          transform: scale(1.2);
        }
      }
    }
  }
  &.-compact {
    height: auto;
    padding: 0 5px;
  }
  &.-readonly {
    pointer-events: none;
  }
  &.pc-full {
    @include mq-up(md) {
      width: 100%;
    }
  }
}
</style>
