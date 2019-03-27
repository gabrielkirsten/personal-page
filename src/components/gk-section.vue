<template>
    <div :class="getClassOfCustomStyle(customStyle)">
        <slot/>
    </div>
</template>

<script>
import GkTag from '@/components/gk-tag.vue';

export default {
  components: {
    GkTag,
  },
  props: {
    title: String,
    titleDescription: String,
    items: Array,
    customStyle: {
      type: String,
      default: 'black',
    },
    text: String,
  },
  methods: {
    getClassOfCustomStyle(customStyle) {
      switch (customStyle) {
        case 'black':
          return 'black';
        case 'white':
          return 'white';
        default:
          return 'black';
      }
    },
  },
};
</script>

<style lang="scss" scoped>

div.black {
    background-color: black;
    color: white;
    padding: 10px;
    a {
        font-weight: 700;
        font-size: 12px;
        color: white;
    }
}

div.white {
    background-color: white;
    color: black;
    padding: 10px;
    a {
        font-weight: 700;
        font-size: 12px;
        color: black;
    }
}


.border-section {
    border: 1px solid #d1d5da;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    transition: border 0.2s linear;
    transition: background-color 0.2s linear;
    cursor: pointer;
    transition: border 2s;
    &:hover {
        border: 1px solid #7483FF;
    }
}

h2 {
  letter-spacing: 5px;
  font-weight: 300;
  span {
      font-size:12px;
      font-weight: 300;
  }
}

</style>
