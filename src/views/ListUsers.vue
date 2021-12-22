<template lang="">
<h2>List Users</h2><br>
    <table class="table table-hover">
    <thead>
        <tr>
        <th scope="col">Prenom</th>
        <th scope="col">Nom</th>
        <th scope="col">Email</th>
        <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="dat in data.data" class="table-active">
            <th scope="row">{{ dat.lastName}}</th>
            <td>{{dat.firstName}}</td>
            <td>{{ dat.email }}</td>
            <td><button class="btn btn-dark mr-2" @click="deleteuser(dat.userId)">Delete</button></td>
        </tr>
    </tbody>
</table>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            data : {}
        }
    },
    methods: {
        async getAllUsers(){
            return this.data = await axios.get('users')
            console.log(this.data)
        },
        async deleteuser(id){
            const token = localStorage.getItem('token')
            await axios.delete('users/'+id, {
                headers: {"Authorization": `Bearer ${token}`}
            })
            this.getAllUsers()
        }
    },
    mounted() {
        this.getAllUsers()
    },
}
</script>
<style lang="">
    
</style>