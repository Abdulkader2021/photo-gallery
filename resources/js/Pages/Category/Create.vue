<template>
    <Head>
        <title>Create Category</title>
        <meta type="description" content="Photo gallery category" head-key="description"/>
    </Head>

    <div class="row mb-4">
        <div class="col-xl-12">
            <div class="deshboard-top text-uppercase font-bold mb-2">
                <h6>Photo Gallery - Create Category </h6>
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
                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="categoryTitle" class="mb-2">Category Title</label>
                                <input type="text" v-model="form.name" class="form-control" id="categoryTitle"
                                       placeholder="Category Name">
                                <div class="text-danger mt-2" v-if="$page.props.errors.name">{{$page.props.errors.name }}</div>
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Create",
    remember: 'form',
    data() {
        return {
            form: this.$inertia.form({
                name: null
            })
        }
    },
    methods: {
        store() {
            this.form.post(this.route('category.store'), {
                preserveScroll: true,
                onSuccess: () => this.form.reset('name'),
            });
        }
    }
}
</script>
