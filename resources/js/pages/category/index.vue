<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">New Category
                    <router-link  class="btn btn-primary" :to="{name:'category-create'}">create category </router-link>
                
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="category in categories" :key="category.id">
                              <th scope="row">{{category.id}}</th>
                              <td>{{category.category_name}}</td>
                              <td>{{category.status}}</td>
                              <td>
                              <button class="btn btn-success btn-xs">edit</button>
                              <button class="btn btn-danger btn-xs">delete</button>
                              </td>
                            </tr>
                            
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
            categories:[],

            }
        },
        methods:{
        loadCategories(){
        axios.get('/api/category').then(response => {
        this.categories = response.data;
        });
        }
        },
        mounted(){
        this.loadCategories();
        }

    }
</script>
