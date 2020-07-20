<template >
    <v-container>
        <v-layout row>
            <v-flex
                    xs12

            >
                <v-card dark v-if="!loading">
                    <v-img
                            :src="heroId.imgSrc"
                            height = '500px'
                    >
                    </v-img>
                    <v-card-text>
                        <v-card-title>Nickname: </v-card-title>
                        {{heroId.nickname}}
                    </v-card-text>
                    <v-card-text>
                        <v-card-title>Real name:  </v-card-title>
                        {{heroId.real_name}}
                    </v-card-text>
                    <v-card-text>
                        <v-card-title>Origin description:
                        </v-card-title>
                        {{heroId.origin_description}}
                    </v-card-text>
                    <v-card-text>
                        <v-card-title>Superpowers: </v-card-title>
                        {{heroId.superpowers}}
                    </v-card-text>
                    <v-card-text>
                        <v-card-title>Catchphrase: </v-card-title>
                        {{heroId.catch_phrase}}
                    </v-card-text>
                    <v-card-actions class="bthHeroCard">

                        <addEditHero :hero="heroId"></addEditHero>

                        <v-btn @click="deleteHero"
                                color="error"
                               text
                        >
                            Delete
                        </v-btn>
                    </v-card-actions>

                </v-card>
                <div v-else class="text-xl-center">
                    <v-progress-circular
                            :size="100"
                            :width="4"
                            indeterminate
                            color="purple">

                    </v-progress-circular>

                </div>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    import EditHero from "./EditHero";
    export default {
        props: ['id'],
        data(){
            return{
                // key: this.id
            }
            },
        methods:{
            deleteHero(){
               const key = this.id
                console.log('hero', this.id)
                this.$store.dispatch('deleteHero',{
                    key


                })
                    .then(() => {
                        this.$router.push('superheroes/')
                        window.location.reload()
                    })
                    .catch(() => {})
                // window.location.reload()

            }
        },

        computed: {
            heroId(){
                const id = this.id
                return this.$store.getters.heroById(id)
            },
            loading(){
                return this.$store.getters.loading
            }
        },
        components:{
             addEditHero: EditHero
        }
    }
</script>

<style scoped>
    .bthHeroCard{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
</style>