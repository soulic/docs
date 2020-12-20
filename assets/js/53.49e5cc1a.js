(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{420:function(t,a,s){"use strict";s.r(a);var n=s(46),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("简  述：")]),t._v(" "),s("code",[t._v("DTK")]),t._v(" 基础知识，尤其使用 "),s("code",[t._v("DTK")]),t._v(" 开发应用软件或者参与维护 "),s("code",[t._v("DTK")]),t._v(" 库，此都是一个良好的入门级别的知识；且本文档着重讲解 "),s("strong",[t._v("“DTK自定义控件”")]),t._v(" 的规范。 此处为一个搬运，为了易于搜索和自己做一个记录，收录进自己目录中。")]),t._v(" "),s("blockquote",[s("p",[t._v("给 DTK 库加了一个基础知识性的 "),s("a",{attrs:{href:"https://github.com/linuxdeepin/qt5integration/wiki/DTK-%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("WiKi"),s("OutboundLink")],1),t._v("，里面有一些 DTK 绘画基础知识、绘画原理流程、自定义控件规范、图标的使用。 其由 "),s("a",{attrs:{href:"https://github.com/zccrs",target:"_blank",rel:"noopener noreferrer"}},[t._v("zccrs"),s("OutboundLink")],1),t._v(" 所编写。")])]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("[TOC]")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"qstyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qstyle"}},[t._v("#")]),t._v(" QStyle")]),t._v(" "),s("p",[t._v("阅读此文档需要点此先熟悉以下类：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://doc.qt.io/qt-5/qstyle.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QStyle"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://doc.qt.io/qt-5/qstyleoption.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QStyleOption"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://doc.qt.io/qt-5/qstylepainter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QStylePainter"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://doc.qt.io/qt-5/qpalette.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QPalette"),s("OutboundLink")],1)])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"dtk-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dtk-style"}},[t._v("#")]),t._v(" DTK Style")]),t._v(" "),s("p",[t._v("DTK Style插件的实现可以划分为两部分：")]),t._v(" "),s("ul",[s("li",[t._v("Qt 库的内置控件")]),t._v(" "),s("li",[t._v("DTK 自定义控件")])]),t._v(" "),s("p",[t._v("本文档着重讲解“DTK自定义控件”的规范。DTK Widget 模块跟控件样式相关的主要有三个类：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://gitlab.deepin.io/dde-v20/dtkwidget/blob/master/src/widgets/dstyle.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("DStyle"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gitlab.deepin.io/dde-v20/dtkwidget/blob/master/src/widgets/dstyleoption.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("DStyleOption"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gitlab.deepin.io/dde-v20/dtkwidget/blob/master/src/widgets/dstyleoption.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("DPalette"),s("OutboundLink")],1)])]),t._v(" "),s("br"),t._v(" "),s("h5",{attrs:{id:"dstyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dstyle"}},[t._v("#")]),t._v(" DStyle")]),t._v(" "),s("p",[t._v("DStyle 继承于 QCommonStyle，在基类（QStyle）的基础上添加了一些枚举值以及绘制、加工类的函数。Qt 所有内置控件均在 paintEvent 中使用 QStyle 中提供的各种 drawXXX 接口进行绘制，另外，QStyle 中定义了大量的枚举类型，如 QStyle::PrimitiveElement、QStyle::ControlElement、QStyle::SubControl 等，这些枚举类型用于控件的绘制、布局、标志位等抽象接口的定义中。QStyle 满足了 Qt 原生控件自定义风格的需求，同理，DStyle 需要在此基础上满足 DTK 控件自定义风格的需求。")]),t._v(" "),s("br"),t._v(" "),s("h5",{attrs:{id:"dstyleoption"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dstyleoption"}},[t._v("#")]),t._v(" DStyleOption")]),t._v(" "),s("p",[t._v("用于扩展 QStyleOption。如 DStyleOptionButton 需要对 QStyleOptionButton 就行扩展，它需要同时继承 DStyleOption 和 QStyleOptionButton。")]),t._v(" "),s("br"),t._v(" "),s("h5",{attrs:{id:"dpalette"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dpalette"}},[t._v("#")]),t._v(" DPalette")]),t._v(" "),s("p",[t._v("控件的行为虽然不同，但是它们的配色有很多共同的地方，在 Qt 的 GUI 模块中，QPalette 类负责管理所有通用型颜色。每一个 QWidget 对象都有对应的 QPalette，当没有使用 QWidget::setPalette 指定控件使用的调色板时，其将跟随 QApplicatioin::palette。")]),t._v(" "),s("p",[t._v("QPalette 中定义了两个枚举类型：")]),t._v(" "),s("ul",[s("li",[t._v("ColorGroup 颜色的分组，包含：Disabled、Active（Normal）、Inactive 三个值")]),t._v(" "),s("li",[t._v("ColorRole  颜色的类型，包含：Background、Base、Foreground 等一系列值")])]),t._v(" "),s("p",[t._v("我们可以把 ColorRole 定义的颜色理解为 c++ 中的基本数据类型（int double等），则控件的设计类似于 c++ 类的设计，一个是封装基本数据类型定义一个类，另一个则是通过对基础颜色的组合创建一个控件。")]),t._v(" "),s("p",[t._v("QPalette 包含十几种常用的颜色，能满足 Qt 所有内置控件的绘制需要。但是 DTK 控件的设计在配色上更加的丰富，QPalette::ColorRole 中定义的基本颜色无法满足需求，因此在 dtkwidget 库中定义了 DPalette 类，并且添加了 DPalette::ColorType 的枚举类型，用于为 DTK 控件添加基本色的定义。\n"),s("br")]),t._v(" "),s("h2",{attrs:{id:"qstyle-和-qpalette-的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qstyle-和-qpalette-的关系"}},[t._v("#")]),t._v(" QStyle 和 QPalette 的关系")]),t._v(" "),s("p",[t._v("QApplication 会在初始化阶段（当使用 QApplication::setStyle 后也会执行以下步骤）调用 QStyle::standardPalette 获取一个标准的 QPalette 对象，这个对象在各个控件的 paintEvent 中被初始化给 QStyleOption （用于存储绘制控件所需要的所有数据），之后在 QStyle 绘制控件时则从 QStyleOption::palette 中获取定义的各种颜色值。对于 QApplication、QStyleOptin、QWidget 而言，它们只识别 QPalette，因此，DPalette 的初始化目前是放置在 QStyle::polish(QApplication*) 中，由 DPalette 自己管理 QApplication 和 QWidget 对象所对应的 DPalette 数据，在 style 插件的实现中则通过 DPalette::get 静态函数获取调色板对象。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"dtk-控件设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dtk-控件设计"}},[t._v("#")]),t._v(" DTK 控件设计")]),t._v(" "),s("p",[t._v("在 DDEV20 的设计中，有以下几个特点。首先先看一张图")]),t._v(" "),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/20200911155018.png",width:"100%"}}),t._v(" "),s("p",[t._v("每个控件分为五个状态：")]),t._v(" "),s("ul",[s("li",[t._v("Normal")]),t._v(" "),s("li",[t._v("Hover")]),t._v(" "),s("li",[t._v("Pressed")]),t._v(" "),s("li",[t._v("Disabled")]),t._v(" "),s("li",[t._v("Focus")])]),t._v(" "),s("p",[t._v("于此相关的是，主窗口层面还分为 Active 和 Inactive 状态，也就是窗口是否被激活的状态。窗口的状态可以和控件状态相互叠加，因此，叠加后的控件状态共有十种组合。不过，在控件中其实不用过于关心窗口的状态，窗口 Active 时控件都是默认样式，Inactive 时则把所有颜色的不透明度降低 40%。同理 Disabled 状态则把所有颜色的不透明度降低 60%。因此，除去这两个特殊状态后，控件中还剩余 Normal Hover Pressed Focus 四个状态需要关心。")]),t._v(" "),s("br"),t._v(" "),s("h5",{attrs:{id:"normal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#normal"}},[t._v("#")]),t._v(" Normal")]),t._v(" "),s("p",[t._v("控件默认状态，使用 DPalette 的 Normal 组中各个 ColorRole/ColorType 的定义即可。")]),t._v(" "),s("h4",{attrs:{id:"hover"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hover"}},[t._v("#")]),t._v(" Hover")]),t._v(" "),s("p",[t._v("控件的 hover 状态可以由 normal 状态经过颜色变换（调色：如提供颜色亮度等），可使用 DStyle::generatedBrush 获取加工后的颜色值。DStyle 定义了 StyleState 用于指定需要加工的目标颜色类型，默认 Normal 可以不进行任何加工。")]),t._v(" "),s("h4",{attrs:{id:"pressed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pressed"}},[t._v("#")]),t._v(" Pressed")]),t._v(" "),s("p",[t._v("和 Hover 状态一样，也是由 normal 状态经过颜色变换得到。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"代码流程描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码流程描述"}},[t._v("#")]),t._v(" 代码流程描述")]),t._v(" "),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/20200911155413.png",width:"80%"}}),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"字号使用规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字号使用规范"}},[t._v("#")]),t._v(" 字号使用规范")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitlab.deepin.io/dde-v20/dtkwidget/blob/master/src/widgets/dstyleoption.h#L156",target:"_blank",rel:"noopener noreferrer"}},[t._v("DFontManager"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("字号分为十个等级，T1-T10，默认为 T6 级别，当系统中字号大小改变时，所有级别基于默认级别进行同值增减。例如，T6 当前对应的字号为 16px，在控制中心将字号调整为 20px 后，T1-T10 的字号都将增加 4px。所有的控件设计中均不可直接指定字号大小，如果需要对特定的 QWidget 对象设置字号等级，可以使用 DFontSizeManager::bind 接口绑定到对应的级别。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"如何实现一个全新的控件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何实现一个全新的控件"}},[t._v("#")]),t._v(" 如何实现一个全新的控件")]),t._v(" "),s("p",[t._v("首先为此控件添加需要的枚举值，如 "),s("a",{attrs:{href:"https://gitlab.deepin.io/dde-v20/dtkwidget/blob/master/src/widgets/dsuggestbutton.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("DSuggestButton"),s("OutboundLink")],1),t._v("，QStyle 中已经包含了 QStyle::CE_PushButton 的定义，这部分不用再进行扩展，查看 QStyleOptionButton，它在 ButtonFeatures 中定义了按钮的一些特性，因此我们需要继承 QStyleOptionButton 进行扩展。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DStyleOptionButton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token base-clause"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QStyleOptionButton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DStyleOption")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ButtonFeature")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        SuggestButton "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CommandLinkButton "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        WarningButton "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SuggestButton "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QWidget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("widget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这是 DStyleOptionButton 的代码实现，添加了两个枚举值 SuggestButton、WarningButton。在 DSuggestButton 的 paintEvent 中将使用这些新加的值绘制自定义的按钮。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DSuggestButton")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("paintEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QPaintEvent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Q_UNUSED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    QStylePainter "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    DStyleOptionButton option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("features "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DStyleOptionButton")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ButtonFeatures")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DStyleOptionButton"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("SuggestButton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initStyleOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawControl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QStyle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CE_PushButton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("最终，对 QStylePainter::drawControl 的调用将变为对 QStyle::drawControl 的调用。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawControl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ControlElement element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" QStyleOption "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("opt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" QPainter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" QWidget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" CE_PushButton"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        QStyleOptionButton "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("opt_button "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" static_case"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("QStyleOptionButton"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opt_button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("features"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testFlag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DStyleOptionButton"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("SuggestButton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// draw suggest button")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样即完成了对 DSuggestButton 的绘制。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"如何自绘控件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何自绘控件"}},[t._v("#")]),t._v(" 如何自绘控件")]),t._v(" "),s("p",[t._v("有些控件在 Qt 以及 DTK 库中均不存在，在应用程序的开发中需要自己绘制实现，如控制中心个性化模块中的颜色选择控件：")]),t._v(" "),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/20200911155239.png",width:"70%"}}),t._v(" "),s("p",[t._v("paintEvent 代码：")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("paintEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QPaintEvent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    QPainter "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    QStyleOption opt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    opt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" borderWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pixelMetric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DStyle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("PM_FocusBorderWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("opt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" borderSpacing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pixelMetric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DStyle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("PM_FocusBorderSpacing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("opt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" QMargins "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("margins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("borderWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" borderSpacing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" borderWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" borderSpacing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" borderWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" borderSpacing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" borderWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" borderSpacing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n\n    pa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("marginRemoved")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("margins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 填充颜色背景")]),t._v("\n    pa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("QPen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("borderWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("palette"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("highlight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置边框的宽度和颜色")]),t._v("\n    pa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawEllipse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绘制选中的边框")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("从例子中可以看出，所有和颜色相关的数据均从 QPalette 中读取，所有和大小相关的数据均从 style 对应的接口中读取。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"如何自定义控件的一些参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何自定义控件的一些参数"}},[t._v("#")]),t._v(" 如何自定义控件的一些参数")]),t._v(" "),s("p",[t._v("如更改文本颜色：")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("QLabel "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nQPalette pa "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("palette")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QPalette"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Qt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPalette")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"如何添加图标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何添加图标"}},[t._v("#")]),t._v(" 如何添加图标")]),t._v(" "),s("p",[t._v("一个完整的应用程序主题需要关注的不仅仅是控件的样式，有时，程序中对图标的使用也需要区分深色还是浅色。在 Qt 库中，查找和使用图标都可以通过 QIcon 完成，为了方便图标自动跟随程序主题，DDE 桌面环境在 Qt platform theme 主题插件中添加了一个内置的图标主题，路径为："),s("code",[t._v('"qrc:/icons/deepin/builtin/[light/dark]"')]),t._v("，其中，"),s("code",[t._v("light")]),t._v("和"),s("code",[t._v("dark")]),t._v("子目录为可选，它们分别为应用程序提供亮色和暗色图标的存储，如果图标本身为通用型（在任何主题下都可使用），则图标文件直接放置到"),s("code",[t._v('"qrc:/icons/deepin/builtin"')]),t._v("目录即可。")]),t._v(" "),s("p",[t._v("图标分为三种类型：")]),t._v(" "),s("ul",[s("li",[t._v("TextType 纯文本性图标，其颜色会跟随画笔的前景色变化（和文字颜色保持一致）。文件放置路径："),s("code",[t._v('"qrc:/icons/deepin/builtin/[light/dark]/texts"')])]),t._v(" "),s("li",[t._v("ActionType 动作型图标，其颜色会在其 Mode 改变时跟随画笔前景色（Normal模式图标颜色不会发生变化）。文件放置路径："),s("code",[t._v('"qrc:/icons/deepin/builtin/[light/dark]/actions"')])]),t._v(" "),s("li",[t._v("IconType 图标型图标，其颜色在任何模式下都不会变化。文件放置路径："),s("code",[t._v('"qrc:/icons/deepin/builtin/[light/dark]/icons"')])])]),t._v(" "),s("p",[t._v("图标名称规范：")]),t._v(" "),s("p",[t._v("名称前面需要添加能标示当前程序的前缀，例如"),s("code",[t._v("控制中心")]),t._v('的图标文件 dcc_xxx_32px.svg（设计大小为32）每一个都会有 "dcc_" 的前缀，其后跟图标s名称（图标名称单词间使用 "_" 符号链接，且全部使用小写字母），再接着，"_32px" 为图标大小标识，标识此图标默认大小，最后的 ".svg" 为图标文件后缀名。')]),t._v(" "),s("p",[t._v("后记：")]),t._v(" "),s("p",[t._v('qrc 表示是一个 Qt 资源文件，此文件需要应用程序中自行创建。"/icons/deepin/builtin" 为路径的固定前缀，随后的目录则为三种类型主题对应的目录。"actions" 为图标的类型目录，目前支持 "texts"、"actions" 和 "icons" 三种类型，"texts" 和 "actions" 目录用于放置一些工具性图标（一般都比较小，且颜色单一），"icons" 则用于放置一些颜色丰富的图标。')]),t._v(" "),s("p",[t._v('添加图标文件后，在程序中只需要使用 QIcon::fromTheme("dcc_xxx") 即可获取当前主题对应的图标对象，"dcc_xxx" 为图标文件名称，'),s("code",[t._v("不包含图标大小标识和文件后缀名！")])]),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"此规范仅用于约定应用程序中图标的存储和使用-其它图片资源不可使用此规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#此规范仅用于约定应用程序中图标的存储和使用-其它图片资源不可使用此规范"}},[t._v("#")]),t._v(" 此规范仅用于约定应用程序中图标的存储和使用，其它图片资源不可使用此规范！")]),t._v(" "),s("h4",{attrs:{id:"icon-demo-zip-示例程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icon-demo-zip-示例程序"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"uploads/407ea902dae4be5564567aae12e25d0d/icon_demo.zip"}},[t._v("icon_demo.zip")]),t._v(" #示例程序")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"下载地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载地址"}},[t._v("#")]),t._v(" 下载地址：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/xmuli/QtExamples",target:"_blank",rel:"noopener noreferrer"}},[t._v("QtExamples"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("欢迎 "),s("code",[t._v("star")]),t._v(" 和 "),s("code",[t._v("fork")]),t._v(" 这个系列的 QT / DTK 学习，附学习由浅入深的目录。")])])}),[],!1,null,null,null);a.default=e.exports}}]);