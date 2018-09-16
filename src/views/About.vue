<template>

  <div class="about-container">
      <div class="about-section">
        <h2>Where we practise</h2>
        <ul class="address-list" v-for="address in club.addresses" :key="address.postcode">
            <div>{{ address.address1 }}</div>
            <div>{{ address.address2 }}</div>
            <div>{{ address.address3 }}</div>
            <div>{{ address.address4 }}</div>
            <div>{{ address.postcode }}</div>
        </ul>
      </div>
      <div class="about-section">
        <h2>Practise Times</h2>
        <ul>    
            <li class="about-list" v-for="practice in club.practices" :key="practice.venue">
                <div>
                    Venue: {{ practice.venue }}
                </div>
                <div>
                    Time: {{ practice.time }}
                </div>
            </li>
        </ul>

      </div>
      <div class="about-section">
        <h2>Who to Contact</h2>
        <ul>
            <li class="about-list" v-for="contact in club.contacts" :key="contact.name">
                <div>
                    Name: {{ contact.name }}
                </div>
                <div>
                    Contact Number: {{ contact.telephoneNumber}}
                </div>
                <div>
                    Email: {{ contact.email }}
                </div>
            </li>
        </ul>

      </div>
  </div>

</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            club: ''        
        }
    },
    created: function() {
        this.fetchClubDetails();
    },
    methods: {
        fetchClubDetails() {
            let uri = 'http://localhost:5000/api/club/Bolton Kendo Club';
            axios.get(uri).then((response) => {
                this.club = response.data
            });
        }
    }
}

</script>

<style scoped>

.about-container {
    margin: 8%;
}

.about-section {
    border: solid 1px black;
    border-radius: 5px;
    margin-bottom: 7px;
    /* height: 300px; */
}

.address-list {
    list-style-type: none;
}

.about-list {
    list-style-type: none
}

</style>

