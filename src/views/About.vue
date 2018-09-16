<template>

  <div class="about-container">
      <div class="about-section">
        <h2>Where we practise</h2>
        <ul class="address-list">
            <li>Little Lever School Bolton</li>
            <li>Church Street</li>
            <li>Little Lever</li>
            <li>Bolton</li>
            <li>BL3 1BT</li>
        </ul>
      </div>
      <div class="about-section">
          <h2>Practise Times</h2>
          <p>Sunday 10:00am - 12:00pm (2 Hours)</p>
      </div>
      <div class="about-section">
          <h2>Who to Contact</h2>
          <!-- <p>{{ contact.contacts }}</p> -->
        
        <ul>
            <li class="contact-list" v-for="contact in contacts" :key="contact.name">
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
            contacts: ''
        }
    },
    created: function() {
        this.fetchContacts();
    },
    methods: {
        fetchContacts() {
            let uri = 'http://localhost:5000/api/club/Bolton Kendo Club';
            axios.get(uri).then((response) => {
                this.contacts = response.data.contacts
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

.contact-list {
    list-style-type: none
}

</style>

