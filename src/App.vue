<template>
  <div class="flex flex-col w-full h-full pb-16 bg-brand-black1">

    <header class="flex items-center justify-center py-10">
      <div class="flex flex-col w-4/5">
        <h1 class="text-4xl font-black text-brand-main">RocketEditor 🚀</h1>
        <p class="text-lg font-light text-white">O Photoshop feito pelo seu sobrinho.</p>
      </div>
    </header>

    <div class="flex justify-center">
      <div class="flex justify-between w-4/5">
        <toolbar class="w-2/6" />
        <image-viewer class="w-3/5 h-full" />
      </div>
    </div>

  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import ImageViewer from './components/ImageViewer.vue'

export default {
  components: { Toolbar, ImageViewer }
}
</script>
