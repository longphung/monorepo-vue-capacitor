<script setup lang="ts">
import { PocButton, PocSwitch } from '@components'
</script>

<template>
  <div class="container max-w-xs mx-auto gap-4 flex flex-col">
    <h1 class="text-3xl font-bold underline">Theme Switch</h1>
    <poc-switch>Remember me</poc-switch>
    <h1 class="text-3xl font-bold underline">Buttons</h1>
    <div class="container flex gap-4 w-auto flex-col">
      <poc-button class="btn">Button</poc-button>
      <poc-button class="btn btn-neutral">Neutral</poc-button>
      <poc-button class="btn btn-primary">Primary</poc-button>
      <poc-button class="btn btn-secondary">Secondary</poc-button>
      <poc-button class="btn btn-accent">Accent</poc-button>
      <poc-button class="btn btn-ghost">Ghost</poc-button>
      <poc-button class="btn btn-link">Link</poc-button>
    </div>
  </div>
</template>
