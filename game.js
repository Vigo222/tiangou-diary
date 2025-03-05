// 游戏场景数据
const scenarios = [
    {
        text: "早上，WM在校园里偶遇了Hxz，他正拿着一杯奶茶向WM走来。",
        choices: [
            { 
                text: "WM笑着说'好啊好啊'，接受奶茶并道谢", 
                effects: { 
                    hearts: { hxz: 5, lzw: 0, lkw: -2 },
                    attributes: { "心情": 5 }
                }
            },
            { 
                text: "WM摇摇头说'当然不可以啦'，自己在减肥", 
                effects: { 
                    hearts: { hxz: -2 },
                    attributes: { "体力": 5, "心情": -3 }
                }
            },
            { 
                text: "WM接受并约他一起去上课", 
                requires: { attributes: { "魅力": 60 } },
                effects: { 
                    hearts: { hxz: 8, lzw: -2, lkw: -2 },
                    attributes: { "智慧": 5, "心情": 8 }
                }
            }
        ]
    },
    {
        text: "下课后，Lzw发消息邀请WM去图书馆一起学习。",
        choices: [
            { 
                text: "WM回复'好啊好啊'，欣然接受", 
                effects: { 
                    hearts: { hxz: -2, lzw: 8 },
                    attributes: { "智慧": 10, "体力": -5 }
                }
            },
            { 
                text: "WM说'当然不可以啦'，今天要去健身", 
                effects: { 
                    hearts: { lzw: -2 },
                    attributes: { "体力": 15, "智慧": -5 }
                }
            },
            { 
                text: "WM建议改天一起去咖啡厅学习", 
                requires: { money: 50 },
                effects: { 
                    hearts: { lzw: 10 },
                    money: -50,
                    attributes: { "智慧": 8, "心情": 10 }
                }
            }
        ]
    },
    {
        text: "周末，Lkw邀请WM去看电影，是最近很火的爱情片。",
        choices: [
            { 
                text: "WM开心地说'好啊好啊'，接受邀请", 
                requires: { money: 100 },
                effects: { 
                    hearts: { hxz: -2, lzw: -2, lkw: 8 },
                    money: -100,
                    attributes: { "心情": 15 }
                }
            },
            { 
                text: "WM建议换成动作片", 
                requires: { attributes: { "体力": 70 } },
                effects: { 
                    hearts: { lkw: 5 },
                    attributes: { "体力": 5, "心情": 8 }
                }
            },
            { 
                text: "WM皱眉说'当然不可以啦'，周末要复习", 
                effects: { 
                    hearts: { lkw: -5 },
                    attributes: { "智慧": 15, "心情": -5 }
                }
            }
        ]
    },
    {
        text: "Hxz生病了，WM得知这个消息后...",
        choices: [
            { 
                text: "WM买些药和食物去看望他", 
                requires: { money: 150 },
                effects: { 
                    hearts: { hxz: 12, lzw: -2, lkw: -2 },
                    money: -150,
                    attributes: { "心情": 10 }
                }
            },
            { 
                text: "WM说'好啊好啊'，给他煲汤", 
                requires: { attributes: { "智慧": 65 } },
                effects: { 
                    hearts: { hxz: 15 },
                    attributes: { "魅力": 10, "体力": -5 }
                }
            },
            { 
                text: "WM说'当然不可以啦'，装作不知道", 
                effects: { 
                    hearts: { hxz: -8, lzw: 2, lkw: 2 },
                    attributes: { "心情": -10 }
                }
            }
        ]
    },
    {
        text: "期末考试前，Lzw向WM求助一道难题。",
        choices: [
            { 
                text: "WM说'好啊好啊'，耐心教他解题方法", 
                requires: { attributes: { "智慧": 75 } },
                effects: { 
                    hearts: { lzw: 12 },
                    attributes: { "智慧": 15, "体力": -5 }
                }
            },
            { 
                text: "WM说'当然不可以啦'，建议他去问老师", 
                effects: { 
                    hearts: { lzw: -5 },
                    attributes: { "心情": -5 }
                }
            },
            { 
                text: "WM提议一起去找学霸讨论", 
                effects: { 
                    hearts: { lzw: 8 },
                    attributes: { "智慧": 20, "心情": 5 }
                }
            }
        ]
    },
    {
        text: "WM的生日到了，三个人都准备了礼物。Hxz送了一条项链，Lzw送了一本她喜欢的小说，Lkw送了一束花。",
        choices: [
            { 
                text: "WM最喜欢Hxz的礼物", 
                effects: { 
                    hearts: { hxz: 8, lzw: -2, lkw: -2 },
                    attributes: { "心情": 10 }
                }
            },
            { 
                text: "WM最喜欢Lzw的礼物", 
                effects: { 
                    hearts: { hxz: -2, lzw: 8, lkw: -2 },
                    attributes: { "智慧": 10, "心情": 10 }
                }
            },
            { 
                text: "WM开心地说'好啊好啊'，最喜欢Lkw的礼物", 
                effects: { 
                    hearts: { hxz: -2, lzw: -2, lkw: 8 },
                    attributes: { "魅力": 10, "心情": 15 }
                }
            }
        ]
    },
    {
        text: "学校举办舞会，WM需要选择一个舞伴。",
        choices: [
            { 
                text: "WM邀请Hxz", 
                effects: { 
                    hearts: { hxz: 12, lzw: -2, lkw: -2 },
                    attributes: { "魅力": 15, "心情": 10 }
                }
            },
            { 
                text: "WM邀请Lzw", 
                effects: { 
                    hearts: { hxz: -2, lzw: 12, lkw: -2 },
                    attributes: { "智慧": 15, "心情": 10 }
                }
            },
            { 
                text: "WM对Lkw说'好啊好啊'，邀请他做舞伴", 
                effects: { 
                    hearts: { hxz: -2, lzw: -2, lkw: 12 },
                    attributes: { "体力": 10, "心情": 15 }
                }
            }
        ]
    },
    {
        text: "WM遇到了一些困难，需要找人倾诉和寻求帮助。",
        choices: [
            { 
                text: "WM找Hxz倾诉", 
                effects: { 
                    hearts: { hxz: 8, lzw: -2, lkw: -2 },
                    attributes: { "心情": 10 }
                }
            },
            { 
                text: "WM找Lzw倾诉", 
                effects: { 
                    hearts: { hxz: -2, lzw: 8, lkw: -2 },
                    attributes: { "智慧": 10, "心情": 10 }
                }
            },
            { 
                text: "WM对其他人说'当然不可以啦'，只找Lkw倾诉", 
                effects: { 
                    hearts: { hxz: -2, lzw: -2, lkw: 8 },
                    attributes: { "魅力": 10, "心情": 15 }
                }
            }
        ]
    }
];
