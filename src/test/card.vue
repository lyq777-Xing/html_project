<!-- <template>
  <cardA :barList="[]" />
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed, reactive } from "vue";

const question = ref("");
const answer = ref("Questions usually contain a question mark. ;-)");
const loading = ref(false);
  //   const a = {
  //     [Symbol.iterator]: function* () {
  //       yield 1;
  //       yield 2;
  //       yield 3;
  //     },
  //   };
  //   for (const x of a) {
  //     console.log(x);
  //   }

  //   function* aa() {
  //     yield 1;
  //     yield 2;
  //     yield 3;
  //   }
  //   const b = aa();
  //   b.next();
  //   b.next();
const list = reactive([
  {
    url: require("../assets/img/bar-1.png"),
    key: 1,
  },
  {
    url: require("../assets/img/bar-2.png"),
    key: 2,
  },
  {
    url: require("../assets/img/bar-3.png"),
    key: 3,
  },
]);
list.
// 可以直接侦听一个 ref
// watch(
//   () => question.value + answer.value,
//   async (newQuestion, oldQuestion) => {
//     if (newQuestion.includes("?")) {
//       loading.value = true;
//       answer.value = "Thinking...";
//       try {
//         const res = await fetch("https://yesno.wtf/api");
//         answer.value = (await res.json()).answer;
//       } catch (error) {
//         answer.value = "Error! Could not reach the API. " + error;
//       } finally {
//         loading.value = false;
//       }
//     }
//   }
// );
let aa = computed(() => {
  return question.value + answer.value;
});
// defineProps({
//   barList: {
//     type: Array,
//     default: () => [],
//   },
// });
// defineProps<{
//   barList: Array<{
//     url: string,
//     key: number
//     }>
//   }>();
</script>
<script   lang="ts" >
export default {
  props: {
    barList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {},
};
</script> -->
