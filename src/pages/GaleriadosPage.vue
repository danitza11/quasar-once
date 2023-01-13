<template>
  <!-- Informacion Gneral -->
  <div>
    <q-page class="q-pt-lg">
      <div class="q-pa-md">
        <span class="text-h6 q-pl-md">Informacion General del Proyecto</span>
        <div class="q-pa-md">
          <q-separator spaced inset vertical dark />
          <div class="pri">
            <q-table
              dense
              :rows="rows"
              :columns="columns"
              row-key="name"
              separator="cell"
              :hide-pagination="true"
            />

            <q-separator spaced inset vertical dark />

            <q-table
              dense
              :rows="data"
              :columns="coldos"
              separator="cell"
              row-key="name"
              hide-bottom
            />
            <q-separator spaced inset vertical dark />
          </div>
        </div>
      </div>

      <!-- Galeria imagenes videos -->

      <span class="text-weight-bold q-pl-xl">Activides del proyecto</span>
      <q-separator spaced inset vertical dark />

      <div horizontal align="end" class="q-pr-xl">
          <q-btn color="primary" label="Agregar" icon-right="las la-plus-square" />
        </div>

      <q-scroll-area style="height: 400px; max-width: 1010px">

        <div class="q-pa-xl">
          <div class="q-col-gutter-md row items-start">
            <div class="col-6">
              <q-carousel
                swipeable
                animated
                v-model="slide"
                thumbnails
                infinite
                height="250px"
                :autoplay="autoplay"
                ref="carousel"
              >
                <q-carousel-slide
                  :name="1"
                  img-src="http://4.bp.blogspot.com/_JzSqd6YaCaY/Sl1yM2xBCfI/AAAAAAAAFHo/ASmA58y2dLA/s400/Rendy.jpg"
                />

                <q-carousel-slide
                  :name="2"
                  img-src="https://www.actualidadambiental.pe/wp-content/uploads/2019/03/carreteras_amazonia_actualidad_ambiental_spda_1-700x469.jpg"
                />

                <q-carousel-slide
                  :name="3"
                  img-src="https://www.munitingomaria.gob.pe/mplp/sites/default/files//carretera.jpg"
                />

                <template v-slot:control>
                  <q-carousel-control
                    position="top-right"
                    :offset="[18, 18]"
                    class="text-white rounded-borders"
                    style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
                  >
                    <q-btn
                      push
                      round
                      dense
                      color="light-blue-10"
                      text-color="white"
                      icon="las la-pencil-alt"
                    />
                  </q-carousel-control>

                  <q-carousel-control position="bottom-right">
                    <q-btn
                      push
                      round
                      dense
                      color="light"
                      icon="las la-chevron-circle-left"
                      @click="$refs.carousel.previous()"
                    />
                    <q-btn
                      push
                      round
                      dense
                      color="light"
                      icon="las la-chevron-circle-right"
                      @click="$refs.carousel.next()"
                    />
                  </q-carousel-control>
                </template>
              </q-carousel>
            </div>

            <div class="col-6">
              <q-carousel
                swipeable
                animated
                v-model="slidec"
                thumbnails
                infinite
                height="250px"
              >
                <q-carousel-slide
                  :name="1"
                  img-src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-carousel-slide
                  :name="2"
                  img-src="https://mapio.net/images-p/15017316.jpg"
                />               
                <q-carousel-slide
                  :name="3"
                  img-src="https://cdn.quasar.dev/img/parallax1.jpg"
                />

                <template v-slot:control>
                  <q-carousel-control
                    position="top-right"
                    :offset="[18, 18]"
                    class="text-white rounded-borders"
                    style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
                  >
                    <q-btn
                      push
                      round
                      dense
                      color="light-blue-10"
                      text-color="white"
                      icon="las la-pencil-alt"
                    />
                  </q-carousel-control>

                  <q-carousel-control position="bottom-right">
                    <q-btn
                      push
                      round
                      dense
                      color="light"
                      icon="las la-chevron-circle-left"
                      @click="$refs.carousel.previous()"
                    />
                    <q-btn
                      push
                      round
                      dense
                      color="light"
                      icon="las la-chevron-circle-right"
                      @click="$refs.carousel.next()"
                    />
                  </q-carousel-control>
                </template>




              </q-carousel>       




            </div>

            <div class="col-6">
              <q-carousel
                swipeable
                animated
                v-model="slidet"
                thumbnails
                infinite
                height="250px"
              >
                <q-carousel-slide
                  :name="1"
                  img-src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-carousel-slide
                  :name="2"
                  img-src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-carousel-slide
                  :name="3"
                  img-src="https://www.aristegui.info/wp-content/uploads/2017/02/la-irrigacion-portada-2.jpg"
                />

                <template v-slot:control>
                  <q-carousel-control
                    position="top-right"
                    :offset="[18, 18]"
                    class="text-white rounded-borders"
                    style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
                  >
                    <q-btn
                      push
                      round
                      dense
                      color="light-blue-10"
                      text-color="white"
                      icon="las la-pencil-alt"
                    />
                  </q-carousel-control>

                  <q-carousel-control position="bottom-right">
                    <q-btn
                      push
                      round
                      dense
                      color="light"
                      icon="las la-chevron-circle-left"
                      @click="$refs.carousel.previous()"
                    />
                    <q-btn
                      push
                      round
                      dense
                      color="light"
                      icon="las la-chevron-circle-right"
                      @click="$refs.carousel.next()"
                    />
                  </q-carousel-control>
                </template>

              </q-carousel>
            </div>
            <div class="col-6">
              <q-carousel
                swipeable
                animated
                v-model="slidec"
                thumbnails
                infinite
                height="250px"
              >
                <q-carousel-slide
                  :name="1"
                  img-src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-carousel-slide
                  :name="2"
                  img-src="https://mapio.net/images-p/15017316.jpg"
                />               
                <q-carousel-slide
                  :name="3"
                  img-src="https://cdn.quasar.dev/img/parallax1.jpg"
                />

                <template v-slot:control>
                  <q-carousel-control
                    position="top-right"
                    :offset="[18, 18]"
                    class="text-white rounded-borders"
                    style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
                  >
                    <q-btn
                      push
                      round
                      dense
                      color="light-blue-10"
                      text-color="white"
                      icon="las la-pencil-alt"
                    />
                  </q-carousel-control>

                  <q-carousel-control position="bottom-right">
                    <q-btn
                      push
                      round
                      dense
                      color="light"
                      icon="las la-chevron-circle-left"
                      @click="$refs.carousel.previous()"
                    />
                    <q-btn
                      push
                      round
                      dense
                      color="light"
                      icon="las la-chevron-circle-right"
                      @click="$refs.carousel.next()"
                    />
                  </q-carousel-control>
                </template>




              </q-carousel>       




            </div>

            <div class="col-6">
              <q-carousel
                swipeable
                animated
                v-model="slidet"
                thumbnails
                infinite
                height="250px"
              >
                <q-carousel-slide
                  :name="1"
                  img-src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-carousel-slide
                  :name="2"
                  img-src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-carousel-slide
                  :name="3"
                  img-src="https://www.aristegui.info/wp-content/uploads/2017/02/la-irrigacion-portada-2.jpg"
                />

                <template v-slot:control>
                  <q-carousel-control
                    position="top-right"
                    :offset="[18, 18]"
                    class="text-white rounded-borders"
                    style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
                  >
                    <q-btn
                      push
                      round
                      dense
                      color="light-blue-10"
                      text-color="white"
                      icon="las la-pencil-alt"
                    />
                  </q-carousel-control>

                  <q-carousel-control position="bottom-right">
                    <q-btn
                      push
                      round
                      dense
                      color="light"
                      icon="las la-chevron-circle-left"
                      @click="$refs.carousel.previous()"
                    />
                    <q-btn
                      push
                      round
                      dense
                      color="light"
                      icon="las la-chevron-circle-right"
                      @click="$refs.carousel.next()"
                    />
                  </q-carousel-control>
                </template>

              </q-carousel>
            </div>

            <div class="col-6">
              <q-carousel
                swipeable
                animated
                v-model="slided"
                thumbnails
                infinite
                height="250px"
              >
                <q-carousel-slide
                  :name="1"
                  img-src="https://www.aristegui.info/wp-content/uploads/2017/02/la-irrigacion-portada-2.jpg"
                  class="imag"
                />
                <q-carousel-slide
                  :name="2"
                  img-src="https://cdn.quasar.dev/img/parallax1.jpg"
                  class="imag"
                />
                <q-carousel-slide
                  :name="3"
                  img-src="https://mapio.net/images-p/15017316.jpg"
                  class="imag"
                />

                <template v-slot:control>
                  <q-carousel-control
                    position="top-right"
                    :offset="[18, 18]"
                    class="text-white rounded-borders"
                    style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
                  >
                    <q-btn
                      push
                      round
                      dense
                      color="light-blue-10"
                      text-color="white"
                      icon="las la-pencil-alt"
                    />
                  </q-carousel-control>

                  <q-carousel-control position="bottom-right">
                    <q-btn
                      push
                      round
                      dense
                      color="light"
                      icon="las la-chevron-circle-left"
                      @click="$refs.carousel.previous()"
                    />
                    <q-btn
                      push
                      round
                      dense
                      color="light"
                      icon="las la-chevron-circle-right"
                      @click="$refs.carousel.next()"
                    />
                  </q-carousel-control>
                </template>





              </q-carousel>
            </div>
          </div>
        </div>
      </q-scroll-area>
    </q-page>
  </div>
