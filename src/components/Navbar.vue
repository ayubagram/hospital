<template>
  <v-app-bar color="white" app :height="height" elevate-on-scroll>
    <div style="width: 100% !important;">
      <div class="primary">
      <v-container class="d-flex justify-space-between align-center py-1">
        <div style="font-size: 14px; color: #fff;">Call: +977 9876543210</div>
        <div class="nav__socials">
          <v-btn height="28" width="28" icon color="white" v-for="(s, i) in socials" :key="i" target="_blank" :href="s.href">
            <v-icon v-text="s.icon" size="14" />
          </v-btn>
        </div>
      </v-container>
    </div> 
    <v-container class="d-flex justify-space-between align-center py-0">
      <div class="logo">Hospital</div>   
      <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)" class="primary--text d-block d-sm-block d-md-none" /> 
      <div class="navs d-none d-sm-none d-md-block">
        <v-btn text tile active-class="active__nav" v-for="(nav, n) in navs" :key="n" :to="nav.to">
          <v-icon size="16" left v-text="nav.icon" />
          <span v-text="nav.title" />
        </v-btn>
      </div>
    </v-container>
    </div>
  </v-app-bar>  
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    navs: [
      { title: 'Home', icon: 'mdi-home', to: '/' },      
      { title: 'Services', icon: 'mdi-cog', to: '/services' },
      { title: 'Doctors', icon: 'mdi-account-multiple', to: '/doctors' },
      { title: 'Gallery', icon: 'mdi-image-multiple', to: '/gallery' },
      { title: 'About Us', icon: 'mdi-account' },
      { title: 'Contact Us', icon: 'mdi-account-box' }
    ],
    socials: [
      { icon: 'mdi-facebook', href: 'https://www.facebook.com' },
      { icon: 'mdi-twitter', href: 'https://www.twitter.com' },
      { icon: 'mdi-youtube', href: 'https://www.youtube.com' },
      { icon: 'mdi-instagram', href: 'https://www.instagram.com' },
      { icon: 'mdi-linkedin', href: 'https://www.linkedin.com' }
    ]
  }),
  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
  },
  computed: {
    ...mapState(['drawer']),
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 80
        case 'sm': return 80
        case 'md': return 96
        default: return 96
      }
    },
  },
}
</script>

<style>
.v-toolbar__content, .v-toolbar__extension { padding: 0 !important; }
.logo {
  font-weight: bold;
  font-size: 25px;
}
.navs .theme--light.v-btn--active:hover::before, .nav .theme--light.v-btn--active::before { opacity: 0 !important; }
.navs .v-btn { height: 60px !important; }
.active__nav {
  border-bottom: 2px solid #1976d2;
  color: #1976d2 !important;
  font-weight: 500 !important;
}
</style>