<template>
    <div class="kendo-photo">
        <h1>Kendo Photographs</h1>
        <div class="image">
            <img v-for="img in images" v-bind:src="img" v-bind:key="img" alt="No image" height="496" width="717">
        </div>
    </div>    
</template>

<script>
    export default {
        data() {
            return {
                images: [
                            '/img/photos/2016-kyoto-taikai.png',
                            '/img/photos/kendo-keiko1-11-11-18.jpg',
                            '/img/photos/kendo-keiko11-11-18.jpg',
                            '/img/photos/kendo-remembrance-sunday.jpg'
                        ]
            }
        }
    }
</script>

<style>

.kendo-photo {
    margin: 8%;
}
</style>

