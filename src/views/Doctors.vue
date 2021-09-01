<template>
  <v-container>
    <div>
      <div class="display-1">Meet Our Doctors</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, earum voluptas! Doloribus vero quis, voluptate dignissimos expedita eveniet repudiandae facilis nostrum impedit quos nobis, ea quidem totam est rem in?</p>
      <div class="doctors mb-3 mb-sm-5 mb-md-7 mt-4">
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
    </div>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    doctors: [
      'https://thumbs.dreamstime.com/b/young-woman-doctor-stethoscope-18736696.jpg',
      'https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Public%20Opinion%20Research%201200x666.jpg',
      'https://post.psychcentral.com/wp-content/uploads/2020/09/Black_Male_Doctor_Portrait_732x549-thumbnail-732x549.jpg',
      'https://cdn-prod.medicalnewstoday.com/content/images/articles/317/317991/doctor-in-branding-article.jpg',
      'https://static.scientificamerican.com/sciam/cache/file/F6FF3DF2-A99D-4BE0-99595C9E4717FEF4_source.jpg',
      'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/Female_Doctor_Mask_1296x728-header.jpg',
      'https://www.clinicone.com.np/wp-content/uploads/2020/06/Dr.-Ek-Raj.jpg',
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2019/12/GettyImages-481073822-800x728.jpg',
      'https://www.gannett-cdn.com/presto/2019/08/04/PDTF/ae992882-9977-4281-b839-e1b8f418024f-Plum_Health_072519_03.jpg',
      'https://c.ndtvimg.com/2020-03/v98cven8_doctor_625x300_23_March_20.jpg',
      'https://europeansting.files.wordpress.com/2020/04/young-doctors_.jpeg',
      'https://previews.123rf.com/images/karelnoppe/karelnoppe1408/karelnoppe140800011/30606941-close-up-portrait-of-young-male-doctor-isolated-on-white-background-.jpg',
      'https://previews.123rf.com/images/iodrakon/iodrakon1003/iodrakon100300042/6702684-stock-image-of-male-doctor-standing-with-arms-crossed-over-white-background.jpg',
      'https://previews.123rf.com/images/dolgachov/dolgachov1307/dolgachov130700228/20605818-bright-picture-of-male-doctor-with-stethoscope.jpg',
      'https://i.dlpng.com/static/png/6358897_preview.png',
      'https://www.publicdomainpictures.net/pictures/60000/velka/doctor-and-stethoscope.jpg',
      'https://s3.envato.com/files/261097507/DSC_5466-1.jpg',
      'https://previews.123rf.com/images/chagin/chagin1205/chagin120500563/13849612-a-female-doctor-with-a-stethoscope-listening-isolated-on-white-background.jpg'
    ],
    socials: [
      { icon: 'mdi-facebook', href: 'https://www.facebook.com' },
      { icon: 'mdi-twitter', href: 'https://www.twitter.com' },
      { icon: 'mdi-instagram', href: 'https://www.instagram.com' },
    ]
  })  
}
</script>