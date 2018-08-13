import { EventEmitter } from "events";
import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../ActionType';

const CHANGE_EVENT = 'changed';
const counterValues = {
    'First': 0,
    'Second': 10,
    'Thrid': 20
};
//Object.assign()方法,特点：浅拷贝、对象属性的合并
//例如：var nObj = Object.assign({},obj,obj1);
//花括号叫目标对象，后面的obj、obj1是源对象。
//对象合并是指：将源对象里面的属性添加到目标对象中去，若两者的属性名有冲突，后面的将会覆盖前面的

const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues: function () {
        return counterValues;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

CounterStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INCREMENT) {
        counterValues[action.couterCaption]++;
        CounterStore.emitChange();
    }
    else if (action.type === ActionTypes.DECREMENT) {
        counterValues[action.couterCaption]--;
        CounterStore.emitChange();
    }
});

export default CounterStore;