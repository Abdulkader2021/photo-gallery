<template>
    <!-- Top Navbar -->
    <nav class="navbar navbar-expand-xl navbar-light fixed-top encoder-navbar encoder-navbar">
        <a id="navbar_toggle_btn" class="navbar-toggle-btn nav-link-hover" href="javascript:void(0);"><i
            class="ion ion-ios-menu"></i></a>
        <a class="navbar-brand" href="index.html">
            <img class="brand-img d-inline-block mr-2" src="assets/default/logo.png" alt="brand" />Photo Gallery
        </a>
        <ul class="navbar-nav encoder-navbar-content">
            <li class="nav-item">
                <a id="navbar_search_btn" class="nav-link nav-link-hover" href="javascript:void(0);"><i
                    class="ion ion-ios-search"></i></a>
            </li>
            <li class="nav-item dropdown dropdown-authentication">
                <a class="nav-link dropdown-toggle no-caret" href="#" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                    <div class="media">
                        <div class="media-img-wrap">
                            <div class="avatar">
                                <img src="assets/default/default.png" alt="user" class="avatar-img rounded-circle">
                            </div>
                            <span class="badge badge-success badge-indicator"></span>
                        </div>
                        <div class="media-body">
                            <span>Madelyn Shane<i class="fa fa-angle-down"></i></span>
                        </div>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">

                    <a class="dropdown-item" href="profile.html">
                        <i class="fa fa-user-o"></i> <span>Profile</span>
                    </a>

                    <a class="dropdown-item" href="#">
                        <i class="fa fa-cog"></i> <span>Settings</span>
                    </a>
                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item" href="#"><i class="fa fa-power-off"></i> <span>Log out</span></a>
                </div>
            </li>
        </ul>
    </nav>

    <form role="search" class="navbar-search">
        <div class="position-relative">
            <a href="javascript:void(0);" class="navbar-search-icon"><i class="ion ion-ios-search"></i></a>
            <input type="text" name="example-input1-group2" class="form-control" placeholder="Type here to Search">
            <a id="navbar_search_close" class="navbar-search-close" href="#"><i class="ion ion-ios-close"></i></a>
        </div>
    </form>
    <!-- /Top Navbar -->
</template>

<script>
export default {
    name: "Navbar"
}
</script>


