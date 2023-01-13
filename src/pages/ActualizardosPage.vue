<template>
  <!-- Informacion Gneral -->  
  <div>
    <q-page class="q-pt-lg">
      <div>
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

        <!-- Parte de financiamineto -->

        <div>
          <span class="text-weight-bolder q-pl-md">Año 2022</span>

          <div class="q-pa-md row items-start q-gutter-lg">
            <div class="uno">
              <q-table
                dense
                :rows="fi"
                :columns="co"
                color="primary"
                row-key="name"
                hide-bottom
              >
              </q-table>
            </div>

            <q-separator spaced inset vertical dark />

            <div class="uno">
              <q-table
                dense
                :rows="fipim"
                :columns="copim"
                color="primary"
                row-key="name"
                hide-bottom
              >
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <q-btn
                      icon="las la-edit"
                      color="primary"
                      size="10px"
                      @click="onEdit(props.row)"
                    ></q-btn>
                  </q-td>
                </template>
              </q-table>
            </div>

            <q-separator spaced inset vertical dark />

            <div class="uno">
              <q-table
                dense
                :rows="fide"
                :columns="code"
                color="primary"
                row-key="name"
                hide-bottom
              >
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <q-btn
                      icon="las la-edit"
                      color="primary"
                      size="10px"
                      @click="onEdit(props.row)"
                    ></q-btn>
                  </q-td>
                </template>
              </q-table>
            </div>
          <q-separator spaced inset vertical dark />    
    <div class="primero">
      <q-table
        title="Avance presupuestal fisico"
        dense
        :rows="fiava"
        :columns="colava"
        color="primary"
        row-key="name"
        :hide-pagination="true"
      >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              icon="lar la-edit"
              size="10px"
              color="primary"
              @click="onEdit(props.row)"
            ></q-btn>
          </q-td>
        </template>

        <template #bottom-row>
          <q-tr class="bg-blue-1">
            <q-td class="text-ligth"> Avance fisico: </q-td>
            <q-td />
            <q-td class="text-left">
              {{ sumBy(fiava, "costo") }}
            </q-td>
            <q-td class="text-left">
              {{ sumBy(fiava, "avance") }}
            </q-td>
            <q-td class="text-left">
              {{ sumBy(fiava, "avancep") }}
            </q-td>
            <q-td class="text-left"> </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <q-separator spaced inset vertical dark />

    <div class="segundo">
      <q-table
        dense
        :rows="fis"
        :columns="cols"
        color="primary"
        row-key="name"
        :hide-pagination="true"
      >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              icon="lar la-edit"
              size="10px"
              color="primary"
              @click="onEdit(props.row)"
            ></q-btn>
          </q-td>
        </template>

        <template #bottom-row>
          <q-tr class="bg-blue-1">
            <q-td class="text-bold"> Avance total : </q-td>
            <q-td />
            <q-td class="text-left">
              {{ sumBy(fis, "costo") }}
            </q-td>
            <q-td class="text-left">
              {{ sumBy(fis, "avance") }}
            </q-td>
            <q-td class="text-left">
              {{ sumBy(fis, "avancep") }}
            </q-td>
            <q-td class="text-left"> </q-td>
          </q-tr>
        </template>
      </q-table>
      <q-separator spaced inset vertical dark />

      <div horizontal align="end">
              <q-btn color="light-blue-10" label="Consultar" />
      </div>

    </div>


          </div>
        </div>
      </div>



      <q-separator spaced inset vertical dark />





    </q-page>
  </div>
</template>

<script>
import { exportFile, useQuasar } from "quasar";
import { copyToClipboard } from "quasar";
import { ref } from "vue";
import { sumBy, meanBy } from "lodash-es";

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

const co = [
  {
    name: "name",
    required: true,
    label: "PIA",
    align: "left",
    field: (row) => row.name,
    format: (val) => val,
    sortable: true,
  },

  ///Definiendo una colunma
];

const fi = [
  {
    name: "S/. 10 000 000            ",
  },
];

///// Data para pim
const copim = [
  {
    name: "name",
    required: true,
    label: "PIM",
    align: "left",
    field: (row) => row.name,
    format: (val) => val,
    sortable: true,
  },

  ///Definiendo una colunma

  { name: "actions", label: " " },
];

const fipim = [
  {
    name: "S/. 15 456 154.20",
  },
];

///Data para devengado

const code = [
  {
    name: "name",
    required: true,
    label: "Devengado",
    align: "left",
    field: (row) => row.name,
    format: (val) => val,
    sortable: true,
  },

  ///Definiendo una colunma

  { name: "actions", label: " " },
];

const fide = [
  {
    name: "S/. 7 005 641",
  },
];

const colava = [
  {
    name: "numero",
    label: "#",
    field: "numero",
    align: "left",
  },
  {
    name: "componentes",
    required: true,
    label: "Componentes",
    align: "left",
    field: (row) => row.name,
    format: (val) => val,
    sortable: true,
  },

  {
    name: "costo",
    required: true,
    label: "Costo total actual (S/.)",
    align: "left",
    field: "costo",
    sortable: true,
  },

  {
    name: "avance",
    required: true,
    label: "Avance total (S/.)",
    align: "left",
    field: "avance",
    sortable: true,
  },

  {
    name: "avancep",
    label: "Avance (%)",
    align: "left",
    field: "avancep",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },

  ///Definiendo una colunma con iconos

  { name: "actions", label: "Acciones" },
];

const fiava = [
  {
    numero: 1,
    name: "TRAMO SANTIAGO PAMPA-SANTA ROSA ",
    costo: 6854637,
    avance: 2762766,
    avancep: 40.31,
  },
  {
    numero: 2,
    name: "TRAMO SANTA ROSA (QUINSA REMOLINO) - ISILLUMA",
    costo: 7179777,
    avance: 879345,
    avancep: 12.25,
  },
];

const cols = [
  {
    name: "numero",
    label: "#",
    field: "numero",
    align: "left",
  },
  {
    name: "componentes",
    required: true,
    label: "Componentes",
    align: "left",
    field: (row) => row.name,
    format: (val) => val,
    sortable: true,
  },

  {
    name: "costo",
    required: true,
    label: "Costo total actual (S/.)",
    align: "left",
    field: "costo",
    sortable: true,
  },

  {
    name: "avance",
    required: true,
    label: "Avance total (S/.)",
    align: "left",
    field: "avance",
    sortable: true,
  },

  {
    name: "avancep",
    label: "Avance (%)",
    align: "left",
    field: "avancep",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },

  ///Definiendo una colunma con iconos

  { name: "actions", label: "Acciones" },
];

const fis = [
  {
    numero: 1,
    name: "COSTO EN LA GESTION DEL PROYECTO - CARRETERA",
    costo: 6854637,
    avance: 2762766,
    avancep: 40.31,
  },
  {
    numero: 2,
    name: "EXPEDIENTE TÉCNICO	",
    costo: 7179777,
    avance: 879345,
    avancep: 12.25,
  },
  {
    numero: 3,
    name: "SUPERVISIÓN",
    costo: 6854637,
    avance: 2762766,
    avancep: 40.31,
  },
  {
    numero: 4,
    name: "LIQUIDACION",
    costo: 7179777,
    avance: 879345,
    avancep: 12.25,
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
      data,
      coldos,
      fi,
      co,
      fipim,
      copim,
      fide,
      code,
      copyToClipboard,
      fiava,
      colava,
      sumBy,
      meanBy,
      cols,
      fis,

    };
  },
};
</script>

<style lang="sass">
.uno
  width: 300px
.pri
  width: 983px
.primero
  width: 983px
.segundo
  width: 983px

</style>
