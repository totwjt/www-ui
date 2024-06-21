import { ExtractPropTypes } from 'vue'

export const desensitizationProps = {
  // 需要脱敏的字段
  label: {
    type: String,
    default: null
  },
  // 脱敏类型 idCard phone number
  type: {
    type: String,
    default: ''
  },
  // 脱敏长度
  length: {
    type: Number,
    default: 6
  },
  iconSize: {
    type: Number,
    default: 16
  },
  dot: {
    type: String,
    default: '*'
  },
  // 脱敏内容
  value: {
    type: String,
    default: ''
  },
  beforLen: {
    type: Number,
    default: 2
  },
  afterLen: {
    type: Number,
    default: 2
  }
} as const

export type DesensitizationProps = ExtractPropTypes<
  typeof desensitizationProps
>;
