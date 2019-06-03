<template>
  <div class="home">
    <vHeader></vHeader>
    <vSidebar></vSidebar>
  </div>
</template>

<script>
  import vHeader from './Header'
  import vSidebar from './Sidebar'

  export default {
    name: "Home",
    components: {
      vHeader, vSidebar
    }
  }
</script>

<style scoped>

</style>
