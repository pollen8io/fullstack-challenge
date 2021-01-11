<template>
  <div class="document">
    <textarea
      class="document__body"
      autofocus
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

<style lang="scss" scoped>
.document {
  display: flex;
  align-items: center;
  justify-content: center;

  &__body {
    resize: none;
    border: none;
    min-width: 800px;
    min-height: 1200px;
    padding: 2.5rem;
    outline: none;
    box-shadow: 8px 8px 8px #dedede;
  }
}
</style>
