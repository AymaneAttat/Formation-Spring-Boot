<template lang="">
    <div>
        <h1>Ce connecter</h1>
        <div class="row">
            <div class="col-md-6 mx-auto mt-3">
                <form @submit.prevent="submit()">
                    <div class="mb-3">
                        <label class="form-label" for="email">Email</label>
                        <input type="email" v-model="user.email" id="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="password">Mot de Passe</label>
                        <input type="password" v-model="user.password" id="password" class="form-control">
                    </div>
                    <button class="btn btn-primary w-100">Ce connecter</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions({
            'signIn': 'auth/signIn'
        }),
        submit(){
            this.signIn(this.user).then(() => this.$router.replace({name: 'Dashboard'}));
        }
    },
}
</script>
<style lang="">
    
</style>