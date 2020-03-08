import Vue from "vue";
import {
  Card,
  Col,
  Icon,
  Input,
  Layout,
  message,
  Row,
  Divider
} from "ant-design-vue";

Vue.prototype.$message = message;

/* v1.1.3+ registration methods */
Vue.use(Card);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Layout);
Vue.use(Row);
Vue.use(Divider);
