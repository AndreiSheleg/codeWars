//метод .split['#'] разбивает url-адрес на массив, элементы которого разделены '#'
//всё, что после первого знака '#' отбрасываем, потому  возвращаем только 1-й элемент массива (№0 массива)
const removeUrlAnchor = url => url.split('#')[0]
