<template>
    <div class="button">
        <button>{{label}}</button>
    </div>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
    button {
        height: 55px;
        width: 100%;
        background-color: #333333;
        color: white;
        border: 1px solid #333333;
        border-radius: 5px;
    }

    .button {
        margin-top: 30px;
    }
</style>
