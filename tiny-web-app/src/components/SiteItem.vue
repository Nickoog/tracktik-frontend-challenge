<template>
    <router-link :to = "{ name:'infos', params: {id: value.id} }" class="bg-white">
        <div class="item-container d-flex justify-content-between align-items-center border-top px-3 pt-2">
            <div class="left-section d-flex align-items-center">
                <div class="image-wrapper">
                    <img :src="value.images[0]" alt="Avatar" class="rounded-circle"> 
                </div>
                <div class="info-container ml-3">
                    <p>
                        <strong>{{ value.title }}</strong>
                    </p>
                    <p>
                        {{ value.address.street }}, 
                        {{ value.address.city }} 
                        {{ value.address.state }}
                        {{ value.address.zipCode }}
                    <br> 
                        {{ value.address.city }}
                    </p>
                    <p> 
                        {{ value.contacts.main.firstName }} 
                        {{ value.contacts.main.lastName }} 
                    </p>
                </div>
            </div>
            <div class="right-section">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {value: Object},
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss">
    @import '../assets/style/site-item';
</style>