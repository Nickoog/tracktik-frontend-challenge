<template>
    <div class="item-container d-flex justify-content-between align-items-center border p-3">
        <div class="left-section d-flex align-items-center">
            <div class="image-wrapper">
                <img :src="value.images[0]" alt="Avatar" class="rounded-circle"> 
            </div>
            <div class="info-container">
                <p>
                    <strong>{{ value.title }}</strong>
                </p>
                <p>
                    {{ value.address.street }}, 
                    {{ value.address.city }} 
                    {{ value.address.state }}
                    {{ value.address.zipCode }}
                </p>
                <p> 
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
    @import '../style/site-item';
</style>