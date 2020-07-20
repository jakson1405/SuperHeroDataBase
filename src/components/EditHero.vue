<template v-slot:activator="{ on }">
            <v-container>
                <v-dialog width="400px" activator="#foo" v-model="modal">
                    <v-card>
                       <v-container>
                           <v-layout row>
                               <v-flex xs12>
                                   <v-card-title>
                                       <h1 class="text--primary">
                                           Edit Hero

                                       </h1>
                                   </v-card-title>

                               </v-flex>
                           </v-layout>
                           <v-layout row>
                               <v-flex xs12>
                                   <v-card-text>
                                       <v-text-field
                                               v-model="editedNickname"
                                               name="Nickname"
                                               label="Input Nickname"
                                               multi-line
                                               type="text"
                                       ></v-text-field>
                                   </v-card-text>

                               </v-flex>
                           </v-layout>
                           <v-layout row>
                               <v-flex xs12>
                                   <v-card-text>
                                       <v-text-field
                                               v-model="editRealName"
                                               name="input-1-3"
                                               label="Input Real name"
                                               multi-line
                                       ></v-text-field>
                                   </v-card-text>

                               </v-flex>
                           </v-layout>
                           <v-layout row>
                               <v-flex xs12>
                                   <v-card-text>
                                       <v-text-field
                                               v-model="editDescription"
                                               name="input-1-3"
                                               label="Input Origin description"
                                               multi-line
                                       ></v-text-field>
                                   </v-card-text>

                               </v-flex>
                           </v-layout>
                           <v-layout row>
                               <v-flex xs12>
                                   <v-card-text>
                                       <v-text-field
                                               v-model="editSuperpowers"
                                               name="input-1-3"
                                               label="Input Superpower"
                                               multi-line
                                       ></v-text-field>
                                   </v-card-text>

                               </v-flex>
                           </v-layout>
                           <v-layout row>
                               <v-flex xs12>
                                   <v-card-text>
                                       <v-text-field
                                               v-model="editPhrase"
                                               name="input-1-3"
                                               label=" Input Catchphrase"
                                               multi-line
                                       ></v-text-field>
                                   </v-card-text>

                               </v-flex>
                           </v-layout>
                           <v-layout row>
                               <v-flex xs12>
                                   <v-card-text>
                                       <v-text-field
                                               v-model="editImage"
                                               name="input-1-3"
                                               label="Input ImageUrl"
                                               multi-line
                                       ></v-text-field>
                                   </v-card-text>

                               </v-flex>
                           </v-layout>
                           <v-layout row>
                               <v-flex xs12>
                                   <v-card-actions>
                                       <v-spacer></v-spacer>
                                       <v-btn @click="onCancel">Cancel</v-btn>
                                       <v-btn @click="onSave" class="success">Save</v-btn>


                                   </v-card-actions>

                               </v-flex>
                           </v-layout>
                       </v-container>
                    </v-card>
                </v-dialog>
                <v-btn color="warning" id="foo">Edit</v-btn>

            </v-container>

</template>

<script>
    export default {
        props: ['hero'],
        name: "EditHero",
        data(){
            return{
                modal: false,
                editedNickname: this.hero.nickname,
                editRealName:this.hero.real_name,
                editDescription:this.hero.origin_description,
                editSuperpowers:this.hero.superpowers,
                editPhrase:this.hero.catch_phrase,
                editImage:this.hero.imgSrc


            }
        },
        methods:{
            onCancel(){
                this.editedNickname = this.hero.nickname
                this.editRealName = this.hero.real_name
                this.editDescription = this.hero.origin_description
                this.editSuperpowers = this.hero.superpowers
                this.editPhrase = this.hero.catch_phrase
                this.editImage = this.hero.imgSrc
                this.modal = false
            },
            onSave(){
                this.modal = false
                this.$store.dispatch('updateHero',{
                    nickname:this.editedNickname,
                    real_name:this.editRealName,
                    origin_description:this.editDescription,
                    superpowers:this.editSuperpowers,
                    catch_phrase:this.editPhrase,
                    imgSrc:this.editImage,
                    id: this.hero.id,

                })

            }
        }
    }
</script>

<style scoped>

</style>