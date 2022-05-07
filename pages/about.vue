<template>
  <article class="
    max-w-2xl mx-auto
    prose-em:text-secondary prose-em:not-italic prose-em:font-medium prose-a:text-secondary
  ">
    <h1 class="text-center text-3xl md:text-6xl text-primary my-4 font-bold dark:text-white">NA Brno dobrý 2022</h1>
    <p class="prose prose-xl dark:prose-invert mx-auto my-12 text-center">
      Welcome to the web of <em>NA Brno dobrý 2022!</em> This spring we are coming back to Brno and we cannot wait to
      show you
      what this Moravian jewel has to offer.

    </p>
    <div class="my-4 gap-2 flex flex-col sm:flex-row items-center justify-center">
      <img
        src="https://brnenska.drbna.cz/files/drbna/images/page/2020/07/02/size4-15937127407149-60-hodari-se-raduji-ve-vetsine-mestskych-casti-letos-hody-budou.jpg"
        alt="The real Moravian Hody"
        class="w-full sm:w-1/2"
        width="1000"
        height="668"
      >
      <img
        alt="Hody could be also modern"
        src="https://www.brno-cernovice.cz/wp-content/uploads/2020/09/118912822_3044061082387692_8123382978934372600_o.jpg"
        class="w-full sm:w-1/2"
        width="986"
        height="653"
      >
    </div>
    <p class="prose prose-lg dark:prose-invert mx-auto text-justify">
      The theme is <em>Hody</em> - a traditional celebration of certain patrons of the village. The whole village
      celebrates by
      preparing traditional <strong>ceremonies, dancing and singing</strong> in national costumes, and finishing with a
      service in the
      local church. Hody is a large cultural event in each village and smaller region in Moravia and each one of them
      has slightly different <em>traditions</em>. And we would like to introduce this tradition to you as well!
    </p>
    <div class="my-8 gap-x-2 flex flex-col sm:flex-row items-center justify-center">
      <img
        src="https://brnenska.drbna.cz/files/drbna/images/page/2021/09/11/size4-16313745103149-60-the-times-zaradily-brno-mezi-top-deset-nejlepsich-nehlavnich-mest.jpg"
        alt="Our lovely Brníčko"
        class="w-full sm:w-1/2"
        width="1000"
        height="621"
      >
      <img
        alt="ESF MUNI, our plenaries place"
        class="w-full sm:w-1/2"
        src="https://cdn.muni.cz/media/3325889/dsc00447e.jpg?mode=crop&center=0.51,0.61&rnd=132684945840000000&heightratio=0.621&width=600"
        width="600"
        height="450"
      >
    </div>
    <h1 class="text-center text-2xl md:text-4xl text-primary my-8 font-bold dark:text-white">ESN Brno United</h1>

    <p class="prose prose-lg dark:prose-invert mx-auto text-justify">
      This event is co-organised by ESN MUNI Brno, ESN VUT, and ESN MENDELU Brno. <em>Together we form ESN Brno
      United</em> and
      we
      have a long tradition of organising events. Every semester we organise Tram Party, Boat Party, Quiz Nights, and
      many other events. And this May, we would like to invite you to Brno to experience Morava from a <strong>different
      perspective</strong>.

    </p>
    <img
      src="../assets/img/esn-bu-anniversary.jpg"
      alt="That's us, ESN Brno United" class="my-8" height="832" width="1784"
    >

    <div class="flex flex-row items-center my-16">
      <div class="flex-grow h-1 bg-secondary rounded-full"></div>
      <h2 class="text-3xl md:text-5xl font-bold text-primary dark:text-white mx-4">Our Partners</h2>
      <div class="flex-grow h-1 bg-secondary rounded-full"></div>
    </div>

    <ul class="flex flex-row items-center justify-center flex-wrap lg:-mx-6 bg-white dark:pt-6">
      <li
        v-for="p in partners"
        class="w-full sm:w-1/2 md:w-1/3 px-6 pb-12 bg-white flex justify-center items-center"
      >
        <img
          :class="{'w-full': p.includes('.svg')}"
          :src="p"
          alt=""
          class="max-w-full max-h-24 h-auto mx-auto"
        >
      </li>
    </ul>

  </article>
</template>

<script>
export default {
  name: "AboutPage",
  asyncData() {
    return {
      partners: [
        require('../assets/partners/vut.svg'),
        require('../assets/partners/mendelu.svg'),
        require('../assets/partners/muni.svg'),


        require('../assets/partners/vodafone.jpg'),
        require('../assets/partners/hoppygo.png'),

        require('../assets/partners/dzs.svg'),
        require('../assets/partners/kpmg.png'),

        require('../assets/partners/esf.svg'),

        require('../assets/partners/svet-plodu.svg'),
        require('../assets/partners/ponozkovice.svg'),
        require('../assets/partners/mandlarna.jpg'),
        require('../assets/partners/pijumate.png'),
        require('../assets/partners/ciderka.svg'),
      ]
    }
  },

  head() {
    return {
      title: 'About'
    };
  },
}
</script>

<style scoped>

</style>
