<template>
    <Head>
        <title>Photo Gallery</title>
        <meta
            type="description"
            content="Simple Photo Gallery"
            head-key="description"
        />
    </Head>

    <!-- Encoder Wrapper -->
    <div class="encoder-wrapper encoder-vertical-nav">

        <!-- Navbar -->
        <Navbar />

        <!-- Sidebar-->
        <Sidebar />

        <!-- Main Content -->
        <div class="encoder-pg-wrapper pb-0 px-0">
            <!-- Container -->
            <div class="container-fluid page-wrapper">

                <!--/Flash Message -->
                <FlashMessage />

                <slot />

            </div>
            <!-- /Container -->

            <!-- /Footer -->
            <Footer />
        </div>
        <!-- /Main Content -->

    </div>
    <!-- /Encoderultimate Wrapper -->
</template>

<script>
import Navbar from "@/Shared/Navbar";
import Sidebar from "@/Shared/Sidebar";
import Footer from "@/Shared/Footer";
import FlashMessage from "@/Shared/FlashMessage";
export default {
    components: {Navbar, Sidebar, Footer, FlashMessage},
}

</script>