</template>

<script>
import { ref } from "vue";
const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre de la inversion",
    align: "left",
    classes: "bg-light-blue-1",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "lugar",
    align: "left",
    label: "Lugar",
    field: "lugar",
    classes: "bg-light-blue-1",
    sortable: true,
  },
];

const rows = [
  {
    name: "CONSTRUCCION Y MEJORAMIENTO DE LA CARRETERA SAN JOSE -ISILLUMA DEL DISTRITO DE ALTO INAMBARI",
    lugar: "ALTO INAMBARI-SANDIA",
  },
];

const coldos = [
  {
    name: "cui",
    align: "left",
    label: "Codigo CUI",
    field: "cui",
    classes: "bg-light-blue-1",
    sortable: true,
  },
  {
    name: "snip",
    align: "left",
    label: "Codigo SNIP",
    field: "snip",
    classes: "bg-light-blue-1",
    sortable: true,
  },
  {
    name: "estado",
    align: "left",
    label: "Estado",
    field: "estado",
    classes: "bg-light-blue-1",
    sortable: true,
  },
  {
    name: "opmi",
    align: "left",
    label: "OPMI",
    field: "opmi",
    classes: "bg-light-blue-1",
    sortable: true,
  },
  {
    name: "uei",
    align: "left",
    label: "UEI",
    field: "uei",
    classes: "bg-light-blue-1",
    sortable: true,
  },
  {
    name: "modalidad",
    align: "left",
    label: "Modalidad Administracion",
    field: "modalidad",
    classes: "bg-light-blue-1",
    sortable: true,
  },
];
const data = [
  {
    cui: 2117087,
    snip: 3280,
    estado: "Activo",
    opmi: "OPMI del Gobierno Regional Puno",
    uei: "Gerencia Regional de Infraestructura - GRI",
    modalidad: "Directa",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
      data,
      coldos,
      slide: ref(1),
      slided: ref(1),
      slidet: ref(1),
      slidec: ref(1),
      autoplay: ref(false),
    };
  },
};
</script>

