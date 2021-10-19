<template>
  <div class="wrapper px-4 py-4">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex px-2">
              <h3 class="card-title my-0">Buyurtma qo'shish</h3>
            </div>
            <div class="container mt-3">
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="username">Buyurtmachining ismi</label>
                    <el-input v-model="order.name" id="username"></el-input>
                  </div>
                </div>

                <div class="col-md-4">
                  <label for="phone">Telefon raqam</label>
                  <el-input
                    v-model="order.phone"
                    id="phone"
                    type="number"
                  ></el-input>
                </div>
                <div class="col-md-4">
                  <label for="carModel">Mashina rusumi</label>
                  <el-input
                    v-model="order.carModel"
                    id="carModel"
                    type="text"
                  ></el-input>
                </div>

                <div class="form-group row mt-2">
                  <div class="col-md-4">
                    <label for="orderTime">Sana</label>
                    <br />
                    <el-date-picker
                      v-model="order.orderTime"
                      id="orderTime"
                      type="datetime"
                      placeholder="Sana va vaqtni kiriting ..."
                    >
                    </el-date-picker>
                  </div>

                  <div class="col-md-8">
                    <label for="serviceType">Xizmat turi</label>
                    <el-input
                      v-model="order.serviceType"
                      id="serviceType"
                      type="text"
                    ></el-input>
                  </div>
                </div>
                <div class="d-flex mt-3 justify-content-end px-5">
                  <el-button @click="addOrder" type="primary"
                    >Saqlash</el-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    order: {
      name: "",
      phone: "",
      carModel: "",
      orderTime: "",
      serviceType: "",
      washId: "6154314e50282f588e2b4d53",
    },
  }),
  methods: {
    async addOrder() {
      try {
        const response = await this.$axios.$post("order/add", this.order);
        console.log(response)
        if (response.success) {
              this.$toast.success(response.message)
              this.$router.push('/order')
        }
        else {
            this.$toast.console.error();(response.message)
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>