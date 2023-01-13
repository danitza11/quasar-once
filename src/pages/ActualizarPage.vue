<template>
  
  <div class="q-pa-md">
    <q-table
      title="Proyectos"
      :rows="rows"
      :columns="columns"
      color="primary"
      row-key="name"
    >
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="las la-plus-square"
          label="Agregar proyecto"
          to="/NuevoPage" 
          no-caps
        />
      </template> 

      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="la la-sync-alt" to="/ActualizardosPage" @click="onEdit(props.row)"></q-btn>
        </q-td>
      </template>


    </q-table>
  </div>

</template>



<script>
import { exportFile, useQuasar } from 'quasar'

const columns = [
  {
    name: 'index',
    label: '#',
    field: 'index',
    align: 'center'
  },
  {
    name: 'name',
    required: true,
    label: 'Nombre de proyecto',
    align: 'left',
    field: row => row.name,
    format: val => val,
    sortable: true
  },
  
///Definiendo una colunma

  { name: 'actions', label: 'Acciones' },

]

const rows = [
{
    index: 1,
    name: 'REHABILITACION Y MEJORAMIENTO DE LA CARRETERA EMP. PE-3S PUNO-VILQUE-MAÑAZO-EMP. PE-34A HUATAQUITA',
    calories: 'Actualizar',
    
  },
  
  {
    index: 2,
    name: 'DESARROLLO INTEGRAL DE NIÑOS Y NIÑAS EN EL SECTOR RURAL DEL DEPARTAMENTO DE PUNO',
    calories: 'Actualizar',
  },
  {
    index: 3,
    name: '	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO, CABECERA DE RED',
    
    calories: 'Actualizar',
  },
  {
    index: 4,
    name: '	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO, CABECERA DE RED',
    calories: 'Actualizar', 
  }, 
  {
    index: 5,
    name: 'REHABILITACION Y MEJORAMIENTO DE LA CARRETERA EMP. PE-3S PUNO-VILQUE-MAÑAZO-EMP. PE-34A HUATAQUITA',
    calories: 'Actualizar',
    
  },
  
  {
    index: 6,
    name: 'DESARROLLO INTEGRAL DE NIÑOS Y NIÑAS EN EL SECTOR RURAL DEL DEPARTAMENTO DE PUNO',
    calories: 'Actualizar',
  },
  {
    index: 7,
    name: '	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO, CABECERA DE RED',
    
    calories: 'Actualizar',
  },
  {
    index: 8,
    name: '	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO, CABECERA DE RED',
    calories: 'Actualizar', 
  }, 
  {
    index: 9,
    name: '	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO, CABECERA DE RED',
    calories: 'Actualizar', 
  }, 
  {
    index: 10,
    name: 'REHABILITACION Y MEJORAMIENTO DE LA CARRETERA EMP. PE-3S PUNO-VILQUE-MAÑAZO-EMP. PE-34A HUATAQUITA',
    calories: 'Actualizar',
    
  },
  
  {
    index: 11,
    name: 'DESARROLLO INTEGRAL DE NIÑOS Y NIÑAS EN EL SECTOR RURAL DEL DEPARTAMENTO DE PUNO',
    calories: 'Actualizar',
  },
  {
    index: 12,
    name: '	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO, CABECERA DE RED',
    
    calories: 'Actualizar',
  },
  {
    index: 13,
    name: '	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO, CABECERA DE RED',
    calories: 'Actualizar', 
  }, 
]


export default {
  setup () {
    

    return {
      columns,
      rows,


    }
  }
}
</script>



<style lang="sass">
.q-pa-md
  
  width: 1000px

</style>
