<template lang="">
    <div>
        <h1>S’inscrire</h1>
        <p>C'est rapide est facile</p>
        <div class="row">
            <div class="col-md-6 mx-auto mt-3">
                <form @submit.prevent="signup">
                    <div class="mb-3">
                        <label class="form-label" for="firstName">Prenom</label>
                        <input type="text" v-model="user.firstName" id="firstName" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="lastName">Nom</label>
                        <input type="text" v-model="user.lastName" id="lastName" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="email">Email</label>
                        <input type="email" v-model="user.email" id="email" class="form-control">
                        <div id="emailHelp" class="form-text">Ce champ doit respecter le format email(Par exemple: test@test.com).</div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="password">Mot de Passe</label>
                        <input type="password" v-model="user.password" id="password" class="form-control">
                        <div id="emailHelp" class="form-text">maximum 12 caractére est minimum 8 caractére avec un lettre en majuscule et un nombre(Par exemple: Test12345).</div>
                    </div>
                    <button class="btn btn-primary w-100">S’inscrire</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                admin: false,
                addresses: [{
                    city: 'delete',
                    country: 'delete',
                    street: 'delete',
                    postal: 'delete',
                    type: 'delete'
                }],
                contact: {
                    mobile: 'delete',
                    skype: 'delete'
                }
            }
        }
    },
    methods: {
        async signup(){
            console.log(this.user)
            await axios.post('users', this.user, {
                headers: {"Authorization": "user:296e048f-20fb-4ffb-bc37-f8da8de972ac"}
            }).then(() => this.$router.replace({name: 'Signin'})).catch(err => console.log(err));

            //const data = this.user;
           /* await axios.post('users', JSON.stringify(this.user),
                {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                },      
                {
                    auth: {
                        username: "user",
                        password: "296e048f-20fb-4ffb-bc37-f8da8de972ac"
                    }
                }
            ).then(res => console.log(res)).then(() => this.$router.replace({name: 'Signin'}));*/  
        }
    }
}
</script>
<style lang="">
    
</style>