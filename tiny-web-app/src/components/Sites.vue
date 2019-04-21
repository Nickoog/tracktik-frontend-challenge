<template>
    <div class="banner">
        <h2 class="text-center">{{ title }}</h2>
        <div class="sort-container">

        </div>
        <SiteItem
            v-for = "(site, index) in sites"
            :value = "site"
            :key = "index"
        />
        <div 
            class ="text-center"
            @click = "showMore"
        >
            show more
        </div>
    </div>
</template>

<script>
    import SiteItem from './SiteItem.vue';

    export default {
        components: {
            SiteItem
        },
        data() {
            return {
                title: 'Sites',
                sites: [],
                page: 1,
                limit: 20
            }
        },
        methods: {
            getSites (page, limit) {
                fetch(`https://tracktik-frontend-challenge-jwidtarfww.now.sh/sites?_page=${page}&_limit=${limit}`,{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => [...this.sites] = json)
            }
        },
        created() {
            this.getSites(this.page, this.limit)
        }
    }
</script>