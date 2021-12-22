<template lang="">
    <div>
        <div class="row my-3">
            <div class="col-md-6 text-start">
                <h2>List of addresses</h2>
            </div>
            <div class="col-md-6 text-end">
                <router-link :to="{name: 'CreateAddress'}" class="btn btn-primary">New</router-link>
            </div>
        </div>

        <div class="row my-4">
            <div class="col-md-6" v-for="address in addresses.data" >
                <div class="card border-primary mt-3">
                    <div class="card-body">
                        <h3 class="card-title">Type : {{ address.type }}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> <strong>City : </strong> {{ address.city }}</li>
                        <li class="list-group-item"><strong>Street : </strong> {{ address.street }}</li>
                        <li class="list-group-item"><strong>Postal : </strong> {{ address.postal }}</li>
                        <li class="list-group-item"><strong>Country : </strong> {{ address.country }}</li>
                        <li class="list-group-item text-center">
                            <button @click="deleteAddress(address.addressId)" class="btn btn-dark mr-2">Delete</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { onMounted } from "vue";
import useAddresses from './../store/address/index'
export default {
    data() {
        return{
            addresses: {}
        }
    },
    methods: {
        async getAllAddress(){
            await axios.get('addresses').then(res => this.addresses = res).catch(err => console.log(err)) //http://localhost:8080/api/
            console.log(this.addresses.data)
        },
        async deleteAddress(id){
            if(!window.confirm('Tu est sure ?')){
                return
            }
            console.log(id)
            await axios.delete('addresses/'+ id)
            this.getAllAddress()
        }
    },
    mounted() {
        this.getAllAddress()
        //const res = 
        //await axios.get('addresses').then(res => this.addresses = res).catch(err => console.log(err)) //http://localhost:8080/api/
        //console.log(this.addresses.data)
        
        //this.addresses = res;
        /*fetch('http://localhost:8080/api/addresses', {
                    headers: {'Authorization': `Bearer ${dat.token}`}
        }).then(res => res.json()).then(data => this.addresses = data).catch(err => console.log(err))*/
    }
}
</script>
<style lang="">
    
</style>