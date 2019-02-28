<template>
    <div class="login">
        <div class="center">
            <b-container>
            <b-row>
                <b-col>
                    <gk-input type="text" label="login"/>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <gk-input type="password" label="password"/>
                </b-col>
            </b-row>
            <gk-button label="Sigin"/>
            </b-container>
        </div>
    </div>
</template>

<script>
import GkInput from '@/components/gk-input.vue';
import GkButton from '@/components/gk-button.vue';

export default {
  components: {
    GkInput,
    GkButton,
  },
};
</script>

<style lang="scss" scoped>
    .login {
        text-align: center;
        height: 100vh;
    }

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        max-width: 500px;
    }
</style>
