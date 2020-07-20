<template>
    <v-container>
        <v-layout row>
            <v-flex xs12
                    sm6
                    offset-sm3
            >
                <v-card class="card" elevation="10" mb-5
                        v-for="hero in heroes"
                        :key="hero.id"


                >
                    <v-layout row>
                        <v-flex xs8>
                            <v-img
                                    :src="hero.imgSrc"
                            >

                            </v-img>
                        </v-flex>
                        <v-flex xs4>
                            <v-card-text >
                                <h2 class="text--primary">{{hero.nickname}}</h2>
                                <p>{{hero.real_name}}</p>
                            </v-card-text>
                            <v-spacer></v-spacer>
                            <br>
                            <br>
                            <br>
                            <v-card-actions class="bthHeroCard mb-3">

                                <v-btn block class="warning mr-3" :to="/hero/ + hero.id">Open</v-btn>

                            </v-card-actions>
                        </v-flex>

                    </v-layout>
                </v-card>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Heroes",
        computed: {
            heroes(){
                return this.$store.getters.heroes
            }
        },
    }
</script>

<style scoped>
    .card{
        margin-bottom: 50px;
    }
    .bthHeroCard{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>