<template>
    <div id="top" class="sites">
        <h2 class="text-center bg-primary m-0 py-2">{{ title }}</h2>
        <div class="sort-container d-flex justify-content-between flex-wrap">
            <div class="select-wrapper">
                <select 
                    class="form-control" 
                    @change="onChange"
                >
                    <option :value='null'>All site</option>
                    <option
                        v-for="(client, index) in clients"
                        :key="index"
                        :value="client.id"
                    >
                        {{ client.givenName }}
                    </option>
                </select>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
            <div class="sort-search-wrapper d-flex align-items-center">
                <i 
                    v-if="sort==='desc'"
                    @click="sortSites"
                    class="fa fa-sort-amount-desc mx-3" 
                    aria-hidden="true"
                ></i> 
                <i 
                    v-else
                    @click= "sortSites"
                    class="fa fa-sort-amount-asc mx-3" 
                    aria-hidden="true"
                ></i>
                <div 
                    class="search-wrapper" 
                    :class="{active:isActive}"
                >
                    <input 
                        type="text" 
                        v-model="search" 
                        placeholder="search"
                        @keyup.enter="searchSites"
                    >
                    <button 
                        class="btn"
                        @click="toggleActive"
                    >
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
        <div 
            class="item-container" 
            v-if="sites"
        >
            <SiteItem
                v-for = "(site, index) in sites"
                :value = "site"
                :key = "index"
            />
            <div class="show-more-container d-flex justify-content-between m-5">
                <div></div>
                <button 
                    class ="btn btn-primary"
                    @click = "showMoreSite"
                    v-if="!message || showMore"
                >
                    show more
                </button>
                <a 
                    href="#top" 
                    v-if="!message"
                >
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        <div 
            class="no-result-wrapper d-flex align-items-center flex-column" 
            v-if="message"
        >
            <p class="text-center">No search found for this request</p>
            <button 
                class="btn btn-primary" 
                @click="getSites"
            > 
                click here to see all the sites
            </button>
        </div>
        <Loading v-if="loading" />
    </div>
</template>

<script>
    import SiteItem from './SiteItem.vue';
    import Loading from './Loading.vue';

    export default {
        components: {
            SiteItem,
            Loading
        },
        data() {
            return {
                title: 'Sites',
                sites: null,
                clientId: '',
                clients: [],
                page: 1,
                limit: 20,
                sort: 'desc',
                search: '',
                loading: false,
                message: false,
                isActive: false,
                showMore: true
            }
        },
        methods: {
            getSites (page, limit, sort) {
                this.loading = true;
                this.message = false;
                this.showMore = true;
                fetch(`https://tracktik-frontend-challenge-jwidtarfww.now.sh/sites?_page=${page}&_limit=${limit}&_sort=createdAt&_order=${sort}`,{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => {
                    this.loading = false;
                    !this.sites ?
                    this.sites = json :
                    json.map(object => this.sites.push(object));
                })
            },
            getClients () {
                fetch(`https://tracktik-frontend-challenge-jwidtarfww.now.sh/clients`,{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => {
                    this.clients = json;
                    this.loading = false;
                })
            },
            getSitesByClientId (id, page, limit, sort) {
                this.loading = true;
                this.message = false;
                this.showMore = true;
                fetch(`https://tracktik-frontend-challenge-jwidtarfww.now.sh/sites?clientId=${id}&_page=${page}&_limit=${limit}&_sort=createdAt&_order=${sort}`,{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => {
                    !this.sites ?
                    this.sites = json :
                    json.map(object => this.sites.push(object));
                    this.loading = false;
                })
            },
            getSearchSites (search) {
                this.loading = true;
                this.message = false;
                this.showMore = false;
                fetch(`https://tracktik-frontend-challenge-jwidtarfww.now.sh/sites?q=${search}`,{
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => {
                    this.loading = false;
                    json.length !== 0 ?
                    this.sites = json
                    : (this.message = true, this.sites = []);
                })
            },
            showMoreSite () {
                this.page++
                this.clientId ? this.getSitesByClientId(this.clientId, this.page, this.limit,this.sort)
                : this.getSites (this.page, this.limit, this.sort);
            },
            onChange () {
                let id = event.target.value;
                this.sites = null;
                this.page = 1;
                this.clientId = id;
                id ? this.getSitesByClientId(id, this.page, this.limit,this.sort) 
                : this.getSites(this.page, this.limit) ;
            },
            sortSites () {
                this.sort === "desc" ? this.sort = "asc" : this.sort = "desc";
                this.sites = null;
                this.page = 1;
                this.clientId ? this.getSitesByClientId(this.clientId, this.page, this.limit,this.sort)
                : this.getSites (this.page, this.limit, this.sort);
            },
            searchSites () {
                this.page = 1;
                this.getSearchSites(this.search);
            },
            toggleActive () {
                this.isActive = !this.isActive;
            }
        },
        created() {
            this.getSites(this.page, this.limit, this.sort);
            this.getClients();
        }
    }
</script>

<style lang="scss">
    @import '../assets/style/sites';
</style>