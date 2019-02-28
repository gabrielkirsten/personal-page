<template>
    <div class="gk-title">
        <h1> {{titleMessage}} </h1>
        <h2> {{subtitleMessage}} </h2>
    </div>
</template>

<script>
export default {
  props: {
    titleMessage: String,
    subtitleMessage: String,
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
