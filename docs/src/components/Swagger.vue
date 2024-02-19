<template>
  <div class="swagger" :id="id"></div>
</template>

<script>
export default {
  name: "Swagger",
  props: {
    yaml: String,
    id: String,
  },
  mounted() {
    SwaggerUIBundle({
      url: this.yaml,
      dom_id: "#" + this.id,
      docExpansion: "list",
    });
  },
};
</script>

<style>
div.information-container,
div.scheme-container {
  display: none;
}
.swagger-ui .opblock {
  border: none;
  background: none !important;
  box-shadow: none;
}
.swagger-ui .authorization__btn.unlocked {
  display: none;
}
.swagger-ui .opblock .opblock-summary .view-line-link {
  position: initial;
  width: 1.5rem;
  display: flex;
  justify-content: center;
}
.swagger-ui .opblock.opblock-get {
  background: none !important;
  border-color: #e5e5e5;
  border: none;
  box-shadow: none !important;
  border-radius: 6px;
}
.swagger-ui .opblock.opblock-get {
  /* background: rgba(97, 176, 254, 0.15) !important; */
}

.swagger-ui .opblock-summary-control:focus {
  outline: none;
}

.swagger-ui {
  font-family: "Open Sans", sans-serif;
}

.swagger-ui .wrapper {
  padding: 0 !important;
}

.swagger-ui .opblock .opblock-summary {
  border: none !important;
  padding: 10px 0;
}

.swagger-ui .opblock .opblock-section-header {
  box-shadow: none;
}

.opblock-tag.no-desc {
  display: none;
}

.swagger-ui .btn,
.swagger-ui .btn:hover {
  box-shadow: none;
  border: 2px solid #e5e5e5;
}
.swagger-ui table {
  padding: 0;
}

.swagger-ui .table-container {
  padding: 20px 0;
}

.swagger-ui .opblock .opblock-section-header {
  padding: 8px 6px;
}

.swagger-ui .responses-inner {
  padding: 20px 0;
}
</style>
