<template>
  <div>
    <textarea
      :value="text"
      @input="input"
      @keyup="keyup"
      @click="click"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'Document',
  components: {},
  data: () => ({
    text: ''
  }),
  methods: {
    input (event) {
      console.dir(event)
    },
    keyup (event) {
      console.dir(event)
    },
    click (event) {
      console.dir(event)
    }
  }
}
</script>

<style>
</style>
