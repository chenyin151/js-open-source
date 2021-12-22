/*
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-12-22 10:49:02
 * @LastEditors: cy
 * @LastEditTime: 2021-12-22 10:50:41
 */
import Dat from './dat.js';
var option = [{ label: '场景', prop: 'all', children: [
    { label: '全景图',  prop: 'pano', children: [
        { label: 'x', prop: 'x', value: 500, min: 0, max: 1000, step: 100 },
        { label: 'y', prop: 'y', value: 500, min: 0, max: 1000 },
        { label: 'z', prop: 'z', value: 500, min: 0, max: 1000 },
        { label: 'root', prop: 'root', children: [
            { label: 'chi', prop: 'chi', children: [
                { label: 'x', prop: 'x', value: 500, min: 0, max: 1000},
                { label: 'y', prop: 'y', value: 500, min: 0, max: 1000},
                { label: 'z', prop: 'z', value: 500, min: 0, max: 1000}
            ]}
        ]}
    ]},
    { label: '模型', prop: 'model', children: [
        { label: 'x', prop: 'x', value: 500, min: 0, max: 1000 },
        { label: 'y', prop: 'y', value: 500, min: 0, max: 1000 },
        { label: 'z', prop: 'z', value: 500, min: 0, max: 1000 },
        { label: 'root1', prop: 'root', children: [
            { label: 'x', prop: 'x', value: 500, min: 0, max: 1000},
            { label: 'y', prop: 'y', value: 500, min: 0, max: 1000},
            { label: 'z', prop: 'z', value: 500, min: 0, max: 1000},
            { label: 'root2', prop: 'root2', children: [
                { label: 'x', prop: 'x', value: 500, min: 0, max: 1000},
                { label: 'y', prop: 'y', value: 500, min: 0, max: 1000},
                { label: 'z', prop: 'z', value: 500, min: 0, max: 1000},
            ]}
        ] }
    ]},
    { label: '摄像头', prop: 'camera', children: [
        { label: 'x', prop: 'x', value: 500, min: 0, max: 1000 },
        { label: 'y', prop: 'y', value: 500, min: 0, max: 1000 },
        { label: 'z', prop: 'z', value: 500, min: 0, max: 1000 },
        { label: 'root1', prop: 'root1', children: [
            { label: 'x', prop: 'x', value: 500, min: 0, max: 1000},
            { label: 'y', prop: 'y', value: 500, min: 0, max: 1000},
            { label: 'z', prop: 'z', value: 500, min: 0, max: 1000},
            { label: 'root2', prop: 'root2', children: [
                { label: 'x', prop: 'x', value: 500, min: 0, max: 1000},
                { label: 'y', prop: 'y', value: 500, min: 0, max: 1000},
                { label: 'z', prop: 'z', value: 500, min: 0, max: 1000},
            ]}
        ]}
    ]}
] }]

new Dat(option);