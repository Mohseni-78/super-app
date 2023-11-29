import { productService } from "@/services";
import * as types from "@/store/types";
import { mapActions, mapGetters } from "vuex";
import shorter from "@/filters/shorter";

export default {
  data() {
    return { products: null };
  },
  filters: {
    shorter,
  },
  computed: {
    ...mapGetters({
      getProVuex: types.product.getters.GET_PRODUCTS,
    }),
  },
  mounted() {
    this.getPro();
    console.log(this.products);
  },
  methods: {
    ...mapActions({
      setProducts: types.product.actions.SET_PRODUCT_DATA,
    }),
    getPro() {
      productService.getProducts().then((res) => {
        this.setProducts(res.data);
        this.products = res.data;
      });
    },
  },
};
