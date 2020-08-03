<template>
    <div class="range">

        <div class="range__value">{{rangeValue}} %</div>

        <input type='range' min="0" max="100" step="0.1" class="range__slider" v-model="rangeValue">
        <div class="range__buttons">
            <div class="button__value waves-effect waves-default"
                 v-for="button in buttonsValue" :key="button" @click="setValueRangeByButton(button)">
                {{button}}%
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "RangeSlider",
        data() {
            return {
                rangeValue: 15.6,
                buttonsValue: [25, 50, 75, 100]
            }
        },
        mounted() {

        },
        computed: {},
        methods: {
            setValueRangeByButton(value) {
                this.rangeValue = value
            },
        },

    }
</script>

<style lang="scss" scoped>
    .range {
        position: relative;
        margin-bottom: 100px;
        max-width: 600px;
        width: 100%;


        .range__value {
            color: #a7b6db;
            font-size: 24px;
        }


        &__buttons {
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

    }
        input[type=range] {
            display: block;
            max-width: 600px;
            width: 100%;
            -webkit-appearance: none;
            margin: 18px 0;
            border-radius: 25px;
            border: none;

        }


        input[type=range]:focus {
            outline: none; /* Убирает голубую границу у элемента. Хотя, возможно, и стоит создавать некоторое оформления для состояния фокуса в целях обеспечения доступности. */
        }

        input[type=range]::-ms-track {
            width: 100%;
            cursor: pointer;
            background: transparent; /* Скрывает слайдер, чтобы можно было добавить собственные стили. */
            border: none;
            color: transparent;

        }


        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 35px;
            display: inline-block;
            height: 35px;
            background: white;
            border-radius: 50%;
            cursor: pointer;

        }

        /* Тоже самое для Firefox */
        input[type=range]::-moz-range-thumb {
            width: 35px;
            display: inline-block;
            height: 35px;
            background: white;
            border-radius: 50%;
            cursor: pointer;
        }


        input[type=range]::-ms-thumb {
            width: 35px;
            display: inline-block;
            height: 35px;
            background: white;
            border-radius: 50%;
            cursor: pointer;

        }

        input[type=range]::-webkit-slider-runnable-track {
            height: 40px;

            -webkit-appearance: none;
            background: linear-gradient(
                            to right,
                            #66e3ce 10%, #6bcead 35%, #e6c371 70%, #b94a48 99%
            );
            border-radius: 25px;
            padding-top: 7px;
            padding-bottom: 0;
        }

        input[type=range]::-moz-range-track {
            height: 40px;

            background: linear-gradient(
                            to right,
                            #66e3ce 10%, #6bcead 35%, #e6c371 70%, #b94a48 99%
            );
            border-radius: 25px;
            padding-top: 3px;
            padding-bottom: 0;
        }

        input[type=range]::-ms-track {
            height: 40px;
            border: none;
            background: linear-gradient(
                            to right,
                            #66e3ce 10%, #6bcead 35%, #e6c371 70%, #b94a48 99%
            );
            border-radius: 25px;
            padding-top: 3px;
            padding-bottom: 0;
        }

        input[type=range]::-ms-fill-lower {
            background: none;
        }

        input[type=range]::-ms-fill-upper {
            background: none;
        }

        input[type=range]:focus::-ms-fill-lower {
            background: none;
        }

        input[type=range]:focus::-ms-fill-upper {
            background: none;
        }


</style>