<style lang="sass">
.uno
  width: 300px
.pri
  width: 983px
.q-pr-xl
  padding-right: 119px
</style>

<!-- 


<template>
<div class="q-pa-md">
  <q-carousel
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    control-color="primary"
    navigation
    padding
    arrows
    height="300px"
    class="bg-grey-1 shadow-2 rounded-borders"
  >
    <q-carousel-slide :name="1" class="column no-wrap">
      <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
        <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" class="column no-wrap">
      <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
        <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="3" class="column no-wrap">
      <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
        <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
        <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="4" class="column no-wrap">
      <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
        <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
        <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
      </div>
    </q-carousel-slide>
  </q-carousel>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
setup () {
  return {
    slide: ref(1)
  }
}
}
</script>


























<template>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start">
    <div class="col-4">
      Ratio: 16/9
      <q-img
        src="https://placeimg.com/500/300/nature"
        :ratio="16/9"
      />
    </div>

    <div class="col-4">
      Ratio: 1
      <q-img
        src="https://placeimg.com/500/300/nature"
        :ratio="1"
      />
    </div>

    <div class="col-4">
      Ratio: 4/3
      <q-img
        src="https://placeimg.com/500/300/nature"
        :ratio="4/3"
      />
    </div>
  </div>
</div>
</template> -->
