<template>
  <div class="home">

    <div class="cover">
        <div class="social-media-side">
            <span class="social-media-item" v-for="social in socials" v-bind:key="social">
                <a :href="social.link" target="_blank"><i :class="social.icon"></i></a>
            </span>
        </div>
        <div class="cover-content">
            <gk-title titleMessage="GABRIEL KIRSTEN" subtitleMessage="BRAZILIAN WEB DEVELOPER 👨‍💻"/>
        </div>
    </div>
    <div class="end-cover">
        READ MORE
        <i class="fas fa-angle-double-down"></i>
    </div>

    <gk-section title="MY PROJECTS" titleDescription="HERE'S WHAT I'M DOING" :items="sectionItens"/>
    <gk-section title="ABOUT ME" titleDescription="WHO I'M I" customStyle="white" text="Master's degree (Scholarship holder) in Computer Science in the area of computer vision by the Federal University of Mato Grosso do Sul (UFMS). He holds a degree in Computer Engineering from the Dom Bosco Catholic University (2016). Developer Java (web) and Python (AI, data science)."/>

  </div>
</template>

<script>
// @ is an alias to /src
import GkTitle from '@/components/gk-title.vue';
import GkSection from '@/components/gk-section.vue';

export default {
  name: 'home',
  components: {
    GkTitle,
    GkSection,
  },
  data: function() { 
      return {
        socials: [
                {
                    link: "https://github.com/gabrielkirsten/",
                    icon: "fab fa-github",
                },
                {
                    link: "https://www.linkedin.com/in/gabrielkirsten/",
                    icon: "fab fa-linkedin",
                },
                {
                    link: "https://medium.com/@gabrielkirsten1",
                    icon: "fab fa-medium",
                },
                {
                    link: "https://www.instagram.com/gabrielkirsten",
                    icon: "fab fa-instagram",
                },
        ],
        sectionItens: [
            {
                title: "CNN Keras",
                description: "A simple and generic image classifier built with Keras/Tensorflow using cuda libraries.",
                link: "https://gabrielkirsten.github.io/cnn_keras/",
            },
            {
                title: "RESEARCH",
                description: "Research in deep learning and computer vision to detect problens in soybeans by images obtained from unmanned vehicles.",
            },
            {
                title: "KERAS/TENSORFLOW SEMI-SUPERVISED IMAGE CLASSIFICATOR",
                description: "A semi-supervised image classifier built with Keras using cuda libraries and pseudo-label algorithm.",
                link: "https://github.com/gabrielkirsten/pseudo_label_keras"
            },

        ],
      }
  },
};
</script>

<style lang="scss" scoped>

.cover {
    width: 100%;
    height: 90vh;
    display: table;
}

.cover-content {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    width: 100%;
}

.social-media-side {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 10px;
}

.social-media-item {
    display: flex;
    margin-top: 5px;
}

.end-cover {
    text-align: center;
    font-weight: 300;
}

</style>

