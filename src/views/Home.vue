<template>
    <div>
        <h1>Part 1</h1>

        <RangeSlider :value="value" :step="step" :max="max" :min="min"></RangeSlider>

        <div class="buttons">
            <div class="button__value waves-effect waves-default"
                 v-for="button in buttonsValue" :key="button" @click="setValueRangeByButton(button)">
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
                value: 10.5,
                min: 0,
                max: 100,
                step: 0.1,
                buttonsValue: [25, 50, 75, 100]
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
    .buttons {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

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
</style>