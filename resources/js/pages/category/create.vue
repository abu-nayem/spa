<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h5>Create Category</h5>
                      <router-link  class="btn btn-primary"  :to="{name:'category-list'}"> category list </router-link>
                
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-6 offset-3">
                          <form @submit.prevent="createcategory">
                            <div class="form-group">
                              <label>Category Name</label>
                           
                              <input v-model="categoryform.category_name" type="text" name="category_name"
        class="form-control" :class="{ 'is-invalid': categoryform.errors.has('category_name') }">
      <has-error :form="categoryform" field="category_name"></has-error>
                            </div> 
                            <div class="form-group">
                             <button type="submit" class="btn btn-primary">Submit</button>
                             </div>
                          </form>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { Form } from 'vform'
    export default {
       data(){
       return{
       categoryform:new Form({
       category_name:'',
       })
       
       }
       },
       methods: {
       createcategory(){       
         this.categoryform.post('/api/category').then(({ data }) => { 
         this. categoryform.category_name='';
         })
      
       }
       }
    }
</script>
