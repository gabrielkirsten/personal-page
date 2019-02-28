<template>
    <div class="input">
        <label>{{label}}</label>
        <input :type="type">
    </div>
</template>

<script>
export default {
  props: {
    type: String,
    label: String,
  },
};
</script>

<style lang="scss" scoped>
label {
    text-align: left;
    display: block;
}
input {
    display: block;
    height: 55px;
    width: 100%;
    border: 1px solid #333333;
    border-radius: 4px;
    margin-top: 0px;
    padding: 15px;
}
.input {
    margin-top: 20px;
}
</style>
