<template lang="">
    <br>
    <div class="card border-primary mb-3" >
        <div class="card-header">New Address</div>
        <div class="card-body">
            <form @submit.prevent="saveAddress">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">City</label>
                    <input type="text" v-model="form.city" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Street</label>
                    <input type="text" v-model="form.street" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Postal</label>
                    <input type="text" v-model="form.postal" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Country</label>
                    <input type="text" v-model="form.country" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Type</label>
                    <select v-model="form.type" class="form-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value="shipping">Shipping</option>
                      <option value="billing">Billing</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Enregistrer</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            form: {
                city: '',
                street: '',
                postal: '',
                country: '',
                type: ''
            }
        }
    },
    methods: {
        async saveAddress() {
            await axios.post('addresses', this.form).then(() => this.$router.replace({name: 'ListAddress'}));
        }
    },
}
</script>
<style lang="">
    
</style>