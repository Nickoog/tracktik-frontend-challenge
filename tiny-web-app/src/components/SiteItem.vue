<template>
    <div class="item-container d-flex justify-content-between align-items-center border p-3">
        <div class="left-section d-flex align-items-center">
            <div class="image-wrapper">
                <img :src="site.images[0]" alt="Avatar" class="rounded-circle"> 
            </div>
            <div class="info-container">
                <p>
                    <strong>{{ site.title }}</strong>
                </p>
                <p>
                    {{ site.address.street }}, 
                    {{ site.address.city }} 
                    {{ site.address.state }}
                    {{ site.address.zipCode }}
                </p>
                <p> 
                    {{ site.address.city }}
                </p>
                <p> 
                    {{ site.contacts.main.firstName }} 
                    {{ site.contacts.main.lastName }} 
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
                site: this.value
            }
        },
    }
</script>

<style lang="scss">
    @import '../style/site-item';
</style>