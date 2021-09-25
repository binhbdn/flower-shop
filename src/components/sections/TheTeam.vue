<template>
  <section class="team spad">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-7">
          <div class="section-title">
            <span>Nhóm Chúng Tôi</span>
            <h2>Chuyên Gia Về Hoa</h2>
          </div>
        </div>
        <div class="col-md-6 col-lg-5">
          <div class="team__btn">
            <a href="#" class="btn-florist btn-outline-florist"
              >Kết nối chuyên gia</a
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(teamMember, index) in teamMembers"
          :key="index"
          class="col-lg-3 col-md-6 col-sm-6"
        >
          <TeamMember :member="teamMember" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TeamMember from "@/components/base/BaseTeamMember";
import axios from "axios";

export default {
  name: "TheTeam",
  components: {
    TeamMember,
  },
  data: function () {
    return {
      teamMembers: null,
    };
  },
  created: function () {
    // API endpoint name: our-team-member
    axios
      .get(
        `${process.env.VUE_APP_ROOT_API}/09d2281d-c0ce-4c7b-8b65-a753e95130be`
      )
      .then((response) => {
        this.teamMembers = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>
