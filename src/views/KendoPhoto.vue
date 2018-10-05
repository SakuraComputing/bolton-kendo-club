<template>
    <div class="kendo-photo">
        <h1>Kendo Photographs</h1>
        
        <div class="image">
            <img v-for="img in images" v-bind:src="img" alt="No image">
        </div>
    </div>    
</template>

<script>
    export default {
        data() {
            return {
                images:['https://i0.wp.com/kenshi247.net/wp-content/uploads/2016/12/2016-kyoto1.jpg?w=800&ssl=1','http://www.jsnw.org.uk/photos/storage/cache/images/000/769/033-DSC-0403,medium_large.1463599525.jpg']
            }
        }
    }
</script>

<style>

.kendo-photo {
    margin: 8%;
}
</style>

