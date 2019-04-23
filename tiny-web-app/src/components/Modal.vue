<template>
    <transition name="modal-fade">
        <div class="backdrop-modal">
            <div class="modal-box">
                <header class="modal-header">
                    <div class="image-wrapper">
                        <img :src="value.avatar" alt="Avatar" class="rounded-circle"> 
                    </div>
                    <h1 class="m-0">My profile</h1>
                    <button
                        type="button"
                        class="btn btn-close"
                        @click="close"
                    >
                        <i class="fa fa-times-circle" aria-hidden="true"></i>
                    </button>
                </header>
                <section class="modal-body">
                    <p>
                        <strong>Name:</strong> {{ value.givenName }}
                    </p>
                    <p>
                        <strong>Username: </strong>{{ value.username }}
                    </p>
                    <p>
                        <strong>Email:</strong> {{ value.email }}
                    </p>
                </section>
                <footer class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="close"
                    >
                    Close
                    </button>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'modal',
        props: {value: Object},
        methods: {
            close() {
                this.$emit('close');
            },
        },
    };
</script>

<style lang="scss">
    @import '../assets/style/modal';
</style>