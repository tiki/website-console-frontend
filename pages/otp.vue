<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <form-single-input
    title="Enter Code"
    subtitle="Passwords suck. We’ve emailed you a one-time use code. Enter it below."
    cta="Continue"
    label="Code"
    :input="input"
    @submit="onSubmit"
    :error="errorMessage"
  />
</template>

<script setup lang="ts">
import { Auth } from '~/plugins/account/auth'

const auth: Auth = useNuxtApp().$auth()

definePageMeta({
  layout: 'login-layout',
})

const input: HTMLInputElement = {
  name: 'email',
  type: 'text',
  placeholder: 'ABC123',
}

const errorMessage = ref<string>('')
const onSubmit = async (code: string) => {
  const success = await auth.redeemOtp(code)
  const attemptRoute = sessionStorage.getItem('attempt-route')
  if (success) navigateTo('/' + attemptRoute)
  else
    errorMessage.value =
      "That didn't work 🫠 —double check your email, or go back and request a new code."
}
</script>
