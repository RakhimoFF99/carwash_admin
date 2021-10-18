<template>
  <div class="sidebar">
        <div class="sidebar__header">
            <div class="logo text-center">Admin panel</div>
        </div>
        <div class="sidebar__body"></div>
                      <div id="sidebar-menu">
                    <ul class="metismenu list-unstyled" id="side-menu">
                        <li v-ripple>
                            <nuxt-link
                                to="/"
                                class="d-flex justify-content-between"
                            >
                                <span>
                                    <fa icon="users" />
                                    <span style="margin-left:5px">Dashboard</span>
                                </span>
                            </nuxt-link>
                        </li>

                        <li v-ripple>
                            <nuxt-link to="/order" active-class="text-primary">
                                <fa icon="users" class="text-white" />
                                <span style="margin-left:5px">Foydalanuvchilar</span>
                            </nuxt-link>
                        </li>

                        <li v-ripple>
                            <nuxt-link
                                to="/statistics"
                                active-class="text-primary"
                            >
                                <fa icon="chart-bar"  class="text-white"/>
                                <span style="margin-left:5px">Statistika</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <a
                                id="ul1"
                                @click.passive="event => showSubMenu(event)"
                                href="javascript: void(0);"
                                v-ripple
                                class="has-arrow text-white"
                                >Bo'limlar</a
                            >
                            <ul
                                ref="ul1"
                                class="my-0 sub-menu mm-collapse mm-show"
                            >
                               
                           

                        <li v-ripple>
                            <nuxt-link
                                to="/news"
                                active-class="text-primary"
                            >
                               <fa icon="" />
                                <span>Yangiliklar</span>
                            </nuxt-link>
                        </li>
                       
                               
                         
                            </ul>
                        </li>
                    </ul>
                </div>
        </div>  
</template>

<script>
export default {
    methods:{
           showSubMenu() {
            this.$refs.ul1.classList.toggle("mm-show");
        },
       
    }
}
</script>

<style scoped>


 .sidebar {
        width:280px;
        background-color: rgb(123, 123, 163);
        color: white;
        height: 100vh;
         
    }
    .sidebar__header{
        padding: 1rem 0 ;
       
    }
 
   li span {
   color: white;
   }
   
  
 
    .logo {
        font-size: 22px;
    }
 
 
</style>