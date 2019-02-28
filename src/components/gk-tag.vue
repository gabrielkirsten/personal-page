<template>
    <span class="gk-tag"
         :style="'background-color: ' + backgroundColor">
        {{text}}
    </span>
</template>


<script>
export default {
  name: 'gk-tag',
  props: {
    text: String,
    backgroundColor: {
      type: String,
      default: '#333333',
    },
  },
};
</script>

<style lang="scss" scoped>
.gk-tag {
    padding: 4px;
    font-size: 12px;
    border-radius: 3px;
    margin-right: 8px;
}
</style>
