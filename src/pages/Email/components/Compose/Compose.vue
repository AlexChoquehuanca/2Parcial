<template>
  <Widget>
    <div class="compose">
      <h4 class="mb-lg">Compose <span class="fw-semi-bold">New</span></h4>
      <b-form-input class="mb" type="text" placeholder="To" :value="data && data.from" />
      <b-form-input class="mb" type="text" placeholder="Subject" :value="data && data.theme" />
      <ckeditor :editor="wygEditor" v-model="wygContent"></ckeditor>
      <div class="text-md-right mt">
        <b-button class="ms-1" variant="default">Discard</b-button>
        <b-button class="ms-1" variant="default">Save</b-button>
        <b-button class="ms-1" variant="danger">Send</b-button>
      </div>
    </div>
  </Widget>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: 'Compose',
  components: { Widget },
  props: ['data'],
  data() {
    return {
      wygEditor: ClassicEditor,
      wygContent: '',
    };
  },
};
</script>
