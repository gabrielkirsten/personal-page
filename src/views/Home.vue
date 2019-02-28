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
                      subtitleMessage="BRAZILIAN SOFTWARE ENGINEER 👨‍💻"/>
        </div>
    </div>
    <div class="end-cover">
        READ MORE
        <i class="fas fa-angle-double-down"></i>
    </div>

    <gk-section :title="section.title"
                :titleDescription="section.titleDescription"
                :customStyle="section.style"
                :text="section.text"
                :items="section.sectionItens"
                v-for="section in sections" v-bind:key="section.id"/>
  </div>
</template>

<script>
import GkTitle from '@/components/gk-title.vue';
import GkSection from '@/components/gk-section.vue';

export default {
  name: 'home',
  components: {
    GkTitle,
    GkSection,
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

      sections: [
        {
          id: 1,
          title: 'PROJECTS I\'M WORKING ON',
          titleDescription: 'HERE\'S WHAT I\'M DOING',
          sectionItens: [
            {
              id: 1,
              title: 'CNN Keras',
              tags: [{ name: 'Deep learning', color: '#7483FF' }, { name: 'Computer vision', color: '#FFAE8E' }],
              description: 'A simple and generic image classifier built with Keras/Tensorflow using cuda libraries.',
              link: 'https://gabrielkirsten.github.io/cnn_keras/',
            },
            {
              id: 2,
              title: 'RESEARCH',
              tags: [{ name: 'Deep learning', color: '#7483FF' }, { name: 'Computer vision', color: '#FFAE8E' }, { name: 'MSc', color: '#79CC49' }],
              description: 'Research in deep learning and computer vision to detect problens in soybeans by images obtained from unmanned vehicles.',
            },
            {
              id: 3,
              title: 'KERAS/TENSORFLOW SEMI-SUPERVISED IMAGE CLASSIFICATOR',
              tags: [{ name: 'Deep learning', color: '#7483FF' }, { name: 'Computer vision', color: '#FFAE8E' }, { name: 'MSc', color: '#79CC49' }],
              description: 'A semi-supervised image classifier built with Keras using cuda libraries and pseudo-label algorithm.',
              link: 'https://github.com/gabrielkirsten/pseudo_label_keras',
            },
            {
              id: 4,
              title: 'KRATOS',
              tags: [{ name: 'JAVA', color: '#404CB2' }],
              subtitle: "MY COMPANY'S PROJECT",
              description: 'WEB software that serve large companies, issuing fiscal documents according to Brazilian legislation and controlling their management. It uses for Java 8, AngularJS, VueJS, Spring ecosystem and Azure Infrastructure. One of the first online platforms for the issuance of Brazilian consumer electronic invoices.',
              link: 'https://somoskratos.com.br',
            },
          ],
        },
        {
          id: 2,
          title: 'ANOTHER COOL PROJECTS',
        },
        {
          id: 3,
          title: 'ABOUT ME',
          style: 'white',
          text: 'Master\'s degree (Scholarship holder) in Computer Science in the area of computer vision by the Federal University of Mato Grosso do Sul (UFMS). He holds a degree in Computer Engineering from the Dom Bosco Catholic University (2016). Developer Java (web) and Python (AI, data science).',
          customStyle: 'white',
        },
      ],
    };
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
