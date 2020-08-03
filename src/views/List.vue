<template>
    <div class='list'>
        <div class="list__inner">
            <h1>Part 2</h1>
            <Popup v-if="isPopupVisible" @closePopup="closePopup" @addUser="addNewUser"/>
            <div class="input-field">

                <input id="icon_prefix" type="text" v-model="searchValue" class="searchInput" @change="sortUserBySearchValue(searchValue)">
                <i class="material-icons btn waves-effect waves-light searchClass indigo darken-3 prefix "
                   @click="sortUserBySearchValue(searchValue)"
                >
                    search
                </i>
                <label for="icon_prefix">First Name</label>

            </div>
        </div>

        <div class="btn_user">
            <button @click="showPopup" class="btn waves-effect waves-light indigo darken-3  btn-user">
                Добавить пользователя
                <i class="material-icons">person_add</i>
            </button>
        </div>

        <div class="list__inner">
            <div class=" ">
                <ul v-if="users.length">
                    <li v-for='user in users' :key="user.id">
                        <div>{{user.first_name}}</div>
                        <router-link tag="button" class="btn waves-effect waves-light indigo darken-3"
                                     :to="'/user/'+user.id">Подробнее
                        </router-link>
                        <button @click="deleteUser(user.id)" class="btn waves-effect waves-light indigo darken-3"><i
                                class="material-icons">delete</i></button>
                    </li>
                </ul>
                <div v-else class="emptyList">Список пользователей пуст! </div>
            </div>
        </div>
        <div class="center part__one">
            <router-link to="/" class="btn waves-effect waves-light indigo darken-3">
                Перети к первому заданию
            </router-link>
        </div>


    </div>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'
    import Popup from "../components/Popup";

    export default {
        name: "List",
        data() {
            return {
                users: [],
                searchValue: null,
                isPopupVisible: false

            }
        },
        computed: {
            ...mapGetters([
                'USERS',
                'SEARCH_VALUE'
            ]),
        },
        watch: {
            USERS() {
                this.users = this.USERS
            }
        },
        methods: {
            ...mapActions([
                'GET_NEW_USER_TO_VUEX',
                'GET_USER_TO_DELETE'
            ]),
            sortUserBySearchValue(value) {
                if (value) {
                    this.users = this.USERS
                    this.users = this.users.filter((user) => {
                        return user.first_name.toLowerCase().includes(value.toLowerCase())
                    })
                } else {
                    this.users = this.USERS
                }
            },
            showPopup() {
                this.isPopupVisible = true
            },
            closePopup() {
                this.isPopupVisible = false
            },
            addNewUser(data) {
                this.GET_NEW_USER_TO_VUEX(data)
                this.isPopupVisible = false
            },
            deleteUser(id) {
                this.users = this.users.filter((user, index) => {
                    return user.id !== id
                })
                this.GET_USER_TO_DELETE(id)
            }
        },
        mounted() {
            this.sortUserBySearchValue(this.SEARCH_VALUE)
        },
        components: {
            Popup
        }
    }
</script>

<style lang="scss" scoped>
    .list {
        max-width: 600px;
        margin: 0 auto;
        &__inner {
            width: 100%;
        }
    }

    .searchInput {
        max-width: 80%;
    }

    .searchClass {
        padding-top: 5px;
        margin-left: 10px;
        width: auto !important;
    }

    #icon_prefix {
        color: white;
    }

    ul {
        margin-top: 100px;

        li {
            margin-bottom: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {
                margin-left: 25px;
            }

            div {
                width: 25%;
            }
        }
    }

    .btn_user {
        text-align: center;
        margin-top: 50px;
    }

    .emptyList {
        margin-top: 100px;
        text-align: center;
    }
    .part__one{
        margin-top: 100px;
        margin-bottom: 100px;
    }
</style>