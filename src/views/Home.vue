<template>
  <div class="home">
    <!-- Home Banner -->
    <div class="home__banner">
      <div class="home__banner__content">
        <v-container class="d-flex flex-column white--text">
          <div class="headline">Lorem ipsum dolor sit amet.</div>
          <p class="my-2 my-sm-4 my-md-6" style="color: #fff !important;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed vero dolores maxime. <br> Quam pariatur expedita autem, velit magni tenetur praesentium aperiam temporibus <br> rem nesciunt inventore earum totam aliquam deleniti?</p>
          <v-btn large class="amber elevation-0" max-width="150">
            <span>explore</span>
            <v-icon v-text="'mdi-arrow-right'" right />
          </v-btn>
        </v-container>
      </div>
    </div>

    <!-- Best -->
    <div class="py-8 py-sm-10 py-md-12 py-lg-14">
      <v-container>
        <div class="mb-5 mb-sm-7 mb-md-9 mb-lg-11 text-center">
          <div class="display-1 mb-1">BEST HOSPITAL IN TOWN</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum</p>
        </div>
        <div class="items">
          <div class="item__item white pa-3 pa-sm-4 pa-md-5 pa-lg-6" v-for="(service, s) in items" :key="s">
            <v-icon size="50" v-text="service" color="primary" />
            <div class="title font-weight-normal my-1">Lorem ipsum dolor sit amet</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus aliquid numquam corrupti repellat, excepturi, libero, a impedit quas aut inventore nam fugit obcaecati magnam praesentium ratione? Tenetur, minus modi.</p>
          </div>  
        </div>
      </v-container>
    </div>

    <!-- Our Doctors -->
    <div style="background-color: rgb(128 128 128 / 7%);" class="py-8 py-sm-10 py-md-12 py-lg-14">
      <v-container>
        <div class="mb-5 mb-sm-7 mb-md-9 mb-lg-11 text-center">
          <div class="display-1 mb-1">OUR DOCTORS</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum</p>
        </div>
        <div class="doctors mb-3 mb-sm-5 mb-md-7">
          <div class="doctor__item" v-for="(d, i) in doctors" :key="i">
            <div class="doctor__item__img">
              <img :src="d" alt="Doctor Name">
            </div>
            <div class="doctor__item__content pa-3 text-center">
              <div class="title">Dr. John Doe</div>
              <span>Surgeon</span>
              <p style="color: #fff !important; line-height: 1.2; font-size: 12px !important;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero, aperiam ab repellat reiciendis molestiae quam aspernatur</p>
              <div class="socials">
                <v-btn icon v-for="(social, s) in socials" :key="s" target="_blank" :href="social.href" color="white">
                  <v-icon v-text="social.icon" />
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <v-btn outlined color="amber" width="120" to="/doctors">view all</v-btn>
        </div>
      </v-container>
    </div>

    <!-- Services -->
    <div class="py-8 py-sm-10 py-md-12 py-lg-14">
      <v-container>
        <div class="mb-5 mb-sm-7 mb-md-9 mb-lg-11 text-center">
          <div class="display-1 mb-1">OUR SERVICES</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum</p>
        </div>
        <div class="services mb-3 mb-sm-5 mb-md-7">
          <div class="service__item white" v-for="(service, s) in services" :key="s">
            <div class="service__item__img">
              <img :src="service.img" :alt="service.title">
            </div>
            <div class="service__item__text pa-3 pa-sm-4 pa-md-5 pa-lg-6">
              <div class="title">{{ service.title }}</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet porro rem explicabo? Corporis, enim nobis officiis molestias modi eius animi.</p>
            </div>
          </div>  
        </div>
        <div class="text-center">
          <v-btn outlined color="amber" width="120" to="/services">view all</v-btn>
        </div>
      </v-container>
    </div>

    <!-- PHilosophy -->
    <div class="philosophy">
      <div class="philosophy__content primary pa-4 pa-sm-6 pa-md-8 pa-lg-10 white--text">
        <div class="display-1 text-uppercase">OUR PHILOSOPHY</div>
        <div class="body-2">This is the subtitle for the heading</div>
        <p class="mt-3" style="color: #fff;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur nemo fugit! Beatae facilis sit eum. Magni similique dignissimos beatae nihil corporis culpa pariatur odit. Facere repellat laudantium quo minima.</p><br>
        <p style="color: #fff;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laborum assumenda minima. Doloribus ea, dolore quibusdam cum praesentium omnis, temporibus laboriosam possimus soluta laudantium deserunt sunt fuga doloremque, facere incidunt?</p><br>
        <p style="color: #fff;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto rem at tempore recusandae maiores quae, dolorem modi sunt reiciendis placeat pariatur, et ipsam amet accusantium quis atque, laudantium temporibus corrupti?</p>
        <v-btn large class="elevation-0 mt-3" max-width="150" color="red">lear more</v-btn>
      </div>
    </div>

     <!-- Department -->
    <div class="py-8 py-sm-10 py-md-12 py-lg-14">
      <v-container>
        <div class="display-1 text-center mb-3 mb-sm-5 mb-md-7 mb-lg-9">HOSPITAL DEPARTMENTS</div>
        <div class="department">
          <div class="department__item" v-for="(d, i) in department" :key="i">
            <div class="department__item__img">
              <img :src="d.img" :alt="d.title">
            </div>
            <div class="department__item__content pa-3 pa-sm-4 pa-md-5 pa-lg-6">
              <div class="title">{{ d.title }}</div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt magnam nam illo</p>
            </div>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ['mdi-layers', 'mdi-vector-square', 'mdi-map-marker', 'mdi-alert-circle', 'mdi-baby-face-outline', 'mdi-basketball'],
    doctors: [
      'https://previews.123rf.com/images/karelnoppe/karelnoppe1408/karelnoppe140800011/30606941-close-up-portrait-of-young-male-doctor-isolated-on-white-background-.jpg',
      'https://previews.123rf.com/images/iodrakon/iodrakon1003/iodrakon100300042/6702684-stock-image-of-male-doctor-standing-with-arms-crossed-over-white-background.jpg',
      'https://previews.123rf.com/images/dolgachov/dolgachov1307/dolgachov130700228/20605818-bright-picture-of-male-doctor-with-stethoscope.jpg',
      'https://thumbs.dreamstime.com/b/young-woman-doctor-stethoscope-18736696.jpg',
      'https://www.publicdomainpictures.net/pictures/60000/velka/doctor-and-stethoscope.jpg',
      'https://s3.envato.com/files/261097507/DSC_5466-1.jpg',
      'https://previews.123rf.com/images/chagin/chagin1205/chagin120500563/13849612-a-female-doctor-with-a-stethoscope-listening-isolated-on-white-background.jpg'
    ],
    socials: [
      { icon: 'mdi-facebook', href: 'https://www.facebook.com' },
      { icon: 'mdi-twitter', href: 'https://www.twitter.com' },
      { icon: 'mdi-instagram', href: 'https://www.instagram.com' },
    ],
    services: [
      { title: 'Medical Counceling', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/02/service-11-280x215.jpg' },
      { title: 'Competitive Doctors', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/01/service-5-280x215.jpg' },
      { title: 'Pediatrician Clinic', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/02/Depositphotos_11882261_original-280x215.jpg' },
      { title: 'Eldery Care', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/01/Eldery-Care-1-280x215.jpg' },
    ],
    department: [
      { title: 'Cardiology', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/06/Depositphotos_24648537_original-400x400.jpg' },
      { title: 'Dental', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/02/Depositphotos_5711983_original-400x400.jpg' },
      { title: 'Neorologist', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_42539851_department.jpg' },
      { title: 'Pedriatic', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/06/Depositphotos_11882261_original-400x400.jpg' },
      { title: 'Pulmanory', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_10069934_original-400x400.jpg' },
      { title: 'Traumatology', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_11295039_original-400x400.jpg' },
      { title: 'Urology', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_42548065_original-400x400.jpg' },
      { title: 'X-ray', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/03/Depositphotos_80150830_original-400x400.jpg' }
    ]
  })
}
</script>

<style scoped>
.home__banner {
  background-image: url('https://www.midathospital.com/images/newsevents_images/1_1573973459.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 85vh;
}
.home__banner__content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 40%);
}

.philosophy {
  background-image: url('https://www.mozocare.com/insights/wp-content/uploads/2020/09/best-hospital.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 80vh;
  display: grid;
  grid-template-columns: 50% 50%;
  overflow: hidden;
}
.philosophy__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 1060px) {
  .home__banner { height: 75vh; }
}
@media (max-width: 960px) {
  .home__banner { height: 68vh; }
  .philosophy { grid-template-columns: 100%; }
}
@media (max-width: 860px) {
  .home__banner { height: 60vh; }
}
@media (max-width: 760px) {
  .home__banner { height: 50vh; }
}
@media (max-width: 600px) {
  .home__banner { height: 40vh; }
}
</style>
