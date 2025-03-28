<template>
  <div class="product-edit">
    <h2 class="page-title">Product - <span class="fw-semi-bold">Detail</span></h2>
    <Widget :title="(isNew ? 'New' : 'Edit') + ' product'" collapse close>
      <Loader v-if="!isNew && isReceiving" :size="40"></Loader>
      <Form v-else>
        <div class="form-group row">
          <label class="col-md-2">Image</label>
          <div class="col-md-5">
            <b-dropdown variant="info" id="productImage">
              <template slot="button-content">
                <img v-if="product.img" class="product-image" alt="img" :src="product.img"/>
              </template>
              <b-dropdown-item v-for="img in images" :key="img" @click="updateProductProperty(img, 'img')">
                <img class="product-image" :alt="img" :src="img"/>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="productTitle">Title</label>
          <div class="col-md-5">
            <input class="form-control input-transparent" id="productTitle" type="text" :value="product.title" @change="updateProductProperty($event.target.value, 'title')"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="productSubtitle">Subtitle</label>
          <div class="col-md-5">
            <input class="form-control input-transparent" id="productSubtitle" type="text" :value="product.subtitle" @change="updateProductProperty($event.target.value, 'subtitle')"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="productPrice">Price</label>
          <div class="col-md-2">
            <input class="form-control input-transparent" id="productPrice" type="number" step="0.01" min="0.01" :value="product.price" @change="updateProductProperty($event.target.value, 'price')"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="productDiscount">Discount</label>
          <div class="col-md-2">
            <input class="form-control input-transparent" id="productDiscount" type="number" step="1" min="0" max="100" :value="product.discount || 0" @change="updateProductProperty($event.target.value, 'discount')"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="productDescription_1">Description </label>
          <div class="col-md-5">
            <textarea rows="3" class="form-control input-transparent" id="productDescription_1" :value="product.description_1" @change="updateProductProperty($event.target.value, 'description_1')"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="productDescription_2">Description </label>
          <div class="col-md-5">
            <textarea rows="3" class="form-control input-transparent" id="productDescription_2" :value="product.description_2" @change="updateProductProperty($event.target.value, 'description_2')"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="productCode">Code</label>
          <div class="col-md-2">
            <input class="form-control input-transparent" id="productCode" type="text" :value="product.code" @change="updateProductProperty($event.target.value, 'code')"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="productHashtag">Hashtag</label>
          <div class="col-md-5">
            <input class="form-control input-transparent" id="productHashtag" type="text" :value="product.hashtag" @change="updateProductProperty($event.target.value, 'hashtag')"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="productTechnology">Technology</label>
          <div class="col-md-5">
            <InputTag
              class="form-control input-transparent"
              id="productTechnology"
              :value="product.technology"
              @input="updateProductProperty($event, 'technology')"
              placeholder="Add Tag"
            >
            </InputTag>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2" for="productRating">Rating</label>
          <div class="col-md-2">
            <input class="form-control input-transparent" id="productRating" step="0.1" min="0" max="5" type="number" :value="product.rating" @change="updateProductProperty($event.target.value, 'rating')"/>
          </div>
        </div>
        <b-button-toolbar>
          <b-button variant="success" @click="!isNew ? updateProductRequest({product, $toaster}) : createProductRequest({product, $toaster})">
            <Loader v-if="isUpdating"></Loader>
            <span v-else>Save</span>
          </b-button>
          <b-button variant="default" @click="goBack()">
            Back
          </b-button>
          <span v-if="!isNew">
            <b-button id="deleteProductPopover" variant="danger">
              <Loader v-if="isDeleting"></Loader>
              <span v-else>Delete</span>
            </b-button>
            <b-popover class="popover-danger" target="deleteProductPopover" placement="top" :show.sync="popover">
              <template slot="title">
                <div class="px-5">Are you sure?</div>
              </template>
              <div class="px-5 d-flex justify-content-center">
                <b-button-toolbar>
                  <b-button variant="success" size="xs" @click="deleteProductRequest({id: product.id, $toaster})">
                    Yes
                  </b-button>
                  <b-button variant="danger" size="xs" @click="popover = false">
                    No
                  </b-button>
                </b-button-toolbar>
              </div>
            </b-popover>
          </span>
        </b-button-toolbar>
      </Form>
    </Widget>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex';
  import InputTag from 'vue-input-tag'
  import Widget from '@/components/Widget/Widget';
  import Loader from '@/components/Loader/Loader';

  export default {
    name: "ProductEdit",
    components: {Widget, Loader, InputTag},
    data() {
      return {
        popover: false
      }
    },
    mounted() {
      let newProduct = {
        id: -1,
        price: '0.01',
        rating: '5',
        technology: []
      };
      let product = this.findProduct(this.getId());
      if (this.getId() > -1) {
        this.loadProductRequest(this.getId());
      } else {
        if (!product) {
          this.receiveProduct(newProduct);
        }

      }
      this.getProductsImagesRequest(newProduct);
    },
    computed: {
      ...mapState("products", ["products", "isReceiving", "isDeleting", "isUpdating", "images"]),
      isNew() { return this.getId() === -1},
      product() {
        return this.findProduct(this.getId()) || {technology: []}
      }
    },
    methods: {
      ...mapActions("products", [
        "loadProductRequest",
        "updateProductRequest",
        "createProductRequest",
        "deleteProductRequest",
        "receiveProduct",
        "updateProduct",
        "getProductsImagesRequest"
      ]),
      goBack() {
        this.$router.push('/app/ecommerce/management');
      },
      findProduct(id) {
        return this.products.find(p => p.id === id);
      },
      getId() {
        return parseInt(this.$route.params.id) || -1;
      },
      updateProductProperty(value, key) {
        let product = this.product;
        product[key] = value;
        this.updateProduct(product);
      }
    }
  }
</script>
<style src="./ProductEdit.scss" lang="scss"></style>