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
    backgroundColor: String,
  },
};
</script>

<style lang="scss" scoped>
.gk-tag {
    background-color: #333333;
    padding: 4px;
    font-size: 12px;
    border-radius: 3px;
    margin-right: 8px;
}
</style>
