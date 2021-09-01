<template>
  <v-navigation-drawer color='primary' dark disable-resize-watcher mobile-breakpoint="10024" v-model="drawer" right width="230" app>

    <v-card height="150" tile elevation='0' class='primary d-flex justify-center align-center title'>
      <b><span class="white--text">HOSPITAL</span></b>
    </v-card>

    <v-divider></v-divider>

    <v-list expand nav tile shaped class="pl-0">
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="(item, i) in menu" :key="i" :to="item.to">
          <v-list-item-icon class="mx-2">
            <v-icon size='20' v-text="item.icon" />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title" style="letter-spacing: 1px; font-weight: 400 !important; font-size: 18px !important;" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    menu: [
      { title: 'Home', icon: 'mdi-home', to: '/' },      
      { title: 'Services', icon: 'mdi-cog', to: '/services' },
      { title: 'Doctors', icon: 'mdi-account-multiple', to: '/doctors' },
      { title: 'Gallery', icon: 'mdi-image-multiple', to: '/gallery' },
      { title: 'About Us', icon: 'mdi-account' },
      { title: 'Contact Us', icon: 'mdi-account-box' }
    ]
  }),

  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('SET_DRAWER', val)
      },
    },      
  },
}
</script>