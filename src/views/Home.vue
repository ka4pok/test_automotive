<template>
    <div>
        <h1>Part 1</h1>

        <div class="value no-select">Значение слайдера: {{value}}%</div>

        <RangeSlider v-model="value"/>

        <div class="buttons">
            <div class="button__value waves-effect waves-default"
                 v-for="button in buttons" :key="button" @click="setValueRangeByButton(button)">
                {{button}}%
            </div>
        </div>

        <router-link to="/list" class="btn waves-effect waves-light indigo darken-3">
            Перети ко второму заданию
        </router-link>
    </div>


</template>

<script>
    import RangeSlider from "../components/RangeSlider";

    export default {
        name: "Home",
        data() {
            return {
                value: 50,
                buttons: [0, 25, 50, 75, 100]
            }
        },
        methods: {
            setValueRangeByButton(value) {
                this.value = value
            },
        },
        components: {
            RangeSlider
        }
    }
</script>

<style lang="scss" scoped>
    .value {
        margin-bottom: 20px;
        font-size: 150%;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 40px;

        .button__value {
            margin-bottom: 15px;
            background: #5c6bc0;
            color: #cbd2dc;
            border: none;
            font-size: 24px;
            padding: 10px 25px;
            border-radius: 5px;
            cursor: pointer;
            outline: none;

            &:hover {
                background: #3745a0;
                color: white;
            }
        }
    }

    .no-select {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>