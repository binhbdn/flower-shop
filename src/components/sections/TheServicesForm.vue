<template>
  <div class="services__tab__details__form">
    <h4>Yêu cầu báo giá</h4>
    <form action="#">
      <div class="row">
        <div class="col-md-6 col-lg-6">
          <input type="text" class="form-control" placeholder="Tên" />
        </div>
        <div class="col-md-6 col-lg-6">
          <input type="tel" class="form-control" placeholder="Số điện thoại" />
        </div>
        <div class="col-md-6 col-lg-6">
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="col-md-6 col-lg-6">
          <select class="form-control">
            <option selected>Chọn loại dịch vụ…</option>
            <option value="1">Hoa theo yêu cầu</option>
            <option value="2">Hoa cho sự kiện</option>
            <option value="3">Chăm sóc cảnh quan</option>
          </select>
        </div>
        <div class="col-lg-12 text-center">
          <textarea
            class="form-control"
            placeholder="Nội dung yêu cầu báo giá"
          ></textarea>
          <button type="submit" class="btn-florist btn-outline-florist">
            Gửi yêu cầu báo giá
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TheServicesForm",
};
</script>
