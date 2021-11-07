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

            <Create />

            <List :categories="categories" />

        </div>
    </div>
</template>

<script>

import Create from "@/Pages/Category/Create";
import List from "@/Pages/Category/List";
export default {
    components:{List, Create},
    props: {
        categories: Object
    },
}
</script>

