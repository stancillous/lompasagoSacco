<template>

  <nav>
    <HeaderComp/>
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>


  <footer>
    <FooterComp/>
  </footer>
</template>

<script>

import FooterComp from './components/TheFooter.vue'
import HeaderComp from './components/TheNav.vue'

export default{

  components:{
            HeaderComp,
            FooterComp,
        }

}


</script>
<style lang="scss">

$web-color:#293df1;
$web-font1:"Satoshi", sans-serif;
$web-font2:"General Sans", sans-serif;
$bg-color:#d5fbfb;


//font weights 
$light:300;
$regular:400;
$medium:500;
$bold:700;
$black:900;

.slide-enter-active,
.slide-leave-active{
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-20%);
}

</style>
