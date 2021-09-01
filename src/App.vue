<template>
  <v-app>
    <Navbar />
    <Sidebar />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Navbar, Sidebar, Footer },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
  width: 0;
}
/* Container */
.container {
  max-width: 1250px !important;
  margin-right: auto !important;
  margin-left: auto !important;
  padding: 12px !important;
}
/* Button */
.v-btn {
  font-size: 13px !important;
  font-weight: 300 !important;
  text-transform: capitalize !important;
}
/* Image */
img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: ease-in-out 250ms;
}

/* Gallery */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18%, 1fr));
  grid-gap: 12px;
}
.gallery__item {
  border-radius: 4px;
  overflow: hidden;
}
.gallery__item:hover img { transform: scale(1.25); }

/* items */
.items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32%, 1fr));
  grid-gap: 12px;
}
.item__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  transition: ease-in-out 250ms;
}
p {
  font-size: 14px;
  letter-spacing: .5px;
  color: grey;
  font-weight: 300;
  margin-bottom: 0 !important;
}
.item__item:hover {
  border-radius: 6px;
  transform: translateY(-6px);
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%);
}

/* Doctors */
.doctors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 12px;
}
.doctor__item { 
  position: relative;
  overflow: hidden;
  height: 300px;
}
.doctor__item__img {
  height: 100%;
  width: 100%;
  position: absolute;
}
.doctor__item__content {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(0 0 0 / 50%);
  transform: translateY(100%);
  transition: ease-in-out 250ms;
  color: #fff;
}
.doctor__item:hover .doctor__item__content {
  transform: translateY(0);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

/* Services */
.services, .department {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 12px;
}
.service__item, .department__item {
  text-align: center;
  overflow: hidden;
  transition: ease-in-out 250ms;
}
.department__item { 
  text-align: start !important;
  border: .5px solid rgb(0 0 0 / 10%);
}
.service__item:hover, .department__item:hover {
  border-radius: 6px;
  transform: translateY(-6px);
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%);
}
.department__item:hover { border: .5px solid transparent; }

/* Media quaries */
@media (max-width: 1060px) {
  .gallery { grid-template-columns: repeat(auto-fit, minmax(23%, 1fr)); }
  .doctor__item { height: 275px; }
  .services, .department { grid-template-columns: repeat(auto-fit, minmax(32%, 1fr)); }
}
@media (max-width: 960px) {
  .items { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
}
@media (max-width: 860px) {
  .gallery { grid-template-columns: repeat(auto-fit, minmax(32%, 1fr)); }
  .doctors { grid-template-columns: repeat(auto-fit, minmax(32%, 1fr)); }
  .doctor__item { height: 250px; }
}
@media (max-width: 760px) {
  .services, .department { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
}
@media (max-width: 600px) {
  .gallery { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
  .items { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
  .doctor__item { height: 225px; }
}
@media (max-width: 500px) {
  .services { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
@media (max-width: 400px) {
  .doctors { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
  .department { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
</style>