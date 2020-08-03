<template>
    <div>
        <h1>Part 1</h1>

        <RangeSlider/>

        <router-link to="/list" class="btn waves-effect waves-light indigo darken-3">Перети ко второму заданию</router-link>
    </div>

</template>

<script>
    import RangeSlider from "../components/RangeSlider";
    export default {
        name: "Home",
        components:{
            RangeSlider
        }
    }
</script>

<style scoped>

</style>