<template>
    <div class="col-sm-6">
        <div class="card">

            <div class="card-header">
                <h1>Category List</h1>
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
                        <th scope="row">{{ index +1 }}</th>
                        <td>{{ category.name }}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button type="button" class="btn btn-warning" data-toggle="tooltip" data-placement="top" title="Edit Category">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </button>

                                <button type="button" class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Category Delete">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                        </td>
                    </tr>

                    </tbody>
                </table>


                <Pagination :links="categories.links" />

            </div>
        </div>
    </div>

</template>

<script>
import Pagination from "@/Shared/Pagination";

export default {
    components:{Pagination},
    props: {
        categories: Object
    },


}
</script>
