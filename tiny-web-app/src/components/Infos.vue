<template>
    <div class="infos">
        <a href="#" @click="goBack" class="item-container d-flex align-items-center px-2 py-1 bg-primary" v-if="clientInfo">
            <div class="left-section">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div class="right-section d-flex align-items-center ml-3">
                <div class="image-wrapper">
                    <img :src="clientInfo.images[0]" alt="Avatar" class="rounded-circle"> 
                </div>
                <div class="info-container ml-3">
                    <p>
                        <strong>{{ clientInfo.title }}</strong>
                    </p>
                    <p>
                        {{ clientInfo.address.street }}, 
                        {{ clientInfo.address.city }} 
                        {{ clientInfo.address.state }}
                        {{ clientInfo.address.zipCode }}
                    <br>
                        {{ clientInfo.address.city }}
                    </p>
                    <p class="m-0"> 
                        {{ clientInfo.contacts.main.firstName }} 
                        {{ clientInfo.contacts.main.lastName }} 
                    </p>
                </div>
            </div>
        </a>
        <div class="bg-image"></div>
        <div class="description-container p-3" v-if="clientInfo">
            <div class="d-flex align-items-baseline my-3">
                <i class="fa fa-user" aria-hidden="true"></i>
                <p>
                    {{ clientInfo.contacts.main.firstName }} 
                    {{ clientInfo.contacts.main.lastName }}
                    <br>
                    {{ clientInfo.contacts.main.jobTitle }}
                </p>
            </div>
            <div class="d-flex align-items-baseline my-3">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p>
                    + {{ clientInfo.contacts.main.phoneNumber }} 
                </p>
            </div>
            <div class="d-flex align-items-baseline my-3">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <p>
                    {{ clientInfo.contacts.main.email }} 
                </p>
            </div>
            <div class="d-flex align-items-baseline my-3">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <p>
                    {{ clientInfo.contacts.main.address.street }}, 
                <br>
                    {{ clientInfo.contacts.main.address.city }} 
                <br>
                    {{ clientInfo.contacts.main.address.state }}
                    {{ clientInfo.contacts.main.address.zipCode }}
                <br>
                    {{ clientInfo.contacts.main.address.city }}
                </p>
            </div>
        </div>
        <Loading v-if="loading"/>
    </div>
</template>

<script>
    import Loading from './Loading.vue';

    export default {
        components: {
            Loading
        },
        data() {
            return {
                loading: false,
                clientInfo: null
            }
        },
        methods: {
            goBack () {
                window.history.length > 1 ? 
                this.$router.go(-1)
                : this.$router.push('/')
            },
            getSiteInfos (id) {
                this.loading = true
                fetch(`https://tracktik-frontend-challenge-jwidtarfww.now.sh/sites?id=${id}`,{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => {
                    this.loading = false
                    this.clientInfo = json[0]
                })
            }
        },
        created() {
            this.getSiteInfos(this.$route.params.id)
        },
        watch: {
            '$route': 'getSiteInfos'
        },
    }
</script>

<style lang="scss">
    @import '../assets/style/infos';
</style>