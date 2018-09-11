<template>
    <div class="kendo-video">
        <h1>Kendo Video</h1>
        <youtube 
            v-for="video in videos"
            :video-id="video.videoId"
            :key="video.etag"
        />
    </div>    
</template>

<script>
    import axios from 'axios';

    export default {
    data() {
        return {
            videos: []
        }
    },
    created: function() {
        this.fetchVideos();
    },
    methods: {
        fetchVideos() {
            let uri = 'http://localhost:5000/api/club/Bolton Kendo Club';
            axios.get(uri).then((response) => {
                this.videos = response.data.videos
            });
        }
    }
}
</script>

<style>

.kendo-video {
    margin: 8%;
}
</style>

