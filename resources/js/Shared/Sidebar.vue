<template>
    <!-- Vertical Nav -->
    <nav class="encoder-nav encoder-nav-light">
        <a href="javascript:void(0);" id="encoder_nav_close" class="encoder-nav-close">
            <span class="feather-icon"><i data-feather="x"></i></span>
        </a>

        <div class="nicescroll-bar">
            <div class="navbar-nav-wrap">
                <ul class="navbar-nav flex-column">

                    <li class="nav-item">
                        <NavLink class="nav-link" href="/">
                            <i class="ion ion-ios-desktop"></i>
                            <span class="nav-link-text">Dashboard</span>
                        </NavLink>
                    </li>

                    <li class="nav-item">
                        <NavLink class="nav-link" href="/category">
                            <i class="ion ion-ios-grid"></i>
                            <span class="nav-link-text">Category</span>
                        </NavLink>
                    </li>

                    <li class="nav-item">
                        <NavLink class="nav-link" href="/gallery">
                            <i class="ion ion-ios-photos"></i>
                            <span class="nav-link-text">Photo Gallery</span>
                        </NavLink>
                    </li>
                </ul>

                <hr class="nav-separator">
                <div class="nav-header">
                    <span>Getting Started</span>
                    <span>GS</span>
                </div>

                <ul class="navbar-nav flex-column">
                    <li class="nav-item">
                        <NavLink class="nav-link" href="/documentation">
                            <i class="ion ion-ios-book"></i>
                            <span class="nav-link-text">Documentation</span>
                        </NavLink>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
    <div id="encoder_nav_backdrop " class="encoder-nav-backdrop"></div>
    <!-- /Vertical Nav -->
</template>

<script>
import NavLink from "@/Components/NavLink";
export default {
    components: {NavLink}
}
</script>

