import { VantComponent } from '../common/component';
VantComponent({
  relation: {
    name: 'custom-tabs',
    type: 'ancestor',
    current: 'tab',
  },
  props: {
    showLine: {
      type: Boolean,
      value: true
    },
    icon:{
      type: String,
      value: 'number'
    },
    dot: {
      type: Boolean,
      observer: 'update',
    },
    info: {
      type: null,
      observer: 'update',
    },
    title: {
      type: String,
      observer: 'update',
    },
    disabled: {
      type: Boolean,
      observer: 'update',
    },
    titleStyle: {
      type: String,
      observer: 'update',
    },
    name: {
      type: [Number, String],
      value: '',
    },
  },
  data: {
    active: false,
  },
  methods: {
    getComputedName() {
      if (this.data.name !== '') {
        return this.data.name;
      }
      return this.index;
    },
    updateRender(active, parent) {
      const { data: parentData } = parent;
      this.inited = this.inited || active;
      this.setData({
        active,
        shouldRender: this.inited || !parentData.lazyRender,
        shouldShow: active || parentData.animated,
      });
    },
    update() {
      if (this.parent) {
        this.parent.updateTabs();
      }
    },
  },
});
