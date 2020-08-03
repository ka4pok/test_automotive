<template>
    <div id="app">
        <nav class="indigo darken-3">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><router-link tag="a" to="/">Range Input</router-link></li>
                    <li><router-link tag="a" to="/list">Users</router-link></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-view/>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import {mapActions} from 'vuex'
    export default {
        data() {
            return {
                users: null,

            }
        },
        mounted() {
            this.GET_USERS_FROM_API()
        },
        computed: {


        },
        methods:{
        ...mapActions([
                'GET_USERS_FROM_API'
            ]),
        }
    }

</script>

<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";
    body{
        background: #3f51b5;
        color: white;
    }
    nav{
        padding-left: 20px;
        padding-right: 20px;

    }
</style>
