<template>
  <Document class="app" />
</template>

<script>
import Document from './components/Document'

export default {
  name: 'App',
  components: {
    Document
  }
}
</script>

<style lang="scss">
html, body {
  background-color: #efefef;
}

html {
  overflow-y: scroll;
}

.app {
  margin-top: 2.5rem;
}
</style>
