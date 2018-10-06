<template>
    <div class="club-history">
        <h1>KNMS and Doshinkenyukai Club History</h1>
        <p>{{ history.clubHistory }}</p>
    </div>    
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            history: ''
        }
    },
    created: function() {
        this.fetchHistory();
    },
    methods: {
        fetchHistory() {
            axios.get('/api/club').then((response) => {
                this.history = response.data[0]
            });
        }
    }
}

</script>


<style>

.club-history {
    margin: 10% 14%;
    font-size: 120%;
}
</style>

