<template>
    <header class="header d-flex justify-content-between align-items-center px-3 py-2 bg-primary">
        <i class="fa fa-bars" aria-hidden="true"></i>
        <h1 class="text-white"> {{ title }} </h1> 
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
            @edit="editProfil"
            @success="toggleSuccess"
            :value="profil"
            :success="success"
        />
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
                success: false
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
            editProfil () {
                fetch('https://tracktik-frontend-challenge-jwidtarfww.now.sh/me',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.profil)
                })
                .then(res => {
                    console.log(res.status);
                    res.status === 201?
                    this.success = true
                    : this.success = false
                })
            },
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },
            toggleSuccess () {
                this.success = false;
            }
        },
        created() {
            this.getProfil()
        }
    }
</script>

<style lang="scss">
    @import '../assets/style/header';
</style>