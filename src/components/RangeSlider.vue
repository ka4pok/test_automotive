<template>
    <div class="range">

        <div class="range__value">{{value}} %</div>
        <div>Координаты : X : <span>{{offx}}</span></div>

        <div class="middle">

            <div class="slider">
               <!-- <div class="thumb"></div>-->
                <div class="visible__track" ref="visibleTrack"  @mousemove="setValue($event)"></div>
                <div class="thumb" ref='thumb'   @mouseup="isDrag=false" @mousedown="isDrag=true"  ></div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "RangeSlider",
        props: {

            value: {
                type: Number,
                default: 0
            },
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            step: {
                type: Number,
                default: 0.1
            }

        },
        data() {
            return {
                isDrag: false,
                offx: 0,

            }
        },
        methods: {
            setValue(event) {
                this.offx = event.offsetX
                if(this.isDrag){
                    this.$refs.thumb.style.left = this.offx - 20  + 'px'
                }
            },

        },
        computed: {}

    }
</script>

<style lang="scss" scoped>

    .visible__track {
        background: red;
        width: 100%;
        height: 40px;
    }

    .thumb{
        height: 30px;
        width: 30px;
        z-index: 105;
        background: white;
        position: absolute;
        top: 0;

        left: 100%;
    }

    .range__value {
        color: rgba(255, 255, 255, 0.47);
        font-size: 24px;
        background: linear-gradient(
                        to right,
                        #66e3ce 10%, #6bcead 35%, #e6c371 70%, #b94a48 99%
        );
    }

</style>