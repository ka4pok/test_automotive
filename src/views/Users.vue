<template>
    <div class="user">
        <img :src="user.avatar" alt="">
        <h6>About me:</h6>
        <h4> {{user.first_name}} {{user.last_name}}</h4>

        <h5>{{user.email}}</h5>

        <br>
        <router-link to="/list" class="btn waves-effect waves-light indigo darken-3">back</router-link>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Users",
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'USER_BY_ID'
            ]),
            user() {
                return this.USER_BY_ID(+this.$route.params.id)
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .user {
        text-align: center;
        max-width: 600px;
        margin: 100px auto;
        img {
            border-radius: 50%;
        }
    }

</style>