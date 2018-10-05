<template>

  <div class="about-container">
        <div class="about-section map-container">
            <h2>Where we practise</h2>
            <ul class="address-list" v-for="address in club.addresses" :key="address.postcode">
                <div>{{ address.address1 }}</div>
                <div>{{ address.address2 }}</div>
                <div>{{ address.address3 }}</div>
                <div>{{ address.address4 }}</div>
                <div>{{ address.postcode }}</div>
            </ul>
            <div class="map-box">
                <br>
                <gmap-map
                    :center="{ lat: 53.562614, lng: -2.384833 }"
                    :zoom="15"
                    style="width:100%;  height: 400px;"
                >
                <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    @click="center=m.position"
                ></gmap-marker>
                </gmap-map>
            </div>
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
    name: "GoogleMap",
    data() {
        return {
            club: '',      
             // default to Montreal to keep it simple
            // change this to whatever makes sense
            
            center: { lat: 53.562614, lng: -2.384833 },
            markers: [  { position:{ lat: 53.562614, lng: -2.384833 }}],
            places: [],
            currentPlace: null
        }
    },
    mounted() {
        this.geolocate();
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
        },
        // receives a place object via the autocomplete component
        setPlace(place) {
            this.currentPlace = place;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                lat: this.currentPlace.geometry.location.lat(),
                lng: this.currentPlace.geometry.location.lng()
                };
                this.markers.push({ position: marker });
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
            }
        },
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
                };
            });
        }
    }
}

</script>

<style scoped>

.about-container {
    margin: 8%;
    background-color: rgb(244, 246, 250);
}

.about-section {
    border: solid 1px black;
    border-radius: 5px;
    margin-bottom: 7px;
    /* height: 300px; */
}

.about-section:hover {
    background-color: rgb(220, 235, 243);
}

.address-list {
    list-style-type: none;
}

.map-container:hover {
    background-color: rgb(220, 235, 243);
}

.about-list {
    list-style-type: none
}

</style>

