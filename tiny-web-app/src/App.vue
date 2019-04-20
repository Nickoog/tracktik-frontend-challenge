<template>
    <div id="app">
        <h3>{{title}}</h3>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            With Bootstrap!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</template> 

<script>
    export default {
        name: 'app',
        data() {
            return {
                title: 'Tiny app'
            }
        }
    }
</script>

<style lang="scss">
    @import './sass/vue';
</style>