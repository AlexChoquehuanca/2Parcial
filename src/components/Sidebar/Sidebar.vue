<template>
  <b-collapse class="sidebar-collapse" id="sidebar-collapse" :visible="sidebarOpened">
    <nav
      :class="{sidebar: true}"
    >
      <header class="logo">
        <router-link to="/app">Light <span class="fw-semi-bold">Blue</span></router-link>
      </header>

      <ul class="nav">
        <NavLink
                :activeItem="activeItem"
                header="Dashboard"
                link="/app/main"
                iconName="flaticon-home"
                index="main"
                :childrenLinks="[
            { header: 'Visits', link: '/app/main/visits' },
            { header: 'Analytics', link: '/app/main/analytics' },
            { header: 'Widgets', link: '/app/main/widgets' },
          ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="E-commerce"
            link="/app/ecommerce"
            iconName="flaticon-diamond"
            index="ecommerce"
            :childrenLinks="[
            { header: 'Product Management', link: '/app/ecommerce/management' },
            { header: 'Products Grid', link: '/app/ecommerce/products' },
            { header: 'Product Page', link: '/app/ecommerce/product' },
          ]"
        />
        <NavLink
                :activeItem="activeItem"
                header="The Package"
                link="/app/package"
                iconName="flaticon-database-1"
                index="package"
                label="new"
                labelColor="success"
                isHeader
        />
        <NavLink
                :activeItem="activeItem"
                header="Profile"
                link="/app/profile"
                iconName="flaticon-user"
                index="profile"
                isHeader
        />
        <NavLink
                :activeItem="activeItem"
                header="Email"
                link="/app/email"
                iconName="flaticon-paper-plane"
                index="email"
                badge="9"
                isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Documentation"
            link="/documentation"
            iconName="flaticon-file"
            index="documentation"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            externalLink
            header="Generate web app"
            link="https://flatlogic.com/generator"
            iconName="flaticon-magic-wand"
            index="generator"
            isHeader
        />
        <h5 class="navTitle">TEMPLATE</h5>
        <NavLink
                :activeItem="activeItem"
                header="Core"
                link="/app/core"
                iconName="flaticon-network"
                index="core"
                :childrenLinks="[
            { header: 'Typography', link: '/app/core/typography' },
            { header: 'Colors', link: '/app/core/colors' },
            { header: 'Grid', link: '/app/core/grid' },
          ]"
        />
        <NavLink
                :activeItem="activeItem"
                header="UI Elements"
                link="/app/ui"
                iconName="flaticon-layers"
                index="ui"
                :childrenLinks="[
            { header: 'Alerts', link: '/app/ui/alerts' },
            { header: 'Badge', link: '/app/ui/badge' },
            { header: 'Buttons', link: '/app/ui/buttons' },
            { header: 'Card', link: '/app/ui/card' },
            { header: 'Carousel', link: '/app/ui/carousel' },
            { header: 'Jumbotron', link: '/app/ui/jumbotron' },
            { header: 'Icons', link: '/app/ui/icons' },
            { header: 'List Groups', link: '/app/ui/list-groups' },
            { header: 'Modal', link: '/app/ui/modal' },
            { header: 'Nav', link: '/app/ui/nav' },
            { header: 'Navbar', link: '/app/ui/navbar' },
            { header: 'Notifications', link: '/app/ui/notifications' },
            { header: 'Pagination', link: '/app/tables/dynamic' },
            { header: 'Popovers & Tooltips', link: '/app/ui/popovers' },
            { header: 'Progress', link: '/app/ui/progress' },
            { header: 'Tabs & Accordion', link: '/app/ui/tabs' },
          ]"
        />
        <NavLink
                :activeItem="activeItem"
                header="Forms"
                link="/app/forms"
                iconName="flaticon-list"
                index="forms"
                :childrenLinks="[
            { header: 'Form Elements', link: '/app/forms/elements' },
            { header: 'Form Validation', link: '/app/forms/validation' },
            { header: 'Forms Wizard', link: '/app/forms/wizard' },
          ]"
        />
        <NavLink
                :activeItem="activeItem"
                header="Charts"
                link="/app/charts"
                iconName="flaticon-controls"
                index="charts"
                :childrenLinks="[
            { header: 'Charts Overview', link: '/app/charts/overview' },
            { header: 'Apex Charts', link: '/app/charts/apex' },
            { header: 'Echarts', link: '/app/charts/echarts' },
            { header: 'Highcharts', link: '/app/charts/highcharts' }
          ]"
        />
        <NavLink
                :activeItem="activeItem"
                header="Grid"
                link="/app/grid"
                iconName="flaticon-menu-4"
                index="grid"
                isHeader
        />
        <NavLink
                :activeItem="activeItem"
                header="Tables"
                link="/app/tables"
                iconName="flaticon-equal-1"
                index="tables"
                :childrenLinks="[
            { header: 'Tables Basic', link: '/app/tables/basic' },
            { header: 'Tables Dynamic', link: '/app/tables/dynamic' },
          ]"
        />
        <NavLink
                :activeItem="activeItem"
                header="Maps"
                link="/app/maps"
                iconName="flaticon-map-location"
                index="maps"
                :childrenLinks="[
            { header: 'Google Maps', link: '/app/maps/google' },
            { header: 'Vector Maps', link: '/app/maps/amcharts' },
          ]"
        />
        <NavLink
                :activeItem="activeItem"
                header="Extra"
                link="/app/extra"
                iconName="flaticon-star"
                index="extra"
                :childrenLinks="[
            { header: 'Calendar', link: '/app/extra/calendar' },
            { header: 'Invoice', link: '/app/extra/invoice' },
            { header: 'Login Page', link: '/login-demo' },
            { header: 'Error Page', link: '/error' },
            { header: 'Gallery', link: '/app/extra/gallery' },
            { header: 'Search Result', link: '/app/extra/search' },
            { header: 'Time Line', link: '/app/extra/time-line' },
          ]"
        />
      </ul>
      <h5 class="navTitle d-sm-down-none">
        LABELS
        <a class="actionLink">
          <i class="la la-plus float-end" />
        </a>
      </h5>
      <ul class="sidebarLabels d-sm-down-none">
        <li>
          <a href="#">
            <i class="fa fa-circle text-success me-2" />
            <span class="labelName">My Recent</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle text-primary me-2" />
            <span class="labelName">Starred</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle text-danger me-2" />
            <span class="labelName">Background</span>
          </a>
        </li>
      </ul>

      <h5 class="navTitle d-sm-down-none">
        PROJECTS
      </h5>
      <div class="sidebarAlerts d-sm-down-none">
        <b-alert
          v-for="alert in alerts"
          :key="alert.id"
          class="sidebarAlert" variant="transparent"
          show dismissible
        >
          <span>{{alert.title}}</span><br />
          <b-progress class="sidebarProgress progress-xs mt-1"
            :variant="alert.color" :value="alert.value" :max="100" />
          <small>{{alert.footer}}</small>
        </b-alert>
      </div>
    </nav>
  </b-collapse>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'primary',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'danger',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
