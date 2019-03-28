<template>
  <div class="home">

    <div class="cover">
        <div class="social-media-side">
            <span class="social-media-item"
                  v-for="social in socials"
                  v-bind:key="social.id"
                  :id="'social-'+social.id">
                <a :href="social.link"
                   target="_blank">
                   <i :class="social.icon"
                      v-b-tooltip.hover>
                    </i>
                  </a>
                <b-tooltip :target="'social-'+social.id"
                           placement="right">
                    {{social.tooltip}}
                </b-tooltip>
            </span>
        </div>
        <div class="cover-content">
            <gk-title titleMessage="GABRIEL KIRSTEN"
                      subtitleMessage="BRAZILIAN SOFTWARE ENGINEER 👨‍💻"
                      :typedMessage="['FULL STACK DEVELOPER',
                                      'JAVA',
                                      'SPRING',
                                      'JAVASCRIPT',
                                      'VUEJS']"
            />
        </div>
    </div>
    <div class="end-cover" v-scroll-to="{el: '#about',
                                         duration: 500,
                                         easing: 'ease',
                                         force: true,
                                         cancelable: true,
                                         x: false,
                                         y: true
    }">
      <p>
        READ MORE
        <i class="fas fa-angle-double-down"></i>
      </p>
    </div>

    <gk-section :title="section.title"
                :titleDescription="section.titleDescription"
                :customStyle="section.style"
                :text="section.text"
                :items="section.sectionItens"
                v-for="section in sections" v-bind:key="section.id"/>

    <gk-section :customStyle="'black'">
      <b-container>
        <div class="section-title">
          <h2 id='about'> ABOUT ME </h2>
        </div>
        <b-row>
          <b-col xs="12">
            <p>
              Master's degree (Scholarship holder) in Computer Science in the area of
              computer vision  the Federal University of Mato Grosso do Sul (UFMS).
              He holds a degree in Computer Engineering from the Dom Bosco Catholic
              University (2016). Developer Java (web) and Python (AI, data science).
            </p>
          </b-col>
        </b-row>
      </b-container>
    </gk-section>


    <gk-section :customStyle="'white'">
      <b-container>
        <div class="section-title">
          <h2> PROJECTS I'M WORKING ON <span> HERE'S WHAT I'M DOING</span></h2>
        </div>
        <b-row class="section-itens">

          <b-col md="12">
            <div class="border-section" @click="goToLink('https://gabrielkirsten.github.io/cnn_keras/')">
              <gk-tag text="Deep learning"
                      backgroundColor="#7483FF"/>
              <gk-tag text="Computer Vision"
                      backgroundColor="#FFAE8E"/>
              <h3 class="title">
                CNN Keras
              </h3>
              <p class="description">
                A simple and generic image classifier built with
                Keras/Tensorflow using cuda libraries.
                </p>
            </div>
          </b-col>

          <b-col md="12">
            <div class="border-section" @click="goToLink('')">
              <gk-tag text="Deep learning"
                      backgroundColor="#7483FF"/>
              <gk-tag text="Computer Vision"
                      backgroundColor="#FFAE8E"/>
              <gk-tag text="MSc"
                      backgroundColor="#79CC49"/>
              <h3 class="title">
                RESEARCH
              </h3>
              <p class="description">
                Research in deep learning and computer vision to detect problens in
                soybeans by images obtained from unmanned vehicles.
              </p>
            </div>
          </b-col>

          <b-col md="12">
            <div class="border-section" @click="goToLink('https://github.com/gabrielkirsten/pseudo_label_keras')">
              <gk-tag text="Deep learning"
                      backgroundColor="#7483FF"/>
              <gk-tag text="Computer Vision"
                      backgroundColor="#FFAE8E"/>
              <gk-tag text="MSc"
                      backgroundColor="#79CC49"/>
              <h3 class="title">
                KERAS/TENSORFLOW SEMI-SUPERVISED IMAGE CLASSIFICATOR
              </h3>
              <p class="description">
                A semi-supervised image classifier built with Keras using cuda
                libraries and pseudo-label algorithm.
              </p>
            </div>
          </b-col>

          <b-col md="12">
            <div class="border-section" @click="goToLink('https://somoskratos.com.br')">
              <gk-tag text="JAVA"
                      backgroundColor="#404CB2"/>
              <h3 class="title">
                KRATOS
              </h3>
              <p class="description">
                WEB software that serve large companies, issuing fiscal documents according
                to Brazilian legislation and controlling their management. It uses for Java 8,
                AngularJS, VueJS, Spring ecosystem and Azure Infrastructure. One of the first
                online platforms for the issuance of Brazilian consumer electronic invoices.
              </p>
            </div>
          </b-col>

        </b-row>
      </b-container>
    </gk-section>

  </div>
</template>

<script>
import GkTitle from '@/components/gk-title.vue';
import GkSection from '@/components/gk-section.vue';
import GkTag from '@/components/gk-tag.vue';

export default {
  name: 'home',
  components: {
    GkTitle,
    GkSection,
    GkTag,
  },
  data() {
    return {
      socials: [
        {
          id: 1,
          link: 'https://github.com/gabrielkirsten/',
          icon: 'fab fa-github',
          tooltip: 'follow me on github',
        },
        {
          id: 2,
          link: 'https://www.linkedin.com/in/gabrielkirsten/',
          icon: 'fab fa-linkedin',
          tooltip: 'check my likedin',
        },
        {
          id: 3,
          link: 'https://medium.com/@gabrielkirsten1',
          icon: 'fab fa-medium',
          tooltip: 'follow me on medium',
        },
        {
          id: 4,
          link: 'https://www.instagram.com/gabrielkirsten',
          icon: 'fab fa-instagram',
          tooltip: 'follow me on IG',
        },
        {
          id: 5,
          link: 'https://api.whatsapp.com/send?phone=+5567991066000&text=Hello',
          icon: 'fab fa-whatsapp',
          tooltip: 'send me a messsage on whatsapp',
        },
      ],
    };
  },
  methods: {
    goToLink(link) {
      window.open(link, '_blank');
    },
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
  cursor: pointer;
}

</style>
