<template>
  <div class="welcome">
    <el-row
      :gutter="10"
      class="row"
    >
      <el-col :span="24">
        <el-card
          id="card"
          class="card"
        >
          <v-chart :options="active"></v-chart>
        </el-card>
      </el-col>
    </el-row>
    <el-row
      :gutter="10"
      class="row"
    >
      <el-col :span="6">
        <el-card
          shadow="hover"
          class="topCard card"
        >
          <div slot="header">
            <span>阅读量</span>
            <el-tag
              type="danger"
              effect="dark"
              class="btn"
            >日</el-tag>
          </div>
          <div class="content">

            <el-divider></el-divider>
            <div class="other">总阅读量：50000</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          shadow="hover"
          class="topCard card"
        >
          <div slot="header">
            <span>发布量</span>
            <el-tag
              type="danger"
              effect="dark"
              class="btn"
            >日</el-tag>
          </div>
          <div class="content">

            <el-divider></el-divider>
            <div class="other">总发布量：182</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          shadow="hover"
          class="topCard card"
        >
          <div slot="header">
            <span>销售额</span>
            <el-tag
              type="warning"
              effect="dark"
              class="btn"
            >年</el-tag>
          </div>
          <div class="content">

            <el-divider></el-divider>
            <div class="other">
              <el-progress :percentage="50"></el-progress>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          shadow="hover"
          class="topCard card"
        >
          <div slot="header">
            <span>用户量</span>
          </div>
          <div class="content">

            <el-divider></el-divider>
            <div class="other">希望更多的用户进来</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row
      :gutter="10"
      class="row"
    >
      <el-col :span="17">
        <el-row :gutter="5">
          <el-col :span="12">
            <el-card
              shadow="always"
              class="card"
            >
              <div slot="header">最新发布文章</div>
              <ul>
                <li
                  v-for="(item, index) in newArticle"
                  :key="index"
                >
                  <span number>{{index+1}}</span>
                  <span articleHeader>{{item.title}}</span>
                </li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card
              shadow="always"
              class="card"
            >
              <div slot="header">精选文章</div>
              <ul>
                <li
                  v-for="(item, index) in selectedArticle"
                  :key="index"
                >
                  <span number>{{index+1}}</span>
                  <span articleHeader>{{item.title}}</span>
                </li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="24">
            <el-card
              shadow="always"
              style="margin-top: 10px"
              class="card"
            >
              <div slot="header"><i class="el-icon-info"></i><span>说明</span></div>
              <div style="height: 271px">
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="7">
        <el-card
          shadow="always"
          class="cardBottom card cardBottom-notic"
        >
          <div slot="header"><i class="el-icon-message-solid"></i><span>通告</span></div>
          <div class="notice">
            <el-timeline :reverse="true">
              <el-timeline-item
                v-for="(item, index) in notice"
                :key="index"
              >
                {{item.content}}
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
        <el-card
          shadow="always"
          class="cardBottom card"
        >
          <div slot="header"><i class="el-icon-s-help"></i><span>帮助</span></div>
          <div>
            <el-card
              shadow="hover"
              style="margin-bottom: 10px;background-color: #E6A23C"
            >
              点击查看
            </el-card>
            <el-card shadow="hover">
              点击帮助
            </el-card>
          </div>
        </el-card>
        <el-card
          shadow="always"
          class="cardBottom card"
        >
          <div slot="header"><i class="el-icon-info"></i><span>信息</span></div>
          <div>
            <el-button
              icon="el-icon-search"
              circle
            ></el-button>
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
            ></el-button>
            <el-button
              type="success"
              icon="el-icon-check"
              circle
            ></el-button>
            <el-button
              type="info"
              icon="el-icon-message"
              circle
            ></el-button>
            <el-button
              type="warning"
              icon="el-icon-star-off"
              circle
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
            ></el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

export default {
  name: "Welcome",
  data() {
    return {
      active: {
        legend: {
          data: ["发布量", "活跃量"],
        },
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross",
          },
        },
        xAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
          name: "总数",
        },
        series: [
          {
            name: "发布量",
            data: [0, 0, 0, 0, 0, 10, 5],
            type: "line",
            smooth: true,
          },
          {
            name: "活跃量",
            data: [1, 1, 0, 2, 10, 5, 1],
            type: "line",
            smooth: true,
          },
        ],
      },
      newArticle: [
        { title: "VUE知识大全" },
        { title: "JavaEE一篇过，让你恍然大悟" },
        { title: "SpringBoot整合mybaits的配置" },
        { title: "VUE快速入门" },
        { title: "JavaHashMap详解" },
        { title: "SpringBoot常用注解" },
      ],
      selectedArticle: [
        { title: "JAVA永不言败" },
        { title: "VUE面试大全" },
        { title: "JAVAEE入门指南" },
        { title: "JAVA不败的传说" },
        { title: "中间件学习笔记" },
        { title: "redis笔记" },
      ],
      notice: [
        {
          content: "最新通知，后端管理系统正式上线",
          times: "1588143594",
        },
        {
          content: "12月25日，系统进行一次升级",
          times: "1588143594",
        },
        {
          content: "最新报道，这个系统很棒哦",
          times: "1588143594",
        },
        {
          content: "希望系统优化更加好",
          times: "1588143594",
        },
        {
          content: "12月25日，系统进行一次升级",
          times: "1588143594",
        },
        {
          content: "最新报道，这个系统很棒哦",
          times: "1588143594",
        },
        {
          content: "希望系统优化更加好",
          times: "1588143594",
        },
      ],
    };
  },
  components: {
    "v-chart": ECharts,
  },
};
</script>

<style lang="less">
.row,
.cardBottom {
  margin-bottom: 10px;
}
.cardBottom-notic {
  height: 255px;
  .el-card__body {
    overflow: auto;
    height: 130px;
  }
}

.topCard {
  width: 100%;
  height: 196px;
  overflow: hidden;
}

.topCard .btn,
.range,
.card .btn {
  float: right;
}

.topCard .content {
  font-size: 20px;
  font-weight: 600;
}

.topCard .content span:nth-child(1) {
  color: #5f4b8b;
}

.topCard .content .other {
  font-size: 16px;
  font-weight: 400;
}

.echarts {
  width: 100%;
  height: 500px;
}
</style>