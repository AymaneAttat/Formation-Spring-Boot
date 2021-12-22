<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
              <router-link class="navbar-brand" :to="{name: 'Home'}">ICarnet</router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
          
              <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li v-if="authenticated" class="nav-item">
                        <router-link class="nav-link" :to="{name: 'Dashboard'}">Dashboard</router-link>
                    </li>
                    <li v-if="authenticated" class="nav-item">
                        <router-link class="nav-link" :to="{name: 'ListAddress'}">List Address</router-link>
                    </li>
                    <li v-if="authenticated" class="nav-item">
                        <router-link class="nav-link" :to="{name: 'ListUsers'}">List Users</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li v-if="!authenticated" class="nav-item-active">
                        <router-link class="nav-link" :to="{name: 'Signin'}">Connecter</router-link>
                    </li>
                    <li v-if="!authenticated" class="nav-item-active">
                        <router-link class="nav-link" :to="{name: 'Signup'}">S’inscrire</router-link>
                    </li>
                    <li v-if="authenticated" class="nav-item-active">
                        <a class="nav-link" href="#">{{ user.firstName }} {{user.lastName}}</a>
                    </li>
                    <li v-if="authenticated" class="nav-item-active">
                        <a @click="logOut" class="nav-link" href="#">Logout</a>
                    </li>
                </ul>
                
              </div>
            </div>
        </nav>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            'authenticated': 'auth/authenticated',
            'user': 'auth/getUser'
        })
    },
    methods: {
        ...mapActions({
            'signOut': 'auth/signOut'
        }),
        logOut(){
            this.signOut().then(() => this.$router.replace({ name: 'Home' }))
        }
    },
}
</script>
<style lang="">
    
</style>