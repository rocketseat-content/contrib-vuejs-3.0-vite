import { reactive, readonly } from 'vue'

const store = reactive({
  fx: {
    grayscale: 0,
    blur: 0,
    saturate: 1,
    brightness: 100,
    contrast: 100
  },
  refImage: null
})

export const useStore = () => readonly(store);

export const setGrayscale = value => {
  store.fx.grayscale = Number(value)
}

export const setBlur = value => {
  store.fx.blur = Number(value)
}

export const setSaturate = value => {
  store.fx.saturate = Number(value)
}

export const setBrightness = value => {
  store.fx.brightness = Number(value)
}

export const setContrast = value => {
  store.fx.contrast = Number(value)
}

export const setRefImage = value => {
  store.refImage = value
}
