<template>
  <div>
    <div class="bg-cover bg-aqua">
      <div class="container px-6 py-20 mx-auto">
        <h1 class="text-6xl font-bold text-white">Aqua</h1>
        <h2 class="mt-6 text-2xl font-bold text-white">For Tailwind CSS</h2>
      </div>
    </div>
    <section
      class="container grid grid-cols-1 gap-16 px-6 py-12 mx-auto md:grid-cols-6"
    >
      <div class="col-span-2">
        <ul
          class="sticky px-8 py-6 space-y-1 text-lg border rounded docs-nav bg-lily border-cool-gray-300"
        >
          <li
            v-for="link of page.toc"
            :key="link.id"
            :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
          >
            <NuxtLink
              class="text-gray-700 hover:text-blue-500"
              :to="`#${link.id}`"
              >{{ link.text }}</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="col-span-4">
        <nuxt-content class="prose prose-xl" :document="page" />
      </div>
    </section>
    <Foot />
  </div>
</template>

<script>
import 'assets/css/aqua.css'
import 'prism-themes/themes/prism-vs.css'
import Example from '@/components/example'
import Foot from '@/components/Foot'
export default {
  components: {
    Example, // eslint-disable-line
    Foot,
  },
  async asyncData({ $content }) {
    const page = await $content('aqua').fetch()
    return {
      page,
    }
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
.prose pre code::after {
  content: none !important;
}
.prose pre code {
  font-size: 1rem;
}
.docs-nav {
  top: 1.5rem;
}
.bg-aqua {
  background-image: url('/aqua-bg.png');
}
</style>
