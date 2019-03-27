<template>
    <div class="gk-title">
        <h1> {{titleMessage}} </h1>
        <h2> {{subtitleMessage}} </h2>
        <vue-typer
          :text="typedMessage"
          :repeat='Infinity'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='70'
          :type-delay='70'
          :pre-erase-delay='2000'
          :erase-delay='250'
          erase-style='select-all'
          :erase-on-complete='false'
          caret-animation='phase'
        ></vue-typer>
    </div>
</template>

<script>
import {VueTyper} from 'vue-typer';
export default {
  components: {
    VueTyper,
  },
  props: {
    titleMessage: String,
    subtitleMessage: String,
    typedMessage: Array,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  letter-spacing: 20px;
  font-weight: 300;
}
h2 {
    letter-spacing: 2px;
    font-size: 15px;
}
</style>
