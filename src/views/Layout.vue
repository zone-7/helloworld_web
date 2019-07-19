<template>
  <div>
    <div>
      <top></top>
    </div>
    <div>
      <router-view :key="key" />
    </div>

  </div>

</template>
<script>
  import Top from '@/views/top'
  import Main from '@/views/main'
  import About from '@/views/about'
  export default {
    name: 'Layout',
    components: {
      Top,
      About,
      Main
    }
  }
</script> 
