<template lang="">
    <div>
        <h1>Dashboard</h1><br>
        <div class="card border-primary mb-3" >
            <div class="card-header">Voir vos Information</div>
            <div class="container"><br>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    Prenom
                    <span class="badge bg-primary rounded-pill">{{ user.firstName }}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    Nom
                    <span class="badge bg-primary rounded-pill">{{user.lastName}}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    Email
                    <span class="badge bg-primary rounded-pill"> {{user.email}}</span>
                    </li>
                </ul>
            </div><br>
            <div class="card-header">Modifier vos Information</div>
            <div class="card-body">
                <form @submit="updateUser(user.userId)">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Prenom</label>
                        <input type="text" v-model="modif.firstName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Nom</label>
                        <input type="text" v-model="modif.lastName" class="form-control" id="exampleInputPassword1">
                    </div>
                    <button type="submit" class="btn btn-primary">Modifier</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
    data() {
        return {
            modif: {
                firstName: '',
                lastName: ''
            }
        }
    },
    methods: {
        async updateUser(id){
            console.log(localStorage.getItem('token'))
            const token = localStorage.getItem('token')
            const res = await axios.put('users/'+id, this.modif, {
                headers: {"Authorization": `Bearer ${token}`}
            })
            console.log(res)
        }
    },
    computed: {
        ...mapGetters({
            'authenticated': 'auth/authenticated',
            'user': 'auth/getUser'
        })
    },
}
</script>
<style lang="">
    
</style>