<template>
  <div class="modal-container">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn button btn-outline-primary"
      data-bs-toggle="modal"
      data-bs-target="#registerModal"
    >
      Kirish
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="registerModal"
      tabindex="-1"
      aria-labelledby="registerModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="registerModalLabel">
              Ro’yxatdan o’tish yoki kirish
            </h1>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label for="phone">Telefon raqam</label>
            <input class="form-control" type="text" placeholder="+998" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary form-control">
              Davom etish
            </button>
            <button
              type="button"
              class="btn btn-secondary form-control"
              data-bs-dismiss="modal"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.button {
  padding: 10px 32px;
  height: 44px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
}
</style>
