<template>
  <div>
    <ParentLayout>
    </ParentLayout>
    <Test />
  </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Test from '../components/Test.vue'
export default {
  name: 'Layout',
  components: {
    ParentLayout,
    Test
  }
}
</script>