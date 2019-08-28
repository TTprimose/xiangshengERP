let bar = {
    xAxis: [{
        type: 'category',
        textStyle: {
            color: '#000',
            fontSize: '14'
        },
        data: [],
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            formatter: function (params) {
                let newParamsName = ""

                let paramsNameNumber = params.length

                let provideNumber = 4

                let rowNumber = Math.ceil(paramsNameNumber / provideNumber);

                if (paramsNameNumber > provideNumber) {
                    for (let p = 0; p < rowNumber; p++) {
                        let tempStr = "";

                        let start = p * provideNumber; // 开始截取的位置

                        let end = start + provideNumber; // 结束截取的位置

                        // 此处特殊处理最后一行的索引值
                        if (p == rowNumber - 1) {
                            // 最后一次不换行
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            // 每一次拼接字符串并换行
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr; // 最终拼成的字符串
                    }
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }
        }
    }],
    yAxis: [{
        type: 'value',
        max: 100
    }],
    series: [{
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#000'
                }
            }
        },
        type: 'bar',
        barWidth: '40',
        color: '#f4c30d',
        data: [],
        itemStyle: {
            normal: {
                color: function (params) {
                    if (params.value > 0 && params.value < 40) {
                        return "#14d578";
                    } else if (
                        params.value >= 40 &&
                        params.value <= 70
                    ) {
                        return "#f5c210";
                    }
                    return "#f55f24";
                }
            }
        }
    }]
}

let smallbar = {
    xAxis: [{
        type: 'category',
        textStyle: {
            color: '#000',
            fontSize: '14'
        },
        data: [],
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            formatter: function (params) {
                let newParamsName = ""

                let paramsNameNumber = params.length

                let provideNumber = 3

                let rowNumber = Math.ceil(paramsNameNumber / provideNumber);

                if (paramsNameNumber > provideNumber) {
                    for (let p = 0; p < rowNumber; p++) {
                        let tempStr = "";

                        let start = p * provideNumber; // 开始截取的位置

                        let end = start + provideNumber; // 结束截取的位置

                        // 此处特殊处理最后一行的索引值
                        if (p == rowNumber - 1) {
                            // 最后一次不换行
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            // 每一次拼接字符串并换行
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr; // 最终拼成的字符串
                    }
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }
        }
    }],
    yAxis: [{
        type: 'value',
        max: 100
    }],
    series: [{
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#000'
                }
            }
        },
        type: 'bar',
        barWidth: '20',
        color: '#f4c30d',
        data: [],
        itemStyle: {
            normal: {
                color: function (params) {
                    if (params.value > 0 && params.value < 40) {
                        return "#14d578";
                    } else if (
                        params.value >= 40 &&
                        params.value <= 70
                    ) {
                        return "#f5c210";
                    }
                    return "#f55f24";
                }
            }
        }
    }]
}

let gauge = {
    axisLabel: {
        formatter: function (v) {
            if (Number(v) == 20) {
                return '较低';
            } else if (Number(v) == 30) {
                return '偏低';
            } else if (Number(v) == 50) {
                return '偏高';
            } else if (Number(v) == 70) {
                return '较高';
            } else if (Number(v) == 90) {
                return '过高';
            }
        }
    },
    series: [{
        type: 'gauge',
        detail: {
            formatter: function (v) {
                if (v <= 20) {
                    return '较低';
                } else if (v <= 40) {
                    return '偏低';
                } else if (v <= 60) {
                    return '偏高';
                } else if (v <= 80) {
                    return '较高';
                } else if (v <= 100) {
                    return '过高';
                }
            }
        },
        data: [{
            value: ''
        }],
        axisLine: { // 仪表盘背景色设置
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.2, '#4169c4'],
                    [0.4, '#26a3f5'],
                    [0.6, '#14d578'],
                    [0.8, '#f5c210'],
                    [1, '#f55f24']
                ]
            }
        }
    }]
}

