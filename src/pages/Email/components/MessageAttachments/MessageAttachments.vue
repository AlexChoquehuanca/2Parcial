<template>
  <div class="messageAttachments">
    <hr />
    <div class="attachmentsInfo">
      <strong>{{attachments.length}} attachments</strong> -
      <a class="ms-1" href="#">Download all attachments</a>
      <a class="ms-1" href="#">View all attachments</a>
    </div>
      <div v-for="attachment in attachments" class="attachment" :key="attachment.id">
        <img class="img-fluid" :src="attachment.photo" alt="attachment" />
        <h5 class="fw-semi-bold">{{attachment.photoName}}</h5>
        <div class="attachmentButtons">
          {{attachment.weight}}
          <a class="ms-2" href="#">View</a>
          <a class="ms-2" href="#">Download</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MessageAttachments',
  props: ['attachments'],
};
</script>

<style src="./MessageAttachments.scss" lang="scss" scoped />
