<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="mx-auto w-full max-w-sm md:w-96">
    <div>
      <Logo class="h-8 w-auto fill-blue" />
      <h2 class="mt-6 text-3xl font-bold tracking-tight text-blue">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="mt-2 text-sm text-black-xlight">
        {{ subtitle }}.
      </p>
    </div>

    <div class="mt-8">
      <div class="mt-6">
        <form
          class="space-y-6"
          @submit.stop.prevent="emit('submit', $refs.input1.value)"
        >
          <div>
            <label
              v-if="label"
              for="email"
              class="block text-sm font-bold text-black-xlight"
              >{{ label }}</label
            >
            <div class="mt-1">
              <input
                ref="input1"
                :name="input.name"
                :type="input.type"
                :autocomplete="input.autocomplete"
                autofocus
                required
                :pattern="input.pattern"
                :placeholder="input.placeholder"
                class="block w-full appearance-none rounded-md border-2 border-green-dark bg-transparent px-3 py-2 text-black-light placeholder-black-xlight focus:border-green focus:outline-none focus:ring-green"
              />
            </div>
            <p v-if="error" class="mt-2 text-sm text-pinkDark">
              {{ error }}
            </p>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md border border-none bg-black px-4 py-4 text-yellow-dark hover:shadow-md"
            >
              {{ cta }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'
import Logo from 'assets/images/svg/logo.svg'

const emit = defineEmits(['submit'])
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: undefined,
    required: false,
  },
  cta: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: undefined,
    required: false,
  },
  input: {
    type: Object as PropType<HTMLInputElement>,
    required: true,
  },
  error: {
    required: false,
    default: undefined,
  },
})
</script>
