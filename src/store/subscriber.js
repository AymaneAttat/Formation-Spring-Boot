import store from '@/store'
import axios from 'axios'

store.subscribe((mutation) => {
    if(mutation.type === 'auth/setTok'){
        if(mutation.payload){
            //console.log(mutation.payload);
            axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload.token}`;
            localStorage.setItem('token', mutation.payload.token);
            localStorage.setItem('id', mutation.payload.id);
        }else{
            axios.defaults.headers.common['Authorization'] = null;
            localStorage.removeItem('token');
            localStorage.removeItem('id');
        }
    }
})