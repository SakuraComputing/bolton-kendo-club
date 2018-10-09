<template>
    <div>
        <form class="login" @submit.prevent="login"></form>
        <h1>Sign In</h1>
        <label for="">Email</label>
        <input required type="email" v-model="email" palceholder="Email Address">
        <label for="">Password</label>
        <input required type="password" v-model="password" palceholder="Password">
        <hr/>
        <button type="submit">Login</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login: function () {
                let email = this.email
                let password = this.password
                this.$store.dispatch('login', { email, password })
                .then(() => this.$router.push('/'))
                .catch(err = console.log(err))
            }
        }
    }
</script>
