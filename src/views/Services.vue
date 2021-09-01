<template>
  <div style="background-color: rgb(128 128 128 / 7.5%)">
    <v-container>
      <div class="headline mb-2">Our Services</div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita delectus aliquam obcaecati sequi qui perspiciatis nulla sapiente cumque magni dignissimos, debitis autem iure harum, temporibus natus numquam maxime ea. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, ex provident quos, illo corporis est modi in quia minima vitae debitis possimus nihil deserunt recusandae ad? Tenetur, natus excepturi. Provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo esse quam consectetur laboriosam ex optio, dolorem corrupti placeat mollitia velit vitae officia illum, ducimus quia nisi unde, repellendus deleniti!</p>
      <div class="services mt-5">
        <div class="service__item white" v-for="(service, s) in services" :key="s">
          <div class="service__item__img">
            <img :src="service.img" :alt="service.title">
          </div>
          <div class="service__item__text pa-3 pa-sm-4 pa-md-5 pa-lg-6">
            <div class="title">{{ service.title }}</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet porro rem explicabo? Corporis, enim nobis officiis molestias modi eius animi, doloremque fugiat nemo soluta et officia facilis debitis similique!</p>
          </div>
        </div>  
      </div>
    </v-container>
  </div>  
</template>

<script>
export default {
  data: () => ({
    services: [
      { title: 'Medical Counceling', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/02/service-11-280x215.jpg' },
      { title: 'Competitive Doctors', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/01/service-5-280x215.jpg' },
      { title: 'Pediatrician Clinic', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/02/Depositphotos_11882261_original-280x215.jpg' },
      { title: 'Eldery Care', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/01/Eldery-Care-1-280x215.jpg' },
      { title: 'Eye Care', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Facility-Optic-280x215.jpg' },
      { title: 'Prenatal Care', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/prenatal-care-280x215.jpg' },
      { title: 'Nephrologist Care', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Nephrologist-Care-280x215.jpg' },
      { title: 'Rehabilitation Center', img: 'http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/02/Rehabilitation-280x215.jpg' }
    ]
  })  
}
</script>