let scatter = {
    xAxis: [{
        type: 'value',
        scale: true
    }],
    yAxis: [{
        type: 'value',
        scale: true
    }],
    series: [{
        symbolSize: 12,
        data: [],
        color: '#31c3cb',
        type: 'scatter'
    },
    {
        symbolSize: 12,
        data: [],
        color: '#b4a1e3',
        type: 'scatter'
    }
    ]
}

let radar = {
    title: {
        target: '_bank',
        top: '5%',
        left: '3%',
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    legend: { // 图例组件
        show: true,
        icon: 'rect', // 图例项的 icon。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'也可以通过 'image://url' 设置为图片，其中 url 为图片的链接，或者 dataURI。可以通过 'path://' 将图标设置为任意的矢量路径。
        top: '40%', // 图例距离顶部边距
        left: '15%', // 图例距离左侧边距
        itemWidth: 10, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 10, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 30, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        orient: 'vertical', // 图例列表的布局朝向,'horizontal'为横向,''为纵向.
        textStyle: { // 图例的公用文本样式。
            fontSize: 14,
            color: '#fff'
        },
        data: []
    },
    radar: [{ // 雷达图坐标系组件，只适用于雷达图。
        center: ['50%',
            '50%'
        ], // 圆中心坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
        radius: 160, // 圆的半径，数组的第一项是内半径，第二项是外半径。
        startAngle: 90, // 坐标系起始角度，也就是第一个指示器轴的角度。[ default: 90 ]
        name: { // (圆外的标签)雷达图每个指示器名称的配置项。
            formatter: '{value}',
            textStyle: {
                fontSize: 14,
                color: '#000'
            }
        },
        nameGap: 15, // 指示器名称和指示器轴的距离。[ default: 15 ]
        splitNumber: 6, // (这里是圆的环数)  指示器轴的分割段数。[ default: 5 ]
        shape: 'circle', // 雷达图绘制类型，支持 'polygon'(多边形) 和 'circle'(圆)。[ default: 'polygon' ]
        axisLine: { // (圆内的几条直线)坐标轴轴线相关设置
            lineStyle: {
                color: '#fff', // 坐标轴线线的颜色。
                width: 1, // 坐标轴线线宽。
                type: 'solid' // 坐标轴线线的类型。
            }
        },
        splitLine: { // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
            lineStyle: {
                color: '#fff', // 分隔线颜色
                width: 1 // 分隔线线宽
            }
        },
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: {
                color: ['#fff', '#4169c4', '#26a3f5',
                    '#14d578', '#f5c210', '#f55f24'
                ]
            }
        },
        indicator: []
    }],
    series: [{
        name: '雷达图', // 系列名称,用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        type: 'radar', // 系列类型: 雷达图
        itemStyle: { // 折线拐点标志的样式。
            normal: { // 普通状态时的样式
                lineStyle: {
                    width: 1.2
                },
                opacity: 0
            }
        },
        data: [
            { // 雷达图的数据是多变量（维度）的
                value: [],
                symbol: 'circle', // 单个数据标记的图形。
                symbolSize: 5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                label: { // 单个拐点文本的样式设置
                    normal: {
                        show: true, // 单个拐点文本的样式设置。[ default: false ]
                        position: 'top', // 标签的位置。[ default: top ]
                        distance: 5, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                        color: '#333',
                        borderColor: '#fff', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                        fontSize: 14, // 文字的字体大小
                        formatter: function (params) {
                            return params.value;
                        }
                    }
                },
                itemStyle: { // 单个拐点标志的样式设置。
                    normal: {
                        borderColor: '#fff', // 拐点的描边颜色。[ default: '#000' ]
                        borderWidth: 1 // 拐点的描边宽度，默认不描边。[ default: 0 ]
                    }
                },
                lineStyle: { // 单项线条样式。
                    normal: {
                        color: '#333',
                        opacity: 1 // 图形透明度
                    }
                }
            }
        ]
    }]
}

export default {
    bar,
    gauge,
    scatter,
    radar,
    smallbar
}
