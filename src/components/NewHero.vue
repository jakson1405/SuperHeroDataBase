<template>
    <v-container fluid>
        <v-layout row>

            <v-flex xs4>
                <v-subheader>Nickname</v-subheader>
            </v-flex>
            <v-flex xs8>
                <v-text-field
                        v-model="nickname"
                        name="input-1-3"
                        label="Input Nickname"
                        single-line
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs4>
                <v-subheader>Real Name</v-subheader>
            </v-flex>
            <v-flex xs8>
                <v-text-field
                        v-model="real_name"
                        name="input-2-3"
                        label="Input Real Name"
                        class="input-group--focused"
                        single-line
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs4>
                <v-subheader>Origin description</v-subheader>
            </v-flex>
            <v-flex xs8>
                <v-text-field
                        v-model="origin_description"
                        name="input-3-3"
                        label="Input Origin description"

                        class="input-group--focused"
                        single-line
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs4>
                <v-subheader>Superpower</v-subheader>
            </v-flex>
            <v-flex xs8>
                <v-text-field
                        v-model="superpowers"
                        name="input-3-4"
                        label="Input Superpower"

                        single-line
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs4>
                <v-subheader>Catchphrase</v-subheader>
            </v-flex>
            <v-flex xs8>
                <v-text-field
                        v-model="catch_phrase"
                        name="input-3-4"
                        label="Input Catchphrase"

                        single-line
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs4>
                <v-subheader>Image Url</v-subheader>
            </v-flex>
            <v-flex xs8>
                <v-text-field
                        v-model="imgSrc"
                        name="input-3-5"
                        label="Input ImageUrl"

                        single-line
                ></v-text-field>


                <v-layout row>
                    <v-flex xs12>
                        <v-btn
                                class="success"
                                @click="createHero"
                                :loading = 'loading'
                        >Create Hero</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>

        </v-layout>

    </v-container>
</template>

<script>
    export default {
        name: "NewHero",
        data(){
            return{
                imgSrc: '',
                nickname:'',
                real_name: '',
                origin_description: '',
                superpowers: '',
                catch_phrase: ''
            }
        },
        computed:{
            loading(){
                return this.$store.getters.loading

            }
        },

        methods: {

            createHero(){
                const hero = {
                    imgSrc: this.imgSrc,
                    nickname: this.nickname,
                    real_name: this.real_name,
                    origin_description: this.origin_description,
                    superpowers: this.superpowers,
                    catch_phrase: this.catch_phrase
                }
                this.$store.dispatch('createHero', hero)
                    .then(() => {
                        this.$router.push('superheroes/heroes')
                    })
                    .catch(() => {})


            },

        }


    }
</script>

<style scoped>

</style>