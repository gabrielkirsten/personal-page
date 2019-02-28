<template>
    <div :class="getClassOfCustomStyle(customStyle)">
        <div class="container">
            <div class="section-title">
                <h2> {{title}} <span> {{titleDescription}}</span></h2>
            </div>

            <b-row>
                <b-col xs="12">
                    <p>{{text}}</p>
                </b-col>
            </b-row>

            <b-row class="section-itens">
                <b-col md="4"
                       v-for="item in items"
                       v-bind:key="item.id">
                    <div class="border-section" @click="goToLink(item.link)">
                        <gk-tag :text="tag.name"
                                :backgroundColor="tag.color"
                                v-for="tag in item.tags"
                                v-bind:key="tag.id">
                            {{tag.name}}
                        </gk-tag>
                        <h3 class="title">
                            {{item.title}}
                            <span class="subtitle">{{item.subtitle}}</span>
                        </h3>
                        <p class="description">{{item.description}}</p>
                    </div>
                </b-col>
            </b-row>

        </div>

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
    goToLink(link) {
      window.open(link, '_blank');
    },
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
h2 {
  letter-spacing: 5px;
  font-weight: 300;
  span {
      font-size:12px;
      font-weight: 300;
  }
}

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

.section-itens {
    margin-bottom: 30px;
    font-size: 14px;
    .title {
        font-weight: 700;
        font-size: 18px;
        margin-top: 10px;
        .subtitle {
            font-weight: 300;
            font-size: 12px;
        }
    }
    .description {
        font-weight: 300;
    }
}

.section-title {
    margin-top: 30px;
    margin-bottom: 30px;
}

.border-section {
    border: 1px solid #333333;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    transition: border 0.2s linear;
    transition: background-color 0.2s linear;
    cursor: pointer;
    &:hover {
        border: 1px solid white;
        background-color: #333333;
    }
}

</style>
