<template>
    <Head>
        <title>Category</title>
        <meta type="description" content="Photo gallery category" head-key="description"/>
    </Head>

    <div class="row mb-4">
        <div class="col-xl-12">
            <div class="deshboard-top text-uppercase font-bold mb-2">
                <h6>Photo Gallery - Category </h6>
            </div>
            <hr>
        </div><!--Dashboard-head-->
    </div>
    <!-- /Row -->

    <div class="dashboard-card mb-5">
        <div class="row">
            <div class="col-sm-6">
                <div class="card">

                    <div class="card-header">
                        <h1>Add Category</h1>
                    </div>

                    <div class="card-body">

                        <form>

                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Example select</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect2">Example multiple select</label>
                                <select multiple class="form-control" id="exampleFormControlSelect2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


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
                            <tr v-for="(category, index) in categories" :key="index">
                                <th scope="row">{{ index +1 }}</th>
                                <td>{{ category.name }}</td>
                                <td>@mdo</td>
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
    props: {
        categories: Object
    }
}
</script>

