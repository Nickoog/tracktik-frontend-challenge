<template>
    <div class="banner">
        <h2 class="text-center">{{ title }}</h2>
        <div class="sort-container">
            <select @change = "onChange">
                <option :value='null'>All site</option>
                <option
                    v-for = "(client, index) in clients"
                    :key = "index"
                    :value = "client.id"
                >
                    {{ client.givenName }}
                </option>
            </select> 
            <i 
                v-if="sort === 'desc'"
                @click = "sortSites"
                class="fa fa-sort-amount-desc" 
                aria-hidden="true"
            ></i> 
            <i 
                v-else
                @click = "sortSites"
                class="fa fa-sort-amount-asc" 
                aria-hidden="true"
            ></i>
            <input type="text" v-model="search" placeholder="search">
            <button 
                class ="btn"
                @click = "searchSites"
            >
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>
        </div>
        <SiteItem
            v-for = "(site, index) in sites"
            :value = "site"
            :key = "index"
        />
        <button 
            class ="btn btn-primary"
            @click = "showMore"
        >
            show more
        </button>
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
                clientId: '',
                clients: [],
                page: 1,
                limit: 20,
                sort: 'desc',
                search: ''
            }
        },
        methods: {
            getSites (page, limit, sort) {
                fetch(`https://tracktik-frontend-challenge-jwidtarfww.now.sh/sites?_page=${page}&_limit=${limit}&_sort=createdAt&_order=${sort}`,{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    this.sites.length === 0 ?
                    this.sites = json :
                    json.map(object => this.sites.push(object))
                })
            },
            getClients () {
                fetch(`https://tracktik-frontend-challenge-jwidtarfww.now.sh/clients`,{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => this.clients = json)
            },
            getSitesByClientId (id, page, limit, sort) {
                fetch(`https://tracktik-frontend-challenge-jwidtarfww.now.sh/sites?clientId=${id}&_page=${page}&_limit=${limit}&_sort=createdAt&_order=${sort}`,{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    this.sites.length === 0 ?
                    this.sites = json :
                    json.map(object => this.sites.push(object))
                })
            },
            showMore () {
                this.page++
                this.clientId ? this.getSitesByClientId(this.clientId, this.page, this.limit,this.sort)
                : this.getSites (this.page, this.limit, this.sort)
            },
            onChange () {
                let id = event.target.value;
                this.sites = [];
                this.clientId = id;
                id ? this.getSitesByClientId(id, this.page, this.limit,this.sort) 
                : this.getSites(this.page, this.limit) 
            },
            sortSites () {
                this.sort === "desc" ? this.sort = "asc" : this.sort = "desc";
                this.sites = [];
                this.clientId ? this.getSitesByClientId(this.clientId, this.page, this.limit,this.sort)
                : this.getSites (this.page, this.limit, this.sort)
            },
            getSearchSites (search) {
                fetch(`https://tracktik-frontend-challenge-jwidtarfww.now.sh/sites?q=${search}`,{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => this.sites = json)
            },
            searchSites () {
                this.getSearchSites(this.search)
            }
        },
        created() {
            this.getSites(this.page, this.limit, this.sort)
            this.getClients()
        }
    }
</script>

<style>
    
</style>