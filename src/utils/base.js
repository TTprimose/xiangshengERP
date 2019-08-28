export default {
    findList(data) {
        let list = data

        for (let i = 0; i < list.length; i++) {
            list[i].open = false
            if (list[i].children.length) {
                this.findList(list[i].children)
            }
        }
        return list
    },

    //深拷贝
    deepCopy(obj) {
        let result = Array.isArray(obj) ? [] : {};

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    result[key] = this.deepCopy(obj[key]); //递归复制
                } else {
                    result[key] = obj[key];
                }
            }
        }
        return result;
    }

}
