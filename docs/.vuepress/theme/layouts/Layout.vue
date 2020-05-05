<template>
  <div>
    <ParentLayout>
    </ParentLayout>
    <Test />
    <Audio />
  </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Test from '../components/Test.vue'
import Audio from '../components/Audio.vue'
export default {
  name: 'Layout',
  components: {
    ParentLayout,
    Test,
    Audio
  }
}
</script>