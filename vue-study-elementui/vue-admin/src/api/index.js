import {get} from '@/utils/request'

export default {
  reg: (params) => get('/api/reg', params)
}
