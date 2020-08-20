<template>
  <div class="slidecontainer">
    <input
      type="range"
      min="1"
      max="100"
      @input="handleRangeChange"
      :value="value"
      class="slider"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Number, default: 0 }
  },
  setup(_, { emit }) {
    const handleRangeChange = (event) => {
      emit('update', event.target.value)
    };

    return { handleRangeChange };
  }
}
</script>

<style scoped>
.slidecontainer {
  width: 100%;
}

.slider {
  appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 1;
  transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
}
</style>