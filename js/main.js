'use strict'

// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue

createApp({
    data() {
        return {
        mails: []
        }
    },
    methods: {

    },
    created() {
        for(let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.mails.push(response.data.response);
            });

        }
    }
}).mount('#app')