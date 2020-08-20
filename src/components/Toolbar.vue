<template>
  <div class="py-5 rounded-sm bg-brand-black2">

    <div class="p-5">
      <h4 class="text-xl font-bold text-white">Saturação</h4>
      <p class="-mt-1 text-sm text-white">O quão viva a imagem será</p>
      <custom-range :value="state.fx.saturate" @update="setSaturate" class="mt-4" />
    </div>

    <div class="p-5">
      <h4 class="text-xl font-bold text-white">Desfoque</h4>
      <p class="-mt-1 text-sm text-white">O quão nítida a imagem será</p>
      <custom-range :value="state.fx.blur" @update="setBlur" class="mt-4" />
    </div>

    <div class="p-5">
      <h4 class="text-xl font-bold text-white">Brilho</h4>
      <p class="-mt-1 text-sm text-white">O quão clara a imagem será</p>
      <custom-range :value="state.fx.brightness" @update="setBrightness" class="mt-4" />
    </div>

    <div class="p-5">
      <h4 class="text-xl font-bold text-white">P&B</h4>
      <p class="-mt-1 text-sm text-white">O quão preto/branco a imagem será</p>
      <custom-range :value="state.fx.grayscale" @update="setGrayscale" class="mt-4" />
    </div>

    <div class="p-5">
      <h4 class="text-xl font-bold text-white">Contraste</h4>
      <p class="-mt-1 text-sm text-white">O quão definido das cores da imagem serão</p>
      <custom-range :value="state.fx.contrast" @update="setContrast" class="mt-4" />
    </div>

    <div class="p-5">
      <button @click="download" class="w-full py-4 text-2xl font-medium text-white uppercase rounded-sm bg-brand-main">
        baixar imagem
      </button>
    </div>
  </div>
</template> 

<script>
import CustomRange from './CustomRange.vue'
import {
  setGrayscale,
  setBlur,
  setBrightness,
  setContrast,
  setSaturate,
  useStore
} from '../store'

import domToImage from 'dom-to-image';

export default {
  components: {
    CustomRange
  },
  setup() {
    const state = useStore();

    const download = async () => {
      const dataUrl = await domToImage.toPng(state.refImage);
      
      const link = document.createElement('a')
      link.download = 'my-image.png'
      link.href = dataUrl
      link.click()
    };

    return {
      state,
      setGrayscale,
      setBlur,
      setBrightness,
      setContrast,
      setSaturate,
      download
    }
  }
}
</script>

<style>

</style>