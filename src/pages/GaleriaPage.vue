<template>
<q-page :style-fn="myTweak" padding>
    <div class="q-pa-md">
    <div class="row">
        <div class="col-sm-9">
        <div class="col-12 col-md-3">
            <q-table
            dense
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
                <q-btn
                    icon="la la-photo-video"
                    @click="onEdit(props.row)"
                    to="/GaleriadosPage"
                ></q-btn>
                </q-td>
            </template>
            </q-table>
        </div>
        </div>
    </div>
    </div>
</q-page>
</template>

<script>
import { exportFile, useQuasar } from "quasar";

const columns = [
{
    name: "index",
    label: "#",
    field: "index",
    align: "center",
},
{
    name: "name",
    required: true,
    label: "Nombre de proyecto",
    align: "left",
    field: (row) => row.name,
    format: (val) => val,
    sortable: true,
},

///Definiendo una colunma

{ name: "actions", label: "Acciones" },
];

const rows = [
{
    index: 1,
    name: "CONSTRUCCION Y MEJORAMIENTO DE LA CARRETERA SAN JOSE - ISILLUMA DE ALTO INAMBARI",
    calories: "Actualizar",
},

{
    index: 2,
    name: "DESARROLLO INTEGRAL DE NIÑOS Y NIÑAS EN EL SECTOR RURAL ",
    calories: "Actualizar",
},
{
    index: 3,
    name: "	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO",

    calories: "Actualizar",
},
{
    index: 4,
    name: "	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO",
    calories: "Actualizar",
},

{
    index: 5,
    name: "CONSTRUCCION Y MEJORAMIENTO DE LA CARRETERA SAN JOSE - ISILLUMA DE ALTO INAMBARI",
    calories: "Actualizar",
},

{
    index: 6,
    name: "DESARROLLO INTEGRAL DE NIÑOS Y NIÑAS EN EL SECTOR RURAL ",
    calories: "Actualizar",
},
{
    index: 7,
    name: "	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO",

    calories: "Actualizar",
},
{
    index: 8,
    name: "	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO",
    calories: "Actualizar",
},
{
    index: 9,
    name: "CONSTRUCCION Y MEJORAMIENTO DE LA CARRETERA SAN JOSE - ISILLUMA DE ALTO INAMBARI",
    calories: "Actualizar",
},

{
    index: 10,
    name: "DESARROLLO INTEGRAL DE NIÑOS Y NIÑAS EN EL SECTOR RURAL ",
    calories: "Actualizar",
},
{
    index: 11,
    name: "	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO",

    calories: "Actualizar",
},
{
    index: 12,
    name: "	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO",
    calories: "Actualizar",
},
{
    index: 13,
    name: "CONSTRUCCION Y MEJORAMIENTO DE LA CARRETERA SAN JOSE - ISILLUMA DE ALTO INAMBARI",
    calories: "Actualizar",
},

{
    index: 14,
    name: "DESARROLLO INTEGRAL DE NIÑOS Y NIÑAS EN EL SECTOR RURAL ",
    calories: "Actualizar",
},
{
    index: 15,
    name: "	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO",

    calories: "Actualizar",
},
{
    index: 16,
    name: "	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO",
    calories: "Actualizar",
},
{
    index: 17,
    name: "CONSTRUCCION Y MEJORAMIENTO DE LA CARRETERA SAN JOSE - ISILLUMA DE ALTO INAMBARI",
    calories: "Actualizar",
},

{
    index: 18,
    name: "DESARROLLO INTEGRAL DE NIÑOS Y NIÑAS EN EL SECTOR RURAL ",
    calories: "Actualizar",
},
{
    index: 19,
    name: "	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO",

    calories: "Actualizar",
},
{
    index: 20,
    name: "	OPTIMIZAR LA CAPACIDAD DE RESPUESTA EN EL HOSPITAL SAN JUAN DE DIOS DE AYAVIRI PUNO",
    calories: "Actualizar",
},





];

export default {
setup() {
    return {
    columns,
    rows,
    };
},
};
</script>

<style lang="sass">



</style>
