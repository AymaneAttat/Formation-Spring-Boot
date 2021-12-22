import axios from 'axios'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const useAddresses = () => {
    const addresses = ref([])
    const company = ref([])
    const router = useRouter()

    const getAllAddresses = async () => {
        let res = await axios.get('addresses') //.then(res => this.addresses = res).catch(err => console.log(err)) //http://localhost:8080/api/
        addresses.value = res.data.data;
        console.log(addresses.value)
    }

    return{
        addresses,
        getAllAddresses
    }
}
export default useAddresses;
