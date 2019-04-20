<template>
    <div id="app">
        <h3>{{title}}</h3>
        <button 
            class="btn btn-primary"
            @click="fetchClients"
        >
            fetch clients
        </button>
    </div>
</template> 

<script>
    export default {
        name: 'app',
        data() {
            return {
                title: 'Tiny app'
            }
        },
        methods: {
            fetchClients() {
                fetch('https://tracktik-frontend-challenge-jwidtarfww.now.sh/clients',{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => console.log(json))
            }
        }
    }
</script>

<style lang="scss">
    @import './sass/vue';
</style>