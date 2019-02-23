<template>
<div :class="{'gk-section-black' : customStyle === 'black', 'gk-section-white' : customStyle === 'white'}">
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
            <b-col md="4" v-for="item in items" v-bind:key="item">
                <p class="title">{{item.title}}</p>
                <p class="description">{{item.description}}</p>
                <a :href="item.link" v-if="item.link">(CLICK TO VIEW PROJECT)</a>
            </b-col>
        </b-row>

    </div>
    
</div>
    
</template>

<script>
export default {
    props: {
        title: String,
        titleDescription: String,
        items: Array,
        customStyle: {
            type: String, 
            default: "black",
        },
        text: String,
    },
}
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

.gk-section-black {
    background-color: black;
    color: white;
    padding: 10px;
    a {
        font-weight: 700;
        font-size: 12px;
        color: white;
    }
}

.gk-section-white {
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
    .title {
        font-weight: 700;
        font-size: 18px;
    }
    .description {
        font-weight: 300;
    }
}

.section-title {
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>

