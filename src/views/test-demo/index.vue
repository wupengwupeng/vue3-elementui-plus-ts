<template>
  <div>
    nihao
    {{ title }}
    {{ eat() }}
    // eslint-disable-next-line vue/valid-v-model
    <table>
      <tr>
        <td
          v-for="(keyValue,key) in model.sompProjectTargetDto.apqp"
          :key="key+'apqp'"
        >
          {{ key + keyValue }}
          <input
            v-model="model.sompProjectTargetDto.apqp[key]"
            @input="handleInput(model.sompProjectTargetDto.apqp[key],'apqp',key)"
          >
        </td>
      </tr>
    </table>
    <el-input
      v-model="input1"
      @input="handlerInputOne"
    />
    <el-input v-model="input2" />
    <div
      v-for="(item,index) in arr"
      :key="index+ 'arr'"
    >
      <el-input
        v-model="item.price"
        @input="handlerInputItem"
      />
    </div>
    <el-button @click="handleAdd">
      增加
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'
import BigNumber from 'bignumber.js'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: '这是测试文件'
    },
    name: {
      type: String,
      default: '相关的三十东方'
    },
    name1: {
      type: String,
      default: '相关的三十东方'
    }
  },
  setup(props, content) {
    console.log(props, content)
    const titles = ref('我叫吴鹏正在学习vue3')
    const data = reactive({
      message: '今天吃什么东西',
      input1: '',
      input2: '',
      arr: [
        {
          price: ''
        }
      ],
      model: {
        sompProjectTargetDto: {
          apqp: {
            fko: '23423423',
            a: 'niasf',
            b: 'ooo'
          }
        }
      },
      eat() {
        return this.message
      },
      percent(v: string): string {
        if (v) {
          return v + '%'
        } else {
          return v
        }
      },
      handleAdd() {
        const obj = { price: '' }
        data.arr.push(obj)
        console.log(data.arr)
        data.cumputedAll()
      },
      handlerInputItem() {
        data.cumputedAll()
      },
      handlerInputOne() {
        data.cumputedAll()
      },
      // 计算通用方法
      cumputedAll() {
        const initialValue = 0
        const sum = data.arr.reduce(function(pro: any, cur: any): any {
          return new BigNumber(Number(pro)).plus(Number(cur.price))
        }, initialValue)
        const a = new BigNumber(Number(data.input1)).minus(Number(sum))
        if (Number(a) <= 0) {
          data.input2 = '0'
        } else {
          data.input2 = a.toString()
        }
      },
      handleInput(value: any, key1: string, key2: string): void {
        value = value.replace(/[^\d.]/g, '') // 先把非数字的都替换掉，除了数字和.
        value = value.replace(/^\./g, '') // 必须保证第一个为数字而不是.
        value = value.replace(/\.{2,}/g, '.') // 保证只有出现一个.而没有多个.
        value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.') // 保证.只出现一次，而不能出现两次以上
        value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3') // 小数点后面保留2位
        this.model.sompProjectTargetDto[key1][key2] = this.percent(value)
        console.log(this, 9999)
      }

    })

    return {
      titles,
      ...toRefs(data)
    }
  }
})
</script>
