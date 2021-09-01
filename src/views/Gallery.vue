<template>
  <v-container>
    <div class="gallery">
      <div class="gallery__item" v-for="(g, i) in gallery" :key="i">
        <img :src="g" alt="Gallery Description">
      </div>  
    </div>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    gallery: [
      'https://www.thestatesman.com/wp-content/uploads/2018/06/a77f7479cd9b67163f72886bc1a3b3b0.jpg',
      'https://static.toiimg.com/photo/msid-76714980/76714980.jpg',
      'https://s.abcnews.com/images/International/india-young-doc-wider-image-00-rt-jef-210505_1620231824281_hpMain_16x9_992.jpg',
      'https://www.sehealthcarequalityconsulting.com/wp-content/uploads/2016/11/3A.jpg',
      'https://www.outlookindia.com/public/uploads/gallery/20210701/Doctors-day_8_20210701.jpg',
      'http://bsmedia.business-standard.com/_media/bs/img/article/2015-09/11/full/1441979073-449.jpg',
      'https://images.theconversation.com/files/248949/original/file-20181205-186076-y7v40z.jpg',
      'https://t3.ftcdn.net/jpg/03/15/11/04/400_F_315110437_eFF8PJzeSRXxS8UfbhtCwKzRYzRA2EKW.jpg',
      'https://www.midathospital.com/images/newsevents_images/1_1573973459.png',
      'https://www.businessinsider.in/photo/81974935/37-doctors-at-ganga-ram-hospital-delhi-test-covid-positive-many-having-already-received-both-doses-of-the-vaccine.jpg',
      'https://www.neuro.org.np/storage/thumbs/services/2020/12/neurosurgery_1608804186.jpg',
      'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Bengaluru-doctor-appeal_1200.jpg',
      'https://www.neuro.org.np/storage/thumbs/services/2020/12/as_1608647902.jpg',
      'https://www.outlookindia.com/public/uploads/gallery/20210508/covid_5_20210508.jpg',
      'https://qtxasset.com/fiercehealthcare/1530896996/doctorcomp.jpg/doctorcomp.jpg'  
    ]  
  })  
}
</script>
