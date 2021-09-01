<template>
  <v-footer color="primary" class="py-6 py-sm-8 py-md-10 py-lg-12 white--text elevation-6" padless>
    <v-container class="footer">
      <div class="company">
        <div class="logo font-weight-bold title">
          <span class="white--text">Hospital</span>
        </div>   
        <div class="mt-3 mb-4 para">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        <div>
          <div class="title mb-2">Subcriber Newsletter</div>
          <div class="email__input" style="position: relative;">
            <v-btn width="30" height="30" tile icon class="primary send__btn">
              <v-icon v-text="'mdi-send-outline'" color="white" size="16" />  
            </v-btn>
            <input type="text" placeholder="Your email here">
          </div>  
        </div>
      </div>
      <div class="footer__links">
        <div class="links">
          <div class="link__title">Information</div>
          <div class="para" v-for="(inf, i) in info" :key="i">{{ inf }}</div>
        </div>
        <div class="links">
          <div class="link__title">Helpful Links</div>
          <div class="para" v-for="(link, l) in links" :key="l">{{ link }}</div>
        </div>
        <div class="links">
          <div class="link__title">Departments</div>
          <div class="para" v-for="(service, s) in services" :key="s">{{ service }}</div>
        </div>
        <div class="links">
          <div class="link__title">Contact</div>
          <div class="para" v-for="(con, c) in contact" :key="c">{{ con }}</div>
          <div class="socials mt-4">
            <span style="font-weight: bold; font-size: 12px; letter-spacing: .5px;">Follow Us : </span>  
            <v-btn icon small v-for="(social, s) in socials" :key="s" color="white" target="_blank" :href="social.to">
              <v-icon size="14" v-text="social.icon" />
            </v-btn>  
          </div>
        </div>  
      </div>
    </v-container>  
    <v-container>
      <v-divider class="white" />  
      <div class="d-flex justify-space-between caption pt-5" style="font-weight: 300;">
        <div>@{{ new Date().getFullYear() }} Hospital</div>  
        <div>Designed By Agram</div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    info: ['Home', 'Gallery', 'About Us', 'Contact Us'],
    links: ['Services', 'Doctors'],
    services: ['Cardiology', 'Dental', 'Neorologist', 'Pedriatic'],
    contact: ['24th street, downtown, New York', 'info@hospital.com', '(545) 555-0214'],
    socials: [
      { icon: 'mdi-facebook', to: 'https://www.facebook.com' },
      { icon: 'mdi-twitter', to: 'https://www.twitter.com' },
      { icon: 'mdi-youtube', to: 'https://www.youtube.com' },
      { icon: 'mdi-linkedin', to: 'https://www.linkedin.com' }  
    ]
  })  
}
</script>

<style scoped>
.footer {
  display: grid;
  grid-template-columns: 280px calc(100% - 330px);
  grid-gap: 50px;  
}
.send__btn {
  border-radius: 6px !important;
  position: absolute;
  right: 6px; 
  top: 6px; 
}
input {
  outline: none;
  border: none;
  background-color: #fff;
  border-radius: 6px;
  padding: 12px;
  font-size: 12px;
  width: 100%;
  letter-spacing: .5px;
}
.footer__links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));  
}
.para {
  color: #fff;
  opacity: .75;  
  font-size: 13px; 
}
.links .para { margin-bottom: 8px; }
.links .para:last-child { margin-bottom: 0 !important; }
.link__title {
  font-weight: bold;
  margin-bottom: 16px;  
  letter-spacing: .5px;
  font-size: 17px;
}
@media (max-width: 960px) {
  .footer { grid-gap: 40px; }  
  .footer__links { grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); }  
}
@media (max-width: 600px) {
  .footer { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); grid-gap: 30px;  }  
  .footer__links { row-gap: 20px; }
}
</style>