<template>
    <transition name="modal-fade">
        <div class="backdrop-modal">
            <div class="modal-box">
                <header class="modal-header">
                    <slot name="header"></slot>
                    <button
                        type="button"
                        class="btn-close"
                        @click="close"
                    >
                        x
                    </button>
                </header>
                <section class="modal-body">
                    <slot name="body"></slot>
                </section>
                <footer class="modal-footer">
                    <slot name="footer">
                    </slot>
                    <button
                        type="button"
                        class="btn-green"
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