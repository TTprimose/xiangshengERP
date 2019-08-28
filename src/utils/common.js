export default {
    findTree(data, item) {
        let list = data

        for (let i = 0; i < list.length; i++) {
            if (list[i].id == item.id) {
                for (let j = 0; j < list.length; j++) {
                    if (list[j].resourceType == item.resourceType && list[j].id != item.id) {
                        list[j].open = false
                        if (list[j].children.length) {
                            this.openFasle(list[j].children)
                        }
                    }
                }
                list[i].open = !list[i].open;

            } else {
                this.findTree(list[i].children, item)
            }
        }

        return list
    },

    openFasle(data) {
        let list = data

        for (let i = 0; i < list.length; i++) {
            list[i].open = false
            if (list[i].children.length) {
                this.openFasle(list[i].children)
            }
        }

        return list
    },

    tabsChangeTree(data, itemId) {
        let list = data

        this.findList(list)

        const depMenu = (children, id, obj) => {
            let json

            if (obj){
                json = obj
            } else {
                json = {}
            }

            children.map((item, index) => {
                if (item.id == id) {
                    if (json.id) {
                        json.open = true;
                        depMenu(list, json.id);
                    }
                    return;
                } else {
                    if (item.children && item.children.length) {
                        depMenu(item.children, id, item);
                    }
                }
            });
        };

        depMenu(list, itemId.id)

        return list
    },
    findList(data) {
        let list = data

        for (let i = 0; i < list.length; i++) {
            list[i].open = false
            if (list[i].children.length) {
                this.findList(list[i].children)
            }
        }
        return list
    }
}
