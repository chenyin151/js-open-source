/*
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-12-17 13:35:16
 * @LastEditors: cy
 * @LastEditTime: 2021-12-22 10:25:13
 */
import dat from 'dat.gui';
const Dat = function($opt) {
    console.log('Dat', $opt);
    var scope       = this;
    var gui         = new dat.GUI();
    var pids        = [];
    var index       = 0;
    this.option     = $opt;
    this.folders    = {};
    paint();

    this.update = function() {
        paint();
    }
    
    function paint() {
        var stack   = scope.option;

        while (stack.length) {
            var n   = stack.shift();
            n.id    = index;

            // 若是最底层节点
            if (!n.children) {
                var data    = { [n.prop]: n.value };
                var pid     = pids[0].shift();
                var pFolder = scope.folders[pid];
                var step    = n.step ?? 1;
                if (pFolder)                        pFolder.add(data, n.prop, n.min, n.max).step(step).name(n.label);
                if (pids.length && !pids[0].length) pids.shift();
                continue;
            }
            if (n.children) {
                // 若没父节点id则一定是顶层节点, 创建一个文件夹并把此文件夹实例
                // 存入folders对象中，后面根据此节点id可以获取到该文件夹实例
                if (!pids.length) {
                    var folder          = gui.addFolder(n.label)
                    scope.folders[n.id] = folder;
                } else {
                    var pid             = pids[0].shift();
                    var pFolder         = scope.folders[pid];
                    var folder          = pFolder.addFolder(n.label)
                    scope.folders[n.id] = folder;
                }
               
                // 当第1项为空的时候则移除
                if (pids.length && !pids[0].length) pids.shift();
                // 当没有子项的时候则不加
                if (n.children.length > 0) pids.push(new Array(n.children.length).fill(n.id));
                stack.push(...n.children)
            }
            index ++;
        }
    }
}
export default Dat;
