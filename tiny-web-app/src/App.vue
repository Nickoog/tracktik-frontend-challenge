<template>
    <div id="app">
        <Header />
        <Sites />
    </div>
</template> 

<script>
    import Header from './components/Header.vue';
    import Sites from './components/Sites.vue';

    export default {
        name: 'app',
        components: {
            Header,
            Sites
        }
    }
</script>

<style lang="scss">
    @import './style/vue';
</style>