<template>
  <div class="widgets-page">
    <b-row>
      <b-col lg="3" md="6" xs="12">
        <Widget>
          <div class="clearfix">
            <b-row class="flex-nowrap">
              <b-col xs="3">
                <span class="widget-icon">
                  <i class="fi flaticon-like text-primary" />
                </span>
              </b-col>
              <b-col xs="9">
                <h6 class="m-0">USERS GROWTH</h6>
                <p class="h2 m-0 fw-normal">4,332</p>
              </b-col>
            </b-row>
            <b-row class="flex-nowrap">
              <b-col xs="6">
                <h6 class="m-0">Registrations</h6>
                <p class="value5">+830</p>
              </b-col>
              <b-col xs="6">
                <h6 class="m-0">Bounce Rate</h6>
                <p class="value5">4.5%</p>
              </b-col>
            </b-row>
          </div>
        </Widget>
      </b-col>
      <b-col lg="3" md="6" xs="12">
        <Widget>
          <div class="clearfix">
            <b-row class="flex-nowrap">
              <b-col xs="3">
                <span class="widget-icon">
                  <i class="fi flaticon-magic-wand text-info" />
                </span>
              </b-col>
              <b-col xs="9">
                <div class="overflow-hidden" style="height: 65px;">
                  <transition name="carousel" mode="out-in">
                    <div v-if="carouselFirstGroup" key="first">
                      <h6 class="m-0">VISITS TODAY</h6>
                      <p class="h2 m-0 fw-normal">12,324</p>
                    </div>
                    <div v-else key="second">
                      <h6 class="m-0">VISITS YESTERDAY</h6>
                      <p class="h2 m-0 fw-normal">11,885</p>
                    </div>
                  </transition>
                </div>
              </b-col>
            </b-row>
            <b-row class="flex-nowrap">
              <b-col xs="6">
                <h6 class="m-0">New Visitors</h6>
                <div class="overflow-hidden">
                  <transition name="carousel" mode="out-in">
                      <p v-bind:key="carouselFirstGroup" class="value5">
                        {{carouselFirstGroup ? '1,332' : '20.1%'}}
                      </p>
                  </transition>
                </div>
              </b-col>
              <b-col xs="6">
                <h6 class="m-0">Bounce Rate</h6>
                <div class="overflow-hidden">
                  <transition name="carousel" mode="out-in">
                    <p v-bind:key="carouselFirstGroup" class="value5">
                      {{carouselFirstGroup ? '217' : '2.3%'}}
                    </p>
                  </transition>
                </div>
              </b-col>
            </b-row>
          </div>
        </Widget>
      </b-col>
      <b-col lg="3" md="6" xs="12">
        <Widget>
          <div class="overflow-hidden">
            <transition name="carousel" mode="out-in">
              <div v-if="carouselFirstGroup" key="first">
                <b-row class="flex-nowrap">
                  <b-col xs="3">
                    <span class="widget-icon">
                      <i class="fi flaticon-notebook-4"/>
                    </span>
                  </b-col>
                  <b-col xs="9">
                    <h6 class="m-0">ORDERS</h6>
                    <p class="h2 m-0 fw-normal">82,765</p>
                  </b-col>
                </b-row>
                <b-row class="flex-nowrap">
                  <b-col xs="6">
                    <h6 class="m-0">Avg. Time</h6>
                    <p class="value5">2:56</p>
                  </b-col>
                  <b-col xs="6">
                    <h6 class="m-0">Last Week</h6>
                    <p class="value5">374</p>
                  </b-col>
                </b-row>
              </div>
              <div v-else key="second">
                <b-row class="flex-nowrap">
                  <b-col xs="3">
                    <span class="widget-icon">
                      <i class="fi flaticon-shuffle text-color"/>
                    </span>
                  </b-col>
                  <b-col xs="9">
                    <h6 class="m-0">PICKED ORDERS</h6>
                    <p class="h2 m-0 fw-normal">13.8%</p>
                  </b-col>
                </b-row>
                <b-row class="flex-nowrap">
                  <b-col xs="6">
                    <h6 class="m-0">Basic</h6>
                    <p class="value5">3,692</p>
                  </b-col>
                  <b-col xs="6">
                    <h6 class="m-0">Advanced</h6>
                    <p class="value5">1,441</p>
                  </b-col>
                </b-row>
              </div>
            </transition>
          </div>
        </Widget>
      </b-col>
      <b-col lg="3" md="6" xs="12">
        <Widget>
          <div class="clearfix">
            <b-row class="flex-nowrap">
              <b-col xs="3">
                <span class="widget-icon">
                  <i class="fi flaticon-diamond text-success" />
                </span>
              </b-col>
              <b-col xs="9">
                <h6 class="m-0">TOTAL PROFIT</h6>
                <p class="h2 m-0 fw-normal">$7,448</p>
              </b-col>
            </b-row>
            <b-row class="flex-nowrap">
              <b-col xs="6">
                <h6 class="m-0">Last Month</h6>
                <p class="value5">$83,541</p>
              </b-col>
              <b-col xs="6">
                <h6 class="m-0">Last Week</h6>
                <p class="value5">$17,926</p>
              </b-col>
            </b-row>
          </div>
        </Widget>
      </b-col>
    </b-row>
    <FlotCharts />
    <b-row>
      <b-col lg='4' xs='12'>
        <Widget refresh close bodyClass="mt-0">
          <div class="widget-top-overflow widget-padding-md clearfix bg-primary text-white">
            <h3 class="mt-lg mb-lg">Light Blue - <span class="fw-semi-bold">Next Generation</span> Admin
              Dashboard
              Template</h3>
            <ul class="tags text-white pull-right">
              <li><a href="#">features</a></li>
            </ul>
          </div>
          <div class="post-user mt-negative-lg">
            <span class="thumb-lg pull-left me-1 mt-n-sm">
              <img class="rounded-circle" src='../../assets/people/a4.jpg' alt="man" />
            </span>
            <h6 class="m-b-1 fw-normal text-white">Jeremy &nbsp;
              <small class="text-white text-light">@light-blue</small>
            </h6>
            <p class="fs-mini text-muted">
              <time>25 mins</time>
              &nbsp; <i class="fa fa-map-marker" /> &nbsp; near Amsterdam
            </p>
          </div>
          <p class="text-light fs-mini mt-lg">
            Lots of cool stuff is happening around you. Just calm down for a sec
            and listen. Colors, sounds,
            thoughts, ideas.
          </p>
          <footer class="bg-addition">
            <ul class="post-links">
              <li><a href="#">1 hour</a></li>
              <li>
                <a href="#"><span class="text-danger">
                  <i class="fa fa-heart" /> Like</span>
                </a></li>
              <li><a href="#">Comment</a></li>
            </ul>
            <ul class="post-comments mb-0 mt-2">
              <li>
                <span class="thumb-xs avatar pull-left me-2">
                  <img class="rounded-circle" src='../../assets/people/a1.jpg' alt="woman" />
                </span>
                <div class="comment-body">
                  <h6 class="author fs-sm fw-semi-bold">Ignacio Abad&nbsp;
                    <small>6 mins ago</small>
                  </h6>
                  <p class="fs-mini">Hey, have you heard anything about that?</p>
                </div>
              </li>
              <li>
                <span class="thumb-xs avatar pull-left me-2">
                  <img class="rounded-circle" src='../../assets/avatar.png' alt="avatar" />
                </span>
                <div class="comment-body">
                  <input
                    class="form-control form-control-sm" type="text"
                    placeholder="Write your comment..."
                  />
                </div>
              </li>
            </ul>
          </footer>
        </Widget>
      </b-col>
      <b-col lg='4' xs='12'>
        <Widget refresh close bodyClass="mt-0">
          <div>
            <div class="widget-top-overflow text-white">
              <img src='../../assets/pictures/17.jpg' alt="clouds" />
              <ul class="tags text-white pull-right">
                <li><a href="#">design</a></li>
                <li><a href="#">white</a></li>
              </ul>
            </div>
            <div class="post-user mt-sm">
              <span class="thumb pull-left me-1 mt-n-sm">
                <img class="rounded-circle" src='../../assets/people/a6.jpg' alt="woman" />
              </span>
              <h6 class="mb-xs mt"><span class="fw-semi-bold">Maryna</span> Nilson</h6>
              <p class="fs-mini text-muted">
                <time>25 mins</time>
                &nbsp; <i class="fa fa-map-marker" /> &nbsp; near Amsterdam
              </p>
            </div>
            <p class="text-light fs-mini m">
              Lots of cool stuff is happening around you. Just calm down for a sec
              and listen. Colors, sounds,
              thoughts, ideas. </p>
          </div>
          <footer class="bg-addition">
            <ul class="post-links no-separator">
              <li><a href="#"><span class="text-danger">
                <i class="fa fa-heart" /> 427
              </span></a></li>
              <li><a href="#"><i class="la la-comment" /> 98</a></li>
            </ul>
          </footer>
        </Widget>
      </b-col>
      <b-col lg='4' xs='12'>
        <Widget refresh close>
          <div>
            <div class="post-user mt-n-xs">
              <span class="thumb pull-left me-1 mt-n-sm">
                <img class="rounded-circle" src='../../assets/people/a2.jpg' alt="woman" />
              </span>
              <h6 class="mb-xs mt-xs">Jess <span class="fw-semi-bold">@jessica</span></h6>
              <p class="fs-mini text-muted">
                <time>25 mins</time>
                &nbsp; <i class="fa fa-map-marker" /> &nbsp; near Amsterdam
              </p>
            </div>
            <div class="widget-middle-overflow widget-padding-md clearfix bg-danger text-white">
              <h3 class="mt-lg mb-lg">Light Blue - <span class="fw-semi-bold">Next Generation</span> Admin
                Dashboard
                Template</h3>
              <ul class="tags text-white pull-right">
                <li><a href="#">design</a></li>
              </ul>
            </div>
            <p class="text-light fs-mini mt-sm">
              Lots of cool stuff is happening around you. Just calm down for
              a sec and listen. Colors, sounds,
              thoughts, ideas. </p>
          </div>
          <footer class="bg-addition">
            <ul class="post-links">
              <li><a href="#">1 hour</a></li>
              <li>
                <a href="#">
                  <span class="text-danger">
                    <i class="fa fa-heart" /> Like
                  </span>
                </a>
              </li>
              <li><a href="#">Comment</a></li>
            </ul>
          </footer>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg='6' xs='12'>
        <Widget bodyClass="mt-0">
          <div class="widget-image text-white">
            <img src='../../assets/pictures/18.jpg' alt="mountains" />
            <h4 class="title">
              <span class="fw-normal">Sunnyvale</span>, CA
            </h4>
            <div class="info text-end">
              <i class="fa fa-map-marker h1 m-0 me-1" />
              <h6 class="m-0 mt-xs">FLORIDA, USA</h6>
              <p class="fs-sm">9:41 am</p>
            </div>
            <div class="forecast">
              <div class="row">
                <div class="col-6 col-md-4">
                  <div class="row mt-xs">
                    <div class="col-6 p-0">
                      <Skycon icon="CLEAR_DAY" color="white"
                        :options="{ width: '40', height: '40' }" />
                      <p class="m-0 fw-normal mt-n-xs">sunny</p>
                    </div>
                    <div class="col-6 p-0">
                      <h6 class="fw-semi-bold m-0">SUNDAY</h6>
                      <p class="value1 ">29&deg;</p>
                    </div>
                  </div>
                </div>
                <div class="col-3 col-md-2 p-0">
                  <h6 class="m-0">TOMMOROW</h6>
                  <Skycon class="mt-1" icon="PARTLY_CLOUDY_DAY" color="white"
                    :options="{ width: '28', height: '28' }" />
                  <p class="m-0 fw-semi-bold">32&deg;</p>
                </div>
                <div class="col-3 col-md-2 p-0">
                  <h6 class="m-0">TUE</h6>
                  <Skycon class="mt-1" icon="RAIN" color="white"
                    :options="{ width: '28', height: '28' }" />
                  <p class="m-0 fw-semi-bold">25&deg;</p>
                </div>
                <div class="col-3 col-md-2 p-0">
                  <h6 class="m-0">WED</h6>
                  <Skycon class="mt-1" icon="CLEAR_DAY" color="rgba(244, 244, 245, 0.9)"
                    :options="{ width: '28', height: '28' }" />
                  <p class="m-0 fw-semi-bold">28&deg;</p>
                </div>
                <div class="col-3 col-md-2 p-0">
                  <h6 class="m-0">THU</h6>
                  <Skycon class="mt-1" icon="PARTLY_CLOUDY_DAY" color="white"
                    :options="{ width: '28', height: '28' }" />
                  <p class="m-0 fw-semi-bold">17&deg;</p>
                </div>
              </div>
            </div>
          </div>
        </Widget>
        <b-row>
          <b-col md='6' xs='12'>
            <Widget class="p-0 text-center">
              <b-row class="m-0">
                <div class="col-5 bg-danger btlr bblr">
                  <Skycon class="mt-3" icon="CLEAR_DAY" color="white"
                    :options="{ width: '62', height: '62' }" />
                  <h6 class="text-white fw-normal m-t-1">FRIDAY</h6>
                </div>
                <div class="col-7">
                  <p class="value0 text-danger mt-n-xs me-n-1">
                    33&deg;
                  </p>
                  <p class="mt-n-sm m-b-0 fw-normal fs-sm text-muted">WINDY</p>
                  <div class="row mt-n-xs mb-xs">
                    <div class="col-6 p-0">
                      <Skycon icon="WIND" color="#999" :options="{ width: '20', height: '20' }" />
                      <div class="d-inline-block ms-1">
                        <p class="value6">4</p>
                        <p class="fs-sm m-0 mt-n-xs text-muted fw-normal">MPS</p>
                      </div>
                    </div>
                    <div class="col-6 p-0">
                      <Skycon icon="RAIN" color="#999" :options="{ width: '20', height: '20' }" />
                      <div class="d-inline-block ms-1">
                        <p class="value6">52</p>
                        <p class="fs-sm m-0 mt-n-xs text-muted fw-normal">MM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </b-row>
            </Widget>
          </b-col>
          <b-col md='6' xs='12'>
            <Widget class="p-0 text-center">
              <div class="row m-0">
                <div class="col-7 bg-success btlr bblr">
                  <p class="value0 text-white mt-sm me-n-1">
                    20&deg;
                  </p>
                  <p class="text-white fw-normal d-inline-block mb">SUNDAY</p>
                </div>
                <div class="col-5">
                  <Skycon class="mt-3" icon="PARTLY_CLOUDY_DAY" color="#58D777"
                    :options="{ width: '60', height: '60' }" />
                  <p class="fw-normal fs-sm text-muted">WINDY</p>
                </div>
              </div>
            </Widget>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg='6' xs='12'>
        <b-row>
          <b-col md='6' xs='12'>
            <Widget class="widget-sm">
              <h6 class="mt-3 fw-normal">
                Nasdaq
              </h6>
              <h3>
                355 <span class="fw-semi-bold">USD</span>
              </h3>
              <p>Last Sale 354.94 USD</p>
              <Nasdaq />
            </Widget>
          </b-col>
          <b-col md='6' xs='12'>
            <Widget class="widget-sm bg-success text-white">
              <p class="mb-xs"><i class="fa fa-comments fa-2x" /></p>
              <h5>
                Lots of <span class="fw-semi-bold">possibilities</span> to customize your
                new <span class="fw-semi-bold">admin template</span>
              </h5>
              <p class="fs-mini mt-sm">
                <span class="fw-semi-bold">83</span> likes
                &nbsp;
                <span class="fw-semi-bold">96</span> comments
                &nbsp;
                <span class="fw-semi-bold">7</span> shares
              </p>
              <p class="fs-sm mt-lg text-light">
                <time>10 June</time>
              </p>
            </Widget>
          </b-col>
        </b-row>
        <b-row>
          <b-col md='6' xs='12'>
            <Widget class="widget-sm bg-primary text-white">
              <p class="mb-xs"><i class="fa fa-arrow-circle-up fa-3x opacity-50" /></p>
              <p class="mb text-light">
                <time>10 June</time>
              </p>
              <h3>
                Lots of <span class="fw-semi-bold">new</span> amazing possibilities
              </h3>
              <p class="fs-mini mt">
                <span class="fw-semi-bold">214</span> likes
                &nbsp;
                <span class="fw-semi-bold">96</span> comments
              </p>
            </Widget>
          </b-col>
          <b-col md='6' xs='12'>
            <Widget
              class="widget-sm"
              title="<h6>Server <span class='fw-semi-bold'>Overview</span></h6>"
              customHeader
            >
              <div class="clearfix fs-mini">
                <span class="pull-right m-0 fw-semi-bold">CPU</span>
                <span class="fs-mini">60% / 37°C / 3.3 Ghz</span>
              </div>
              <b-progress variant="primary" class="progress-xs"
                :value="60" :max="100" />
              <div class="clearfix fs-mini mt">
                <span class="pull-right m-0 fw-semi-bold">Mem</span>
                <span class="fs-mini">29% / 4GB (16 GB)</span>
              </div>
              <b-progress variant="primary" class="progress-xs"
                :value="29" :max="100" />
              <div class="clearfix fs-mini mt">
                <span class="pull-right m-0 fw-semi-bold">LAN</span>
                <span class="fs-mini">6 Mb/s <i class="fa fa-caret-down" /> &nbsp; 3 Mb/s <i
                  class="fa fa-caret-up"
                /></span>
              </div>
              <b-progress variant="primary" class="progress-xs"
                :value="48" :max="100" />
              <div class="clearfix fs-mini mt">
                <span class="pull-right m-0 fw-semi-bold">Access</span>
                <span class="fs-mini">17 Mb/s <i class="fa fa-caret-up" /> &nbsp; (+18%)</span>
              </div>
              <b-progress variant="primary" class="progress-xs"
                :value="64" :max="100" />
            </Widget>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg='4' xs='12'>
        <Widget class="overflow-hidden">
          <YearsMap />
        </Widget>
      </b-col>
      <b-col lg='4' xs='12'>
        <Widget
          title="
            <header class='bb'>
              <h6>Recent <span class='fw-semi-bold'>Chats</span></h6>
            </header>
          "
          customHeader
        >
          <div class="widget-body">
            <div class="widget-middle-overflow">
              <ul class="list-group widget-chat-list-group thin-scroll" style="height: 300px;">
                <li class="list-group-item">
                  <span class="thumb">
                    <img class="rounded-circle" src='../../assets/people/a6.jpg' alt="woman" />
                  </span>
                  <div class="message">
                    <h6 class="sender">Chris Gray</h6>
                    <p class="body">
                      Hey! What&apos;s up? So much time since we saw each other there
                    </p>
                    <time class="time">10 sec ago</time>
                  </div>
                </li>
                <li class="list-group-item on-right">
                  <span class="thumb">
                    <img class="rounded-circle" src='../../assets/avatar.png' alt="avatar" />
                  </span>
                  <div>
                    <h6 class="sender">John Doe</h6>
                    <p class="body">True! Totally makes sense. But how do we find that?</p>
                    <time class="time">10 sec ago</time>
                  </div>
                </li>
                <li class="list-group-item">
                  <span class="thumb">
                    <img class="rounded-circle" src='../../assets/people/a6.jpg' alt="woman" />
                  </span>
                  <div>
                    <h6 class="sender">Chris Gray</h6>
                    <p class="body">
                      OK, but so now what? What should we do now? Not sure actually.
                    </p>
                    <time class="time">10 sec ago</time>
                  </div>
                </li>
                <li class="list-group-item on-right">
                  <span class="thumb">
                    <img class="rounded-circle" src='../../assets/avatar.png' alt="avatar" />
                  </span>
                  <div>
                    <h6 class="sender">John Doe</h6>
                    <p class="body">
                      Hey guys, didn&apos;t you notice this conversation is sort of jubberish?
                    </p>
                    <time class="time">10 sec ago</time>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <footer class="bg-addition bt">
            <b-input-group size="sm">
              <b-form-input id="search-field" type="text" placeholder="Your message"></b-form-input>
              <b-input-group-append>
                <b-button type="submit" variant="default">Send</b-button>
              </b-input-group-append>
            </b-input-group>
          </footer>
        </Widget>
      </b-col>
      <b-col lg='4' xs='12'>
        <Widget>
          <RealtimeTraffic />
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg='3' xs='12'>
        <Widget class="widget-padding-lg">
          <div class="overflow-hidden">
            <transition name="carousel" mode="out-in">
              <div v-if="carouselFirstGroup" key="first" class="carousel-feature-widget">
                <header>
                  <h3>Basic & <span class="fw-semi-bold">Advanced</span> Features</h3>
                  <p class="value4 mt-lg">All you need in one app</p>
                </header>

                <div class="h5 mt-lg mb-lg">
                  <i class="fa fa-quote-left opacity-50"/>
                  &nbsp;That&apos;s awesome! &nbsp;
                  <i class="fa fa-quote-right opacity-50"/>
                </div>

                <footer>
                  <p>Attention to what&apos;s really important</p>
                  <button class="btn btn-info btn-block mt">Order Now!</button>
                </footer>
              </div>
              <div v-else key="second" class="carousel-feature-widget">
                <header>
                  <h3>Beautiful <span class="fw-semi-bold">Thing</span></h3>
                  <p class="value4 mt-lg">Life-time package support</p>
                </header>

                <div class="h5 mt-lg mb-lg">
                  <i class="fa fa-quote-left opacity-50"/>
                  &nbsp;That&apos;s awesome! &nbsp;
                  <i class="fa fa-quote-right opacity-50"/>
                </div>

                <footer>
                  <p>Attention to what&apos;s really important</p>
                  <button class="btn btn-inverse btn-block mt"><span
                      class="fw-semi-bold text-warning"
                  >Ready?</span>
                  </button>
                </footer>
              </div>
            </transition>
          </div>
        </Widget>
      </b-col>
      <b-col lg='3' xs='12'>
        <Widget class="widget-chart-changes" close refresh bodyClass="mt-0">
          <ChangesChart />
        </Widget>
      </b-col>
      <b-col lg='3' xs='12'>
        <Widget class="widget-padding-lg bg-primary text-white">
          <div class="overflow-hidden">
            <transition name="carousel" mode="out-in">
              <div v-if="carouselFirstGroup" key="first" class="carousel-feature-widget">
                <p class="h4 mt-xs">
                  <i class="fa fa-quote-left opacity-50"/>
                  &nbsp;Thanks for the awesome support. That&apos;s awesome!&nbsp;
                  <i class="fa fa-quote-right opacity-50"/>
                </p>
                <footer>
                  <span class="thumb pull-left me-1">
                    <img class="rounded-circle" src='../../assets/people/a4.jpg' alt="woman"/>
                  </span>
                  <h4 class="m-0 mb-xs"><span class="fw-semi-bold">Miha</span> Koshir</h4>
                  <p class="text-light">@miha</p>
                </footer>
              </div>
              <div v-else key="second" class="carousel-feature-widget">
                <div class="clearfix mt-xs">
                  <span class="thumb pull-left me-1">
                    <img class="rounded-circle" src='../../assets/people/a3.jpg' alt="woman"/>
                  </span>
                  <h4 class="m-0 mb-xs"><span class="fw-semi-bold">Maryna</span> Ess</h4>
                  <p class="text-light">@ess</p>
                </div>
                <footer>
                  <p class="h4">
                    <i class="fa fa-quote-left opacity-50"/>
                    &nbsp;Could have never imagined it would be so great!&nbsp;
                    <i class="fa fa-quote-right opacity-50"/>
                  </p>
                </footer>
              </div>
            </transition>
          </div>
        </Widget>
      </b-col>
      <b-col lg='3' xs='12'>
        <transition name="flip" mode="out-in">
          <div v-if="flipFirstGroup" key="first">
            <Widget
                class="widget-padding-lg widget-md text-white"
                bodyClass="widget-body-container"
            >
              <div class="text-center">
                <i class="fa fa-child text-success fa-5x"/>
              </div>
              <h3 class="fw-normal">Sing Web App</h3>
              <div class="widget-footer-bottom">
                <div class="mb-sm">Cutting-edge tech and design delivered</div>
                <p>
                  <button @mouseover="flipWidget()" class="btn btn-default btn-block">Hover over me!</button>
                </p>
              </div>
            </Widget>
          </div>
          <div v-else key="second">
            <Widget class="widget-padding-lg widget-md" bodyClass="widget-body-container">
              <div class="text-center">
                <i class="fa fa-globe text-primary fa-5x"/>
              </div>
              <h3 class="fw-normal">Join The Web Now!</h3>
              <div class="widget-footer-bottom">
                <div class="mb-sm">Cutting-edge tech and design delivered</div>
                <p>
                  <button class="btn btn-default btn-block">Join now!</button>
                </p>
              </div>
            </Widget>
          </div>
        </transition>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Skycon from '@/components/Skycon/Skycon';
import Widget from '@/components/Widget/Widget';
import FlotCharts from './components/flot-charts/FlotCharts';
import Nasdaq from './components/nasdaq/Nasdaq';
import YearsMap from './components/years-map/YearsMap';
import RealtimeTraffic from './components/realtime-traffic/RealtimeTraffic';
import ChangesChart from './components/changes-chart/ChangesChart';

export default {
  name: 'Widgets',
  components: {
    Widget,
    FlotCharts,
    Skycon,
    Nasdaq,
    YearsMap,
    RealtimeTraffic,
    ChangesChart,
  },
  data() {
    return {
      carouselFirstGroup: true,
      flipFirstGroup: true,
      animationInterval: null
    }
  },
  mounted() {
    this.animationInterval = setInterval(() => {
      this.slideWidget();
      this.flipWidget();
    }, 1000 * 4);
  },
  methods: {
    flipWidget() {
      this.flipFirstGroup = !this.flipFirstGroup
    },
    slideWidget() {
      this.carouselFirstGroup = !this.carouselFirstGroup
    }
  },
  beforeDestroy() {
    clearInterval(this.animationInterval);
  }
};
</script>

<style src="./Widgets.scss" lang="scss" />
