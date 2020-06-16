<template>
  <div class="input-group mt-2 mb-2 bg-secondary text-white">
    <input
      type="text"
      class="form-control"
      placeholder="Search"
      aria-describedby="basic-addon1"
      @keypress="handleKeypress"
    />
    <div class="input-group-prepend d-flex justify-content-center align-items-center p-2">
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleKeypress(e) {
      if (e.keyCode === 13) {
        console.log("Submit", e.target.value);
      }
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