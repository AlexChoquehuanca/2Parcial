<template>
    <div :class="{ 'theme-helper': true, 'theme-helper-opened': helperOpened }">
        <!-- <div class="theme-helper-toggler" @click="toggleHelper(!helperOpened)" id="v-step-3">
            <div class="theme-helper-spinner bg-primary text-white">
                <i class="la la-cog"></i>
                <i class="la la-cog fs-smaller"></i>
            </div>
        </div> -->
        <!-- <section class="widget theme-helper-content">
            <div class="widget-body mt-3">
                <h3 class="mb-3">Tema</h3>
                <div class="theme-settings">

                    <h5 id="v-step-7">Colores de tema</h5>
                    <colorpicker
                        :colors="appConfig.themeColors"
                        :activeColor="sidebarColorName"
                        @change="updateLayoutComponentColor({component: 'layoutComponent', color: $event})"
                    ></colorpicker>
                </div>
                <div class="d-grid mt-4">
                    <a href="https://flatlogic.com/templates/light-blue-vue"
                    id="v-step-8"
                    target="_blank"
                    role="button"
                    class="btn btn-info btn-rounded-f fs-mini text-white">
                        Purchase
                    </a>
                    <a href="https://demo.flatlogic.com/light-blue-vue/#/documentation/"
                    target="_blank"
                    role="button"
                    class="btn btn-primary btn-rounded-f mt-4 fs-mini">
                        Documentation
                    </a>
                </div>
                <div class="d-flex justify-content-between mt-lg">
                    <a role="button"
                    target="_blank"
                    href="https://flatlogic.com/forum"
                    class="btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center">
                        <i class="glyphicon glyphicon-headphones mr-xs"></i>
                        Support
                    </a>
                    <a role="button"
                    target="_blank"
                    href="https://github.com/flatlogic/light-blue-dashboard"
                    class="btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center">
                        <i class="fa fa-github mr-xs"></i>
                        Github
                    </a>
                </div>
                <div class="mt-lg d-flex flex-column align-items-center theme-sharing">
                    <span class="fs-sm">
                        Thank you for sharing!
                    </span>
                    <div class="d-flexjustify-content-center text-light mt-2">
                        <a target="_blank"
                        href="https://twitter.com/intent/tweet?text=Admin%20dashboard%20template%20built%20with%20NodeJS,%20React%20and%20Bootstrap%204!&url=https://demo.flatlogic.com/sing-app/html-bs4/&via=flatlogic">
                            <i class="fa fa-twitter pr-1"></i>
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://demo.flatlogic.com/sing-app/html-bs4/"
                        target="_blank">
                            <i class="fa fa-facebook pl-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section> -->
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Colorpicker from '../Colorpicker/Colorpicker';
const { mapState, mapActions } = createNamespacedHelpers('layout');

export default {
  name: 'Helper',
  components: { Colorpicker },
  computed: {
      ...mapState(['navbarColorName', 'sidebarColorName', 'helperOpened'])
  },
  methods: {
      ...mapActions(['updateLayoutComponentColor', 'toggleHelper'])
  }
};
</script>

<style src="./Helper.scss" lang="scss"></style>
