<template>
    <div>
        <v-container fluid>
            <v-carousel :show-arrows="false">
                <v-carousel-item
                        v-for="(hero,i) in heroes"
                        :key="i"
                        :src="hero.imgSrc"
                >
                    <div class="heroLink">
                        <v-btn class="error" :to="'/superheroes/hero/' + hero.id">
                            {{hero.nickname}}
                        </v-btn>
                    </div></v-carousel-item>
            </v-carousel>
        </v-container>
        <v-container id="heroRow" fluid >
            <v-layout row wrap>
                <v-flex xs12
                        sm6
                        md4
                        v-for="hero of heroes"
                        :key="hero.id">
                    <v-card dark

                            class="mx-auto heroCard"
                            max-width="400"
                    >
                        <v-img

                                height="200px"
                                :src="hero.imgSrc"
                        >

                        </v-img>

                        <v-card-text class="text--primary">
                            <div> <h2>{{hero.nickname}}</h2></div>
                            <br>
                            <div><h4>{{hero.real_name}}</h4></div>
                        </v-card-text>

                        <v-card-actions class="bthHeroCard">
                            <v-btn
                                    text
                                    :to="'/superheroes/hero/' + hero.id"
                            >
                                Open
                            </v-btn>



                        </v-card-actions>
                    </v-card>
                </v-flex>

            </v-layout>
        </v-container>

    </div>
</template>

<script>
    export default {
        name: "Home",
        computed: {
            heroes(){
                return this.$store.getters.heroes
            }
        },

    }
</script>

<style scoped>
    .heroCard {
        margin: 20px;

    }

    .bthHeroCard{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .heroLink {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50%, 0);
        padding: 5px 15px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;

    }
</style>