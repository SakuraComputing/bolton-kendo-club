<template>
    <div class="kendo-photo">
        <h1>Kendo Photographs</h1>
        <div>1. Kyoto Taikai</div>
        <div class="image">
            <img v-for="img in images" v-bind:src="img" v-bind:key="img" alt="No image">
        </div>
        <div>2. Wilf Swindell's sensei founder KNMS</div>
    </div>    
</template>

<script>
    export default {
        data() {
            return {
                images:['/img/photos/2016-kyoto-taikai.png','/img/photos/Wilf Swindells Sensei.jpg']
            }
        }
    }
</script>

<style>

.kendo-photo {
    margin: 8%;
}
</style>

