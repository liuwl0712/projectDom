import $axios from "./request.js";

var url = "/query/Interface/";
// 查询接口列表
export function qryInterfacePage(data) {
  return $axios({
    url: url + "query/Interface",
    method: "post",
    data: data,
  });
}
