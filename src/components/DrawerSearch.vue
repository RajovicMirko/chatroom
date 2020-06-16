<template>
  <div class="input-group mt-2 mb-2 bg-secondary text-white">
    <input
      type="text"
      class="form-control"
      placeholder="Search"
      aria-describedby="basic-addon1"
      :value="query"
      @input="$emit('update:query', $event.target.value)"
    />
    <div class="input-group-prepend d-flex justify-content-center align-items-center p-2">
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.input-group {
  white-space: nowrap;
}

.form-control {
  border-radius: 0;
}

.form-control:focus {
  border: 2px solid rgb(236, 233, 4);
}
</style>