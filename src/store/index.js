import firebase from 'firebase/app'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
class Hero {
  constructor(nickname, real_name,origin_description,superpowers,catch_phrase, imgSrc = '', id = null) {
    this.nickname = nickname
    this.origin_description = origin_description
    this.superpowers = superpowers
    this.catch_phrase = catch_phrase
    this.real_name = real_name
    this.imgSrc = imgSrc
    this.id = id
  }
}
export default new Vuex.Store({
  state: {
    heroes: [
      // {
      //   imgSrc: 'https://w-dog.ru/wallpapers/6/18/504885268209481.jpg',
      //   nickname: 'Superman',
      //   real_name: 'Clark Kent',
      //   origin_description: `He was born Kal-El on the planet Krypton, before being rocketed to. Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction…`,
      //   superpowers: 'Solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…',
      //   catch_phrase: `Look, up in the sky, it's a bird, it's a plane, it's Superman!`,
      //   id: 'Superman'
      //
      // },
      // {
      //   imgSrc: 'https://moi-portal.ru/upload/iblock/957/957d67ff6296e281878a124b46ab71fb.jpg',
      //   nickname: 'Batman',
      //   real_name: 'Bruce Wayne',
      //   origin_description: 'Batman originated from an incident in Bruce\'s childhood; after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
      //   superpowers: `Batman does not possess any inhuman superpowers. He does, however, possess a genius-level intellect and is a peerless martial artist, and  vast wealth affords him an extraordinary arsenal of weaponry and equipment.`,
      //   catch_phrase: 'I am vengeance, I am the night, I am Batman!',
      //   id:'Batman'
      // },
      // {
      //   imgSrc: 'https://images7.alphacoders.com/322/thumb-1920-322052.jpg',
      //   nickname: 'Hulk',
      //   real_name: 'Bruce Banner',
      //   origin_description: 'Bioscience genius Dr. Bruce Banner focused his major studies on the effects of gamma radiation on humans, working alongside Dr. Betty Ross at a Virginia University lab. Dr. Ross’ father, General “Thunderbolt” Ross of the U.S. Army, channeled Banner’s work into a program to develop weapons for the military, unbeknownst to both doctors. When Banner decided to test what he learned on himself, he triggered a fantastic transformation in himself that resulted in an immense, hulking figure fueled by his own rage.',
      //   superpowers: 'Banner is physically transformed into the Hulk when subjected to emotional stress, at or against his will, often leading to destructive rampages and conflicts that complicate Banner\'s civilian life. The Hulk\'s level of strength is normally conveyed as proportionate to his level of anger.',
      //   catch_phrase: 'Don\'t make me angry. You wouldn\'t like me when I\'m angry',
      //   id: 'Hulk'
      // },

    ],
  },
  mutations: {
    createHeroMutation(state, payload){
      state.heroes.push(payload)
    },
    loadHeroes(state, payload){
      state.heroes = payload
    },
    updateHero(state, { nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      imgSrc,
      id}){
      const hero = state.heroes.find(a => {
        return a.id === id
      })
      hero.nickname = nickname
      hero.real_name = real_name
      hero.origin_description = origin_description
      hero.superpowers = superpowers
      hero.catch_phrase = catch_phrase
      hero.imgSrc = imgSrc
    },
    deleteHero(){
      // state.heroes.splice(payl,1)
    }
  },
  actions: {

    async createHero ({commit}, payload){
      commit('clear error')
      commit('setLoading', true)
      try {
        const newHero = new Hero(
            payload.nickname,
            payload.real_name,
            payload.origin_description,
            payload.superpowers,
            payload.catch_phrase,
            payload.imgSrc,
            payload.id)
        const hero = await  firebase.database().ref('heroes').push(newHero)
        commit('createHeroMutation', {
          ...newHero,
          id: hero.key
        })
        console.log(hero)
      }
      catch (error){
        commit('setError', error.message)
        commit('setLoading', false)

        console.log(error)
      }


    },
    async fetchHeroes({commit}){
      const resultHeroes = []
      try {
        commit('clearError')
      const fbValue = await firebase.database().ref('heroes').once('value')
        const heroes = fbValue.val()
        console.log(heroes)
        Object.keys(heroes).forEach(key => {
          const hero = heroes[key]
          resultHeroes.push(
              new Hero(
                  hero.nickname,
                  hero.real_name,
                  hero.origin_description,
                  hero.superpowers,
                  hero.catch_phrase,
                  hero.imgSrc,
                  key)
          )
        })
        commit('loadHeroes', resultHeroes)


      }
      catch (e) {
        console.log(e)

      }
    },
    async updateHero({commit},{
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      imgSrc,
      id}){
      commit('clearError')
      try {
        await firebase.database().ref('heroes').child(id).update({
          nickname,
          real_name,
          origin_description,
          superpowers,
          catch_phrase,
          imgSrc
        })
        commit('updateHero',{
          nickname,
          real_name,
          origin_description,
          superpowers,
          catch_phrase,
          imgSrc,
          id
        })
      }
      catch (e) {
        console.log(e)
      }
    }  ,
    async deleteHero({commit},{
        key}){
      commit('clearError')
      try {
        await firebase.database().ref('heroes').child(key).remove()
        commit('deleteHero',{
          key
        })
      }
      catch (e) {
        console.log(e)
      }
    }
  },
  getters:{
    heroes(state){
      return state.heroes
    },
    heroById(state){
      return heroId => {
        return state.heroes.find(hero => hero.id === heroId)

      }
    }

  },
  modules: {
  }
})
