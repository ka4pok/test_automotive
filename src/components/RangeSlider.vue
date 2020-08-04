<template>
    <div class="range-slider">
        <div class="track" ref="track" @mousedown="onTrackMouseDown">
            <div ref="thumb" :class="thumbClass"></div>
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
        },
        data() {
            return {
                currentValue: 0,
                isDrag: false,
                thumbWidth: 30,
            }
        },
        created() {
            window.addEventListener("mouseup", this.stopDrag);
            window.addEventListener("mousemove", this.onMouseMoveWindow);
        },
        destroyed() {
            window.removeEventListener("mouseup", this.stopDrag);
            window.removeEventListener("mousemove", this.onMouseMoveWindow);
        },
        mounted() {
            this.setValuePercent(this.value);
        },
        methods: {
            startDrag() {
                this.isDrag = true;
            },
            stopDrag() {
                this.isDrag = false;
            },
            onMouseMoveWindow(e) {
                if (this.isDrag) {
                    this.setThumbPosMouse(e);

                }
            },
            onTrackMouseDown(e) {
                this.setThumbPosMouse(e);
                this.startDrag();
            },
            setThumbPosMouse(e) {
                let trackRect = this.$refs.track.getBoundingClientRect();  // размер и позиция track
                console.log(trackRect)
                let trackWidth = this.$refs.track.clientWidth;


                let newValue = e.clientX - trackRect.left - this.thumbWidth * 0.5;

                if (newValue < 0) {
                    newValue = 0;
                }

                if (newValue > trackWidth - this.thumbWidth) {
                    newValue = trackWidth - this.thumbWidth;
                }

                this.$refs.thumb.style.left = newValue === 0 ? 0 : newValue + 'px';
                this.currentValue = Math.round((newValue / (trackWidth - this.thumbWidth) * 100) * 10) / 10;
            },
            setValuePercent(val) {
                this.currentValue = val;
                this.$refs.thumb.style.left = (this.$refs.track.clientWidth - this.thumbWidth) * val / 100 + 'px';
                console.log(  this.$refs.thumb.style.left)
            },
        },
        computed: {
            thumbClass() {
                return {
                    thumb: true,
                    dragged: this.isDrag,
                }
            }
        },
        watch: {
            value() {
                this.setValuePercent(this.value);
            },
            currentValue() {
                this.$emit("input", this.currentValue);
            }
        }
    }
</script>

<style lang="scss" scoped>

    .range-slider {
        background: linear-gradient(to right, #66e3ce 10%, #6bcead 35%, #e6c371 70%, #b94a48 99%);
        border-radius: 20px;
        padding: 0 5px 0 5px;
    }

    .track {
        width: 100%;
        height: 40px;
        color: rgba(255, 255, 255, 0.47);
    }

    .thumb {
        height: 30px;
        width: 30px;
        z-index: 105;
        background: #fff;
        border-radius: 15px;
        position: relative;
        top: 5px;
    }

    .dragged {
        background: #f5f5f5;
    }

    .thumb, .thumb::after, .thumb::before {
        -webkit-user-select: none;
        -webkit-user-drag: none;
        -webkit-app-region: no-drag;
        cursor: default;
    }
</style>