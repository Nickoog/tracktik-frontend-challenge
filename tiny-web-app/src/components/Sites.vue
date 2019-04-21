<template>
    <div class="">
        Infos: {{infos}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                infos: this.$route.params.infos
            }
        },
    }
</script>