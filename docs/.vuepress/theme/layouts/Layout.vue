<template>
  <div>
    <ParentLayout>
    </ParentLayout>
    <Test />
    <!-- <Audio /> -->
    <component
      ref="audioData"
      v-if="audioCom"
      :is="audioCom"
    ></component>
  </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Test from '../components/Test.vue'
// import Audio from '../components/Audio.vue'
export default {
  name: 'Layout',
  components: {
    ParentLayout,
    Test
  },
  data() {
    return {
      audioCom: null
    }
  },
  mounted() {
    import('../components/Audio.vue').then(module => {
      this.audioCom = module.default
    })
  }
}
</script>