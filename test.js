var nodepParser = require('node-html-parser')
var parse = nodepParser.parse

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

var inputHtml = '&lt;p class=&quot;lead text-left&quot; style=&quot;margin-bottom: 23px; color: rgb(102, 102, 102); font-family: Roboto, &amp;quot;Helvetica Neue&amp;quot;, Helvetica, Arial, sans-serif; letter-spacing: 0.1px; background-color: rgba(255, 255, 255, 0.8);&quot;&gt;&lt;strong&gt;Производим 3D печатью единичные и мелкосерийные изделия любой сложности из различных пластиков (ABS, PLA, SBS и т.д., в т.ч. гибкие):&lt;/strong&gt;&amp;nbsp;&lt;br&gt;- детали приборов и электроники (корпуса, монтажные крепления)&amp;nbsp;&lt;br&gt;- мастер модели для производства силиконовых форм (литье шоколада, теста)&amp;nbsp;&lt;br&gt;- персональные сувениры и подарки (брелки с корпоративной символикой, игрушки и т.д.)&amp;nbsp;&lt;br&gt;- аксессуары и детали для современных гаджетов (чехлы, крепления, авто аксессуары)&amp;nbsp;&lt;br&gt;&lt;strong&gt;Стоимость 3D печати - от 7 руб./г (Точная стоимость зависит от материала и объема заказа)&lt;/strong&gt;&amp;nbsp;&lt;br&gt;Проводим 3D моделирование и 3D проектирование изделий по чертежам, размерам, шаблону или фото. Стоимость обговаривается индивидуально.&amp;nbsp;&lt;br&gt;Работаем как с юридическими, так и с физическими лицами (наличный и безналичный расчет).&lt;/p&gt;&lt;p class=&quot;lead text-left&quot; style=&quot;margin-bottom: 23px; color: rgb(102, 102, 102); font-family: Roboto, &amp;quot;Helvetica Neue&amp;quot;, Helvetica, Arial, sans-serif; letter-spacing: 0.1px; background-color: rgba(255, 255, 255, 0.8);&quot;&gt;&lt;strong&gt;Изготовление пластиковых деталей любой сложности для ремонта различной техники, приборов или автомобилей: шестеренки, защелки, переключатели и любые другие элементы.&lt;/strong&gt;&amp;nbsp;&lt;br&gt;Работаем по всей России, с компаниями и частными лицами: отправляем заказы почтой и транспортными компаниями.&amp;nbsp;&lt;br&gt;Восстановление любого пластикового элемента по Вашим эскизам, чертежам или образцам.&lt;/p&gt;';
inputHtml = inputHtml.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')


var root = nodepParser.parse(another_html)
root.childNodes.forEach(childNode => {
    childNode.removeAttribute('class')
    childNode.removeAttribute('style')
})

var str = root.toString()
