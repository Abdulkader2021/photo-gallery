<template>
    <Head>
        <title>All Category</title>
        <meta type="description" content="Photo gallery category" head-key="description"/>
    </Head>

    <div class="row mb-4">
        <div class="col-xl-12">
            <div class="deshboard-top text-uppercase font-bold mb-2">
                <h6>Photo Gallery - All Category </h6>
            </div>
            <hr>
        </div><!--Dashboard-head-->
    </div>
    <!-- /Row -->


    <div class="dashboard-card mb-5">
        <div class="row">
            <div class="col-sm-8">
                <div class="card">

                    <div class="card-header">
                        <ul class="flex">
                            <li>Category List</li>
                            <li class="absolute right-5 top-1">
                                <NavLink :href="route('category.create')" class="btn btn-primary" data-toggle="modal"
                                         data-target="#addCategory">Add Category
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead class="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Category Name</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(category, index) in categories.data" :key="index">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ category.name }}</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">

                                        <NavLink :href="route('category.edit', category.id)" class="btn btn-warning"
                                                 data-toggle="tooltip" data-placement="top" title="Edit Category">
                                            <i class="fa fa-pencil" aria-hidden="true"></i>
                                        </NavLink>



                                        <button type="button" @click="destroy(category.id)" class="btn btn-danger"
                                                 data-toggle="tooltip" data-placement="top" title="Edit Category">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                        </button>

                                    </div>
                                </td>
                            </tr>

                            </tbody>
                        </table>


                        <Pagination :links="categories.links"/>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Pagination from "@/Shared/Pagination";
import NavLink from "@/Components/NavLink";

export default {
    components: {NavLink, Pagination},
    props: {
        categories: Object
    },
    methods:{
        destroy(event){

            if (confirm('Are you sure you want to delete this category?')){
                this.$inertia.delete(this.route('category.destroy', event));
            }

        }
    }


}
</script>
