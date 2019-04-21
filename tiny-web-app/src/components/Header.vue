<template>
    <header class="header d-flex justify-content-between align-items-center p-3">
        <i class="fa fa-bars" aria-hidden="true"></i>
        <h1> {{ title }} </h1> 
        <div class="profil-container d-flex align-items-center">
            <button
                type="button"
                class="btn"
                @click="showModal"
            >
                <i class="fa fa-th" aria-hidden="true"></i>
            </button>    
            <div class="image-wrapper">
                <img :src="profil.avatar" alt="Avatar" class="rounded-circle"> 
            </div>
        </div>
        <Modal
            v-show="isModalVisible"
            @close="closeModal"

        >
            <template v-slot:header>
                <div class="image-wrapper">
                    <img :src="profil.avatar" alt="Avatar" class="rounded-circle"> 
                </div>
                <h1>My profile</h1>
            </template>
            <template v-slot:body>
                <p>
                    <strong>Name:</strong> {{ profil.givenName }}
                </p>
                <p>
                    <strong>Email:</strong> {{ profil.email }}
                </p>
                <p>
                    <strong>Username: </strong>{{ profil.username }}
                </p>
            </template>
        </Modal>
    </header>
</template>

<script>
    import Modal from './Modal.vue'

    export default {
        components: {
            Modal,
        },
        data() {
            return {
                title: 'Scheduling',
                profil: {},
                isModalVisible: false,
            }
        },
        methods: {
            getProfil () {
                fetch('https://tracktik-frontend-challenge-jwidtarfww.now.sh/me',{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => this.profil = json)
            },
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        },
        created() {
            this.getProfil()
        },
    }
</script>

<style lang="scss">
    @import '../style/header';
</style>