<template>
<div class="px-4 py-4">
 <div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title mb-4">Statistika</h4>
                <div class="table-responsive">
                    <table class="table table-centered table-nowrap mb-0">
                        <thead class="table-light">
                            <tr>
            
                                <th>Ism</th>
                                <th>Telefon</th>
                                <th>Sana</th>
                                <th>Narx</th>
                                <th>Xizmat turi</th>
                                <th>Status</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in order" :key="item._id">
                        
                                <td>{{item.name}}</td>
                                <td>
                                   {{item.data}}
                                </td>
                                <td>
                                    {{item.price}}
                                </td>
                                <td>
                                    <span class="badge rounded-pill bg-soft-success font-size-12">Paid</span>
                                </td>
                               
                                <td>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                        View Details
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <!-- end table-responsive -->
            </div>
        </div>
    </div>
</div>
</div>
  
</template>

<script>
    export default {
        data : () => ({
            order:null
        }),
        methods:{
          async  getAllStatistics () {
            const orders = await this.$axios.get('order/all')
            if(orders) {
                this.order = orders.data.data
            }
            }
        },
        mounted() {
     
        }
    }
</script>

<style lang="scss" scoped>

</style>