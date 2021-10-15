<template>
    <div class="layout d-flex">
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
                                    <i class="material-icons text-white">
                                        dashboard
                                    </i>
                                    <span>Dashboard</span>
                                </span>
                            </nuxt-link>
                        </li>

                        <li v-ripple>
                            <nuxt-link to="/users" active-class="text-primary">
                                <i class="material-icons text-white">
                                    people
                                </i>
                                <span>Foydalanuvchilar</span>
                            </nuxt-link>
                        </li>

                        <li v-ripple>
                            <nuxt-link
                                to="/statistics"
                                active-class="text-primary"
                            >
                                <i  class="material-icons text-white">
                                    insert_chart
                                </i>
                                <span>Statistika</span>
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
        <div class="header">
            <div class="header__up">
            sdsd
            </div>
            <nuxt />
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
    .layout {
        min-height: 100vh;
        width: 100%; 
        }
    .sidebar {
        width:280px;
        background-color: rgb(132, 132, 235);
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
    .header {
        width: 100%;
    }
    .header__up {
        width:100%;
        border: 1px solid rgb(132, 132, 235);
        height: 70px;
    }
</style>