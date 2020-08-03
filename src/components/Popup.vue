<template>
    <div class="popup">
        <div class="popup__header">
            <span>Popup name</span>
            <span><i class="material-icons btn btnClose waves-effect waves-light indigo darken-3" @click="closePopup">close</i></span>
        </div>
        <div class="popup__content">
            <form @submit.prevent="submitHandler">
                <div class="row">
                    <div class="input-field col s12">
                        <input
                                type="text"
                                v-model.trim="email"
                                id="email"
                                :class="{invalid: (this.$v.email.$dirty && !this.$v.email.required) || (this.$v.email.$dirty && !this.$v.email.email)}">
                        <label for="email">Email</label>
                        <small v-if="this.$v.email.$dirty && !this.$v.email.email"
                               class="helper-text invalid"
                        >Введите корректный Email</small>
                        <small v-else-if="this.$v.email.$dirty && !this.$v.email.required"
                               class="helper-text invalid"
                        >Поле email не должно быть пустым!</small>
                    </div>
                    <div class="input-field col s12">

                        <input type="text"
                               v-model.trim="first_name"
                               id="first_name"
                               :class="{invalid: (this.$v.first_name.$dirty && !this.$v.first_name.required) || (this.$v.first_name.$dirty && !this.$v.first_name.minLength)}">

                        <label for="first_name">First name</label>
                        <small
                                class="helper-text invalid"
                                v-if="this.$v.first_name.$dirty && !this.$v.first_name.required"
                        >Введите имя!</small>
                        <small
                                class="helper-text invalid"
                                v-else-if="this.$v.first_name.$dirty && !this.$v.first_name.minLength"
                        >Поле Имя должно содержать минимум 3 символа</small>

                    </div>
                    <div class="input-field col s12">
                        <input type="text" v-model.trim="last_name"

                               id="last_name"
                               :class="{invalid: (this.$v.last_name.$dirty && !this.$v.last_name.required) || (this.$v.last_name.$dirty && !this.$v.last_name.minLength)}">

                        <label for="last_name">Last name</label>
                        <small
                                class="helper-text invalid"
                                v-if="this.$v.last_name.$dirty && !this.$v.last_name.required"
                        >Введите Фамилию!</small>
                        <small
                                class="helper-text invalid"
                                v-else-if="this.$v.last_name.$dirty && !this.$v.last_name.minLength"
                        >Поле Фамилия должно содержать минимум 4 символа</small>
                    </div>
                    <div class="input-field col s12">
                        <button type="submit" class="btn waves-effect waves-light indigo darken-3">Add User</button>
                    </div>
                </div>


            </form>
        </div>

        <div class="popup__footer"></div>
    </div>
</template>

<script>
    import {email, required, minLength} from 'vuelidate/lib/validators'

    export default {
        name: "Popup",
        data() {
            return {
                email: null,
                first_name: null,
                last_name: null,
                avatar: null,
            }
        },
        validations: {
            email: {
                required,
                email
            },
            first_name: {
                required,
                minLength: minLength(3)
            },
            last_name: {
                required,
                minLength: minLength(4)
            }
        },
        methods: {
            submitHandler() {
                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                } else {
                    let data = {
                        id: Date.now(),
                        email: this.email,
                        first_name: this.first_name,
                        last_name: this.last_name,
                        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
                    }
                    this.$emit('addUser', data)
                    console.log(data)
                }
            },
            closePopup() {
                this.$emit('closePopup')
            }
        }

    }

</script>

<style lang="scss" scoped>
    .popup {

        position: fixed;
        top: 50%;
        z-index: 10;
        transform: translate(-50%, -50%);
        padding: 16px;
        max-width: 400px;
        width: 100%;
        left: 50%;
        background: #fff;
        box-shadow: 0 0 5px 0 #171414;

        &__header, &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .btnClose {
        padding-top: 5px;
    }
    .helper-text{
        color: red !important;
    }
</style>