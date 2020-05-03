<template>
  <div id="landlord">
    <div
      class="message"
      style="opacity:0"
    ></div>
    <canvas
      id="live2d"
      width="280"
      height="250"
      class="live2d"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {}
  },
  mounted() {
    import('../live2d/js/message.js').then(module => {})
    import('../live2d/js/live2d.js').then(module => {
      loadlive2d(
        'live2d',
        'https://cdn.jsdelivr.net/gh/peinkid/live2d@1.1/static/live2d/model/xuexiaoban/model.json'
      )
    })
  }
}
</script>
<style>
</style>