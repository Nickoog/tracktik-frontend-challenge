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
                <section 
                    class="modal-body"
                    v-if="!success"
                >
                    <p>
                        <strong>Name:</strong>
                        <input 
                            type="text" 
                            v-model="value.givenName" 
                            :readonly="readonly"   
                        >
                    </p>
                    <p>
                        <strong>Username:</strong>
                        <input 
                            type="text" 
                            v-model="value.username" 
                            :readonly="readonly" 
                        >
                    </p>
                    <p>
                        <strong>Email:</strong>
                        <input 
                            type="text" 
                            v-model="value.email" 
                            :readonly="readonly"
                        >
                    </p>
                    <footer class="modal-footer">
                        <button
                            v-if="readonly"
                            type="button"
                            class="btn btn-primary"
                            @click="toggleReadonly"
                        >
                        Edit profile
                        </button>
                        <button
                            v-if="!readonly"
                            type="button"
                            class="btn btn-primary"
                            @click="edit"
                        >
                        Save change
                        </button>
                    </footer>
                </section>
                <section
                    class="modal-body"
                    v-if="success"
                >
                    <p class="text-center">Your changes have been saved</p>
                    <footer class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="close"
                        >
                            Close
                        </button>
                    </footer>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'modal',
        props: {
            value: Object,
            success: Boolean
        },
        data() {
            return {
                readonly: true 
            }
        },
        methods: {
            close () {
                this.readonly = true;
                this.$emit('success');
                this.$emit('close');
            },
            edit () {
                this.$emit('edit');
            },
            toggleReadonly () {
                this.readonly = false;
            }
        },
    };
</script>

<style lang="scss">
    @import '../assets/style/modal';
</